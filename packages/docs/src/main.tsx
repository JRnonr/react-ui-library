import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../../packages/core/src/styles/design-system.css';
import '../../../packages/core/src/components/common/button/button.less';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 