import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import './CodeBlock.css';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  expanded?: boolean;
  onToggle?: () => void;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  title = '代码示例',
  expanded = false,
  onToggle
}) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (expanded && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [expanded, code]);

  return (
    <div className="code-block">
      <div className="code-header">
        <div className="code-header-left">
          <span className="code-language">{language}</span>
          <span className="code-title">{title}</span>
        </div>
        <div className="code-header-right">
          <button 
            className="code-copy-btn"
            onClick={() => {
              navigator.clipboard.writeText(code);
            }}
            title="复制代码"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"/>
              <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"/>
            </svg>
          </button>
          {onToggle && (
            <button 
              className="code-toggle-btn"
              onClick={onToggle}
              title={expanded ? '收起' : '展开'}
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="currentColor"
                style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
              >
                <path d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"/>
              </svg>
            </button>
          )}
        </div>
      </div>
      {expanded && (
        <div className="code-content">
          <pre className="code-pre">
            <code 
              ref={codeRef}
              className={`hljs language-${language}`}
            >
              {code}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default CodeBlock; 