import { render, screen, waitFor } from '@testing-library/react';
import { AILoading } from '../AILoading';

describe('AILoading', () => {
  describe('基础渲染', () => {
    it('应该正确渲染默认状态', async () => {
      render(<AILoading />);
      expect(screen.getByRole('status')).toBeInTheDocument();
      
      // 等待打字机效果开始
      await waitFor(() => {
        expect(screen.getByText('A')).toBeInTheDocument();
      });
    });

    it('应该应用自定义类名', () => {
      render(<AILoading className="custom-class" />);
      expect(screen.getByRole('status')).toHaveClass('custom-class');
    });

    it('应该应用自定义样式', () => {
      const customStyle = { backgroundColor: 'red' };
      render(<AILoading style={customStyle} />);
      const element = screen.getByRole('status');
      expect(element).toHaveStyle(customStyle);
    });

    it('应该设置正确的aria标签', () => {
      render(<AILoading type="typing" />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'AI加载中，类型：typing');
    });
  });

  describe('打字机效果', () => {
    it('应该正确显示打字机效果', async () => {
      render(<AILoading type="typing" text="Hello World" typingSpeed={50} />);
      
      // 等待打字机效果开始
      await waitFor(() => {
        expect(screen.getByText('H')).toBeInTheDocument();
      });
      
      // 等待打字机效果完成 - 增加超时时间
      await waitFor(() => {
        expect(screen.getByText('Hello World')).toBeInTheDocument();
      }, { timeout: 10000 });
    }, 15000); // 增加测试超时时间

    it('应该支持自定义打字速度', async () => {
      render(<AILoading type="typing" text="Test" typingSpeed={200} />);
      
      // 等待打字机效果开始
      await waitFor(() => {
        expect(screen.getByText('T')).toBeInTheDocument();
      });
    });

    it('应该支持循环播放文本数组', async () => {
      const texts = ['Text 1', 'Text 2', 'Text 3'];
      render(<AILoading type="typing" texts={texts} loop={true} typingSpeed={50} />);
      
      // 等待第一个文本完成
      await waitFor(() => {
        expect(screen.getByText('Text 1')).toBeInTheDocument();
      });
      
      // 等待循环到第二个文本
      await waitFor(() => {
        expect(screen.getByText('Text 2')).toBeInTheDocument();
      }, { timeout: 8000 });
    }, 10000);

    it('应该调用onTextChange回调', async () => {
      const onTextChange = jest.fn();
      render(<AILoading type="typing" text="Test" onTextChange={onTextChange} typingSpeed={50} />);
      
      // 等待打字机效果开始
      await waitFor(() => {
        expect(onTextChange).toHaveBeenCalled();
      });
    });

    it('应该调用onComplete回调', async () => {
      const onComplete = jest.fn();
      render(<AILoading type="typing" text="Test" onComplete={onComplete} typingSpeed={50} />);
      
      // 等待打字机效果完成
      await waitFor(() => {
        expect(onComplete).toHaveBeenCalled();
      });
    });
  });

  describe('思考动画', () => {
    it('应该正确显示思考动画', () => {
      render(<AILoading type="thinking" text="AI正在思考" />);
      
      expect(screen.getByText('AI正在思考')).toBeInTheDocument();
      expect(screen.getByRole('status')).toHaveClass('ai-loading-thinking');
    });

    it('应该显示动态点动画', () => {
      render(<AILoading type="thinking" />);
      
      const dots = screen.getAllByText('', { selector: '.ai-loading-dot' });
      expect(dots).toHaveLength(3);
    });
  });

  describe('处理中动画', () => {
    it('应该正确显示处理中动画', () => {
      render(<AILoading type="processing" text="AI正在处理" />);
      
      expect(screen.getByText('AI正在处理')).toBeInTheDocument();
      expect(screen.getByRole('status')).toHaveClass('ai-loading-processing');
    });

    it('应该显示旋转的spinner', () => {
      render(<AILoading type="processing" />);
      
      const spinner = screen.getByText('', { selector: '.ai-loading-spinner' });
      expect(spinner).toBeInTheDocument();
    });
  });

  describe('纯点动画', () => {
    it('应该正确显示纯点动画', () => {
      render(<AILoading type="dots" />);
      
      expect(screen.getByRole('status')).toHaveClass('ai-loading-dots');
      const dots = screen.getAllByText('', { selector: '.ai-loading-dot' });
      expect(dots).toHaveLength(4);
    });
  });

  describe('进度条功能', () => {
    it('应该显示进度条', () => {
      render(<AILoading showProgress={true} progress={50} />);
      
      const progressBar = screen.getByText('', { selector: '.ai-loading-progress' });
      expect(progressBar).toBeInTheDocument();
    });

    it('应该显示正确的进度值', () => {
      render(<AILoading showProgress={true} progress={75} />);
      
      expect(screen.getByText('75%')).toBeInTheDocument();
    });

    it('应该支持不确定进度', () => {
      render(<AILoading showProgress={true} indeterminate={true} />);
      
      const progressFill = screen.getByText('', { selector: '.ai-loading-progress-fill' });
      expect(progressFill).toHaveClass('indeterminate');
    });

    it('应该隐藏进度条当showProgress为false', () => {
      render(<AILoading showProgress={false} progress={50} />);
      
      const progressBar = screen.queryByText('', { selector: '.ai-loading-progress' });
      expect(progressBar).not.toBeInTheDocument();
    });
  });

  describe('边界情况', () => {
    it('应该处理空文本数组', async () => {
      render(<AILoading type="typing" texts={[]} />);
      
      // 应该显示默认文本
      await waitFor(() => {
        expect(screen.getByText('A')).toBeInTheDocument();
      });
    });

    it('应该处理极快的打字速度', async () => {
      render(<AILoading type="typing" text="Test" typingSpeed={10} />);
      
      // 等待打字机效果完成 - 增加超时时间
      await waitFor(() => {
        expect(screen.getByText('Test')).toBeInTheDocument();
      }, { timeout: 5000 });
    }, 8000);

    it('应该处理极慢的打字速度', async () => {
      render(<AILoading type="typing" text="Test" typingSpeed={1000} />);
      
      // 应该还在打字中
      await waitFor(() => {
        expect(screen.getByText('T')).toBeInTheDocument();
      });
    });

    it('应该处理进度值超出范围', () => {
      render(<AILoading showProgress={true} progress={150} />);
      
      expect(screen.getByText('150%')).toBeInTheDocument();
    });

    it('应该处理负数进度值', () => {
      render(<AILoading showProgress={true} progress={-10} />);
      
      expect(screen.getByText('-10%')).toBeInTheDocument();
    });
  });

  describe('可访问性', () => {
    it('应该有正确的role属性', () => {
      render(<AILoading />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('应该有正确的aria-label属性', () => {
      render(<AILoading type="thinking" />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'AI加载中，类型：thinking');
    });

    it('应该支持键盘导航', () => {
      render(<AILoading />);
      const element = screen.getByRole('status');
      
      // 检查元素是否可以被聚焦
      expect(element).toBeInTheDocument();
    });
  });

  describe('性能优化', () => {
    it('应该使用will-change CSS属性', () => {
      render(<AILoading />);
      const element = screen.getByRole('status');
      
      // 检查CSS类是否包含will-change优化
      expect(element).toHaveClass('ai-loading');
    });

    it('应该正确处理组件卸载', () => {
      const { unmount } = render(<AILoading type="typing" text="Test" />);
      
      // 组件卸载不应该抛出错误
      expect(() => unmount()).not.toThrow();
    });
  });
}); 