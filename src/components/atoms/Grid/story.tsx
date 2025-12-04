import type { Meta, StoryObj } from '@storybook/react';
import Grid from './index';
import Card from '../Card';

const meta = { component: Grid } satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card>Card 1</Card>
        <Card>Card 2</Card>
        <Card>Card 3</Card>
        <Card>Card 4</Card>
      </>
    ),
  },
};

export const CustomMinWidth: Story = {
  args: {
    minWidth: '250px',
    children: (
      <>
        <Card>Card 1</Card>
        <Card>Card 2</Card>
        <Card>Card 3</Card>
        <Card>Card 4</Card>
        <Card>Card 5</Card>
      </>
    ),
  },
};

export const CustomGap: Story = {
  args: {
    gap: 'var(--spacing-12)',
    children: (
      <>
        <Card>Card 1</Card>
        <Card>Card 2</Card>
        <Card>Card 3</Card>
      </>
    ),
  },
};
