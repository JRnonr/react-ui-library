/**
 * title: 按钮尺寸
 * description: 按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
 */

import React from 'react';
import { Button } from '@velvet-ui/core';

const SizeDemo: React.FC = () => {
  return (
    <div className="demo-buttons">
      <Button size="large">Large</Button>
      <Button>Default</Button>
      <Button size="small">Small</Button>
    </div>
  );
};

export default SizeDemo; 