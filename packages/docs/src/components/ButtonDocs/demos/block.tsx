/**
 * title: 块级按钮
 * description: block 属性将使按钮适合其父宽度。
 */

import React from 'react';
import { Button } from '@velvet-ui/core';

const BlockDemo: React.FC = () => {
  return (
    <div className="demo-buttons" style={{ width: '300px' }}>
      <Button block style={{ marginBottom: '8px' }}>
        Block Button
      </Button>
      <Button type="primary" block>
        Block Primary Button
      </Button>
    </div>
  );
};

export default BlockDemo; 