/**
 * title: 基础按钮
 * description: 按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
 */

import React from 'react';
import { Button } from '@velvet-ui/core';

const BasicDemo: React.FC = () => {
  return (
    <div className="demo-buttons">
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </div>
  );
};

export default BasicDemo; 