import { default as React } from '../../react';
export type PropsOf<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;
export type PolyProps<T extends React.ElementType, P> = P & {
    as?: T;
} & Omit<PropsOf<T>, keyof P | 'as'>;
