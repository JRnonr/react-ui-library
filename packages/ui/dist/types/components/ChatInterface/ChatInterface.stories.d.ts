import { Meta, StoryObj } from '@storybook/react-vite';
import { ChatInterface } from './ChatInterface';
declare const meta: Meta<typeof ChatInterface>;
export default meta;
type Story = StoryObj<typeof ChatInterface>;
export declare const Basic: Story;
export declare const WithLongHistory: Story;
