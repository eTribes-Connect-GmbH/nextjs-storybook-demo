import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button from '.';
import ChevronRightIcon from '@fortawesome/fontawesome-free/svgs/solid/chevron-right.svg?react';
import PlusIcon from '@fortawesome/fontawesome-free/svgs/solid/plus.svg?react';
import TrashIcon from '@fortawesome/fontawesome-free/svgs/solid/trash.svg?react';

const meta = { component: Button } satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const WithIconLeft: Story = {
  args: {
    icon: PlusIcon,
    iconPosition: 'left',
    children: 'Add Item',
  },
};

export const WithIconRight: Story = {
  args: {
    icon: ChevronRightIcon,
    iconPosition: 'right',
    children: 'Next',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
};

export const DangerWithIcon: Story = {
  args: {
    variant: 'danger',
    icon: TrashIcon,
    iconPosition: 'left',
    children: 'Delete Account',
  },
};
