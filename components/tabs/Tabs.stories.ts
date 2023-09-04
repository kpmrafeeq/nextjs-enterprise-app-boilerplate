import type { Meta, StoryObj } from '@storybook/react';
import  BasicTabs from './Tabs';

const meta = {
  title: 'Example/Tabs',
  component: BasicTabs,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BasicTabs>;

export default meta;
type Story = StoryObj<typeof meta>;


