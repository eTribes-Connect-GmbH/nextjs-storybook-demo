import type { Meta, StoryObj } from '@storybook/react';
import SectionHeader from './index';

const meta = { component: SectionHeader } satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSubtitle: Story = {
  args: {
    title: 'Entdecke beliebte Städte',
    subtitle: 'Städte',
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: 'Beliebte Orte in Berlin',
  },
};
