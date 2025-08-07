/**
 * title: 图标按钮
 * description: 当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。
 */

import React from 'react';
import { Button } from '@velvet-ui/core';

const IconDemo: React.FC = () => {
  return (
    <div className="demo-buttons">
      <Button icon="→">Launch</Button>
      <Button icon="↑" iconRight="↓">Upload</Button>
      <Button icon="🔍" shape="circle" />
    </div>
  );
};

export default IconDemo; 