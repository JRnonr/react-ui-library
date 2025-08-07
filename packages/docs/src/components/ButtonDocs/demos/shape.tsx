/**
 * title: 按钮形状
 * description: 按钮有三种形状：默认、圆角、圆形。
 */

import React from 'react';
import { Button } from '@velvet-ui/core';

const ShapeDemo: React.FC = () => {
  return (
    <div className="demo-buttons">
      <Button>Default</Button>
      <Button shape="round">Round</Button>
      <Button shape="circle" icon="🔍" />
    </div>
  );
};

export default ShapeDemo; 