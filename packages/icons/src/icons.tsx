import React from 'react';

export type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
  color?: string;
};

const svgProps = (props: IconProps) => ({
  width: props.size ?? 16,
  height: props.size ?? 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: props.color ?? 'currentColor',
  strokeWidth: props.strokeWidth ?? 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: props.className,
  'aria-hidden': true,
  focusable: false,
  xmlns: 'http://www.w3.org/2000/svg'
});

export const IconCheck: React.FC<IconProps> = (props) => (
  <svg {...svgProps(props)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const IconChevronDown: React.FC<IconProps> = (props) => (
  <svg {...svgProps(props)}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const IconX: React.FC<IconProps> = (props) => (
  <svg {...svgProps(props)}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export const IconCopy: React.FC<IconProps> = (props) => (
  <svg {...svgProps(props)}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <rect x="2" y="2" width="13" height="13" rx="2" ry="2" />
  </svg>
);

export const IconLoader: React.FC<IconProps> = (props) => (
  <svg {...svgProps(props)}>
    <circle cx="12" cy="12" r="10" opacity="0.25" stroke={props.color ?? 'currentColor'} strokeWidth={props.strokeWidth ?? 2} strokeLinecap="round" className="btn__loading-circle" />
    <path d="M21 12a9 9 0 0 1-9 9" />
  </svg>
);

export const IconSearch: React.FC<IconProps> = (props) => (
  <svg {...svgProps(props)}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const IconClock: React.FC<IconProps> = (props) => (
  <svg {...svgProps(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

export const IconZap: React.FC<IconProps> = (props) => (
  <svg {...svgProps(props)}>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);

export const IconFileText: React.FC<IconProps> = (props) => (
  <svg {...svgProps(props)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
  </svg>
); 