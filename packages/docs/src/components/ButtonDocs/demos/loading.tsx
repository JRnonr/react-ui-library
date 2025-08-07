/**
 * title: 加载中状态
 * description: 添加 loading 属性即可让按钮处于加载状态，此时按钮不可点击。
 */

import React from 'react';
import { Button } from '@velvet-ui/core';

const LoadingDemo: React.FC = () => {
  return (
    <div className="demo-buttons">
      <Button loading>Loading</Button>
      <Button type="primary" loading>Loading Primary</Button>
    </div>
  );
};

export default LoadingDemo; 