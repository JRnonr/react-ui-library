import React, { useEffect, useRef } from 'react';
import { Copy, ChevronDown } from 'lucide-react';
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
      // 清除之前的高亮状态
      if (codeRef.current.dataset.highlighted) {
        delete codeRef.current.dataset.highlighted;
      }
      // 设置安全的代码内容
      codeRef.current.textContent = code;
      // 重新高亮
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
            <Copy size={16} />
          </button>
          {onToggle && (
            <button 
              className="code-toggle-btn"
              onClick={onToggle}
              title={expanded ? '收起' : '展开'}
            >
              <ChevronDown 
                size={16}
                style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
              />
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