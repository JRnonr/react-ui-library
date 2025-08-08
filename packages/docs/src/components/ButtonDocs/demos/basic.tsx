/**
 * title: 基础按钮
 * description: 基础按钮组件，支持多种类型和状态。
 */

import React from 'react';
import { Button } from '@velvet-ui/core';

export default function ButtonExample() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button type="default">
        默认按钮
      </Button>
      <Button type="primary">
        主要按钮
      </Button>
      <Button type="dashed">
        虚线按钮
      </Button>
      <Button type="text">
        文本按钮
      </Button>
      <Button type="link">
        链接按钮
      </Button>
    </div>
  );
} 