// 从当前目录下的 button.tsx 文件中导出 Button 组件和 ButtonProps 类型
// 这样外部只需要 import { Button } from 'components/common/button'
// 而不必直接写 import { Button } from 'components/common/button/button';

export { Button } from './button';
export type { ButtonProps, ButtonType } from './button'; 