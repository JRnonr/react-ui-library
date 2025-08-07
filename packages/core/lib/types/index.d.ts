export interface ComponentProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type Position = 'top' | 'right' | 'bottom' | 'left';
export type Alignment = 'start' | 'center' | 'end';
export type Status = 'default' | 'loading' | 'success' | 'error' | 'warning';
