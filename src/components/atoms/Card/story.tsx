import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Card from '.';

const meta = { component: Card } satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleContent = (
  <div>
    <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>Card Title</h3>
    <p style={{ margin: 0, color: '#6b7280' }}>
      This is some sample content inside the card. Cards are great for organizing information.
    </p>
  </div>
);

export const Default: Story = {
  args: {
    children: sampleContent,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: sampleContent,
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: sampleContent,
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <img
        src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
        alt="Card with no padding"
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
      />
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: sampleContent,
  },
};

export const MediumPadding: Story = {
  args: {
    padding: 'md',
    children: sampleContent,
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: sampleContent,
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: sampleContent,
  },
};

export const Clickable: Story = {
  args: {
    clickable: true,
    hoverable: true,
    onClick: () => alert('Card clicked!'),
    children: sampleContent,
  },
};
