/**
 * title: 禁用状态
 * description: 添加 disabled 属性即可禁用按钮。
 */

import React from 'react';
import { Button } from '@velvet-ui/core';

export default function DisabledButtonExample() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button disabled>
        默认禁用
      </Button>
      <Button type="primary" disabled>
        主要禁用
      </Button>
      <Button type="dashed" disabled>
        虚线禁用
      </Button>
      <Button type="link" disabled>
        链接禁用
      </Button>
      <Button type="text" disabled>
        文本禁用
      </Button>
    </div>
  );
} 