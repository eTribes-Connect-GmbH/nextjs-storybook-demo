import type { Meta, StoryObj } from '@storybook/react';
import Section from './index';

const meta = { component: Section } satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: (
      <div>
        <h2>Primary Section</h2>
        <p>This section has a primary background color.</p>
      </div>
    ),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: (
      <div>
        <h2>Secondary Section</h2>
        <p>This section has a secondary background color.</p>
      </div>
    ),
  },
};
