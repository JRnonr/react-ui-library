/**
 * title: 禁用状态
 * description: 添加 disabled 属性即可让按钮处于禁用状态。
 */

import React from 'react';
import { Button } from '@velvet-ui/core';

const DisabledDemo: React.FC = () => {
  return (
    <div className="demo-buttons">
      <Button disabled>Disabled</Button>
      <Button type="primary" disabled>Disabled Primary</Button>
    </div>
  );
};

export default DisabledDemo; 