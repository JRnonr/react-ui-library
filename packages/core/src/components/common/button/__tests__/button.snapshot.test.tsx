import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../button';

describe('Button 快照测试', () => {
  it('默认按钮应该匹配快照', () => {
    const { container } = render(<Button>测试按钮</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('primary类型按钮应该匹配快照', () => {
    const { container } = render(<Button type="primary">主要按钮</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('dashed类型按钮应该匹配快照', () => {
    const { container } = render(<Button type="dashed">虚线按钮</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('link类型按钮应该匹配快照', () => {
    const { container } = render(<Button type="link">链接按钮</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('text类型按钮应该匹配快照', () => {
    const { container } = render(<Button type="text">文本按钮</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('禁用状态按钮应该匹配快照', () => {
    const { container } = render(<Button disabled>禁用按钮</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('带自定义样式的按钮应该匹配快照', () => {
    const { container } = render(
      <Button style={{ backgroundColor: 'red', color: 'white' }}>
        自定义样式按钮
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('带自定义类名的按钮应该匹配快照', () => {
    const { container } = render(
      <Button className="custom-button">自定义类名按钮</Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
}); 