import type { Meta, StoryObj } from '@storybook/react';
import Container from './index';

const meta = { component: Container } satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: (
      <div style={{ padding: '2rem', backgroundColor: '#f0f0f0' }}>
        Container XL - Max width: var(--container-xl)
      </div>
    ),
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: (
      <div style={{ padding: '2rem', backgroundColor: '#f0f0f0' }}>
        Container LG - Max width: var(--container-lg)
      </div>
    ),
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: (
      <div style={{ padding: '2rem', backgroundColor: '#f0f0f0' }}>
        Container MD - Max width: var(--container-md)
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: (
      <div style={{ padding: '2rem', backgroundColor: '#f0f0f0' }}>
        Container SM - Max width: var(--container-sm)
      </div>
    ),
  },
};
