import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('velvet-btn');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('renders with different types', () => {
    const { rerender } = render(<Button type="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('velvet-btn-primary');

    rerender(<Button type="dashed">Dashed</Button>);
    expect(screen.getByRole('button')).toHaveClass('velvet-btn-dashed');

    rerender(<Button type="text">Text</Button>);
    expect(screen.getByRole('button')).toHaveClass('velvet-btn-text');

    rerender(<Button type="link">Link</Button>);
    expect(screen.getByRole('button')).toHaveClass('velvet-btn-link');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('velvet-btn-small');

    rerender(<Button size="large">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('velvet-btn-large');
  });

  it('renders with different shapes', () => {
    const { rerender } = render(<Button shape="round">Round</Button>);
    expect(screen.getByRole('button')).toHaveClass('velvet-btn-round');

    rerender(<Button shape="circle">Circle</Button>);
    expect(screen.getByRole('button')).toHaveClass('velvet-btn-circle');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('prevents click when disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('prevents click when loading', () => {
    const handleClick = jest.fn();
    render(<Button loading onClick={handleClick}>Loading</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('velvet-btn-disabled');
  });

  it('shows loading state', () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('velvet-btn-loading');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('velvet-btn-disabled');
  });

  it('renders with left icon', () => {
    render(<Button icon="→">With Icon</Button>);
    expect(screen.getByText('→')).toBeInTheDocument();
  });

  it('renders with right icon', () => {
    render(<Button iconRight="➡️">With Right Icon</Button>);
    expect(screen.getByText('➡️')).toBeInTheDocument();
  });

  it('renders as block element', () => {
    render(<Button block>Block Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('velvet-btn-block');
  });

  it('renders with different html types', () => {
    const { rerender } = render(<Button htmlType="submit">Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');

    rerender(<Button htmlType="reset">Reset</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Button</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('spreads additional props', () => {
    render(<Button data-testid="test-button" aria-label="Test">Test</Button>);
    const button = screen.getByTestId('test-button');
    expect(button).toHaveAttribute('aria-label', 'Test');
  });

  it('renders loading icon when loading', () => {
    render(<Button loading>Loading</Button>);
    const loadingIcon = screen.getByRole('button').querySelector('.velvet-btn-loading-icon');
    expect(loadingIcon).toBeInTheDocument();
  });

  it('renders text content correctly', () => {
    render(<Button>Button Text</Button>);
    const textElement = screen.getByRole('button').querySelector('.velvet-btn-text');
    expect(textElement).toHaveTextContent('Button Text');
  });
}); 