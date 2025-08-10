import { default as React } from '../../../react';
export type ButtonOwnProps = {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    block?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    style?: React.CSSProperties;
    as?: React.ElementType;
};
export declare const Button: React.ForwardRefExoticComponent<ButtonOwnProps & React.HTMLAttributes<HTMLElement> & React.RefAttributes<Element>>;
