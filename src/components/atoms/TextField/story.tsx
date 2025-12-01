import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TextField from '.';
import SearchIcon from '@fortawesome/fontawesome-free/svgs/solid/search.svg?react';
import EnvelopeIcon from '@fortawesome/fontawesome-free/svgs/solid/envelope.svg?react';
import LockIcon from '@fortawesome/fontawesome-free/svgs/solid/lock.svg?react';
import UserIcon from '@fortawesome/fontawesome-free/svgs/solid/user.svg?react';

const meta = { component: TextField } satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    helperText: 'Must be at least 8 characters',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    error: true,
    errorMessage: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    disabled: true,
    value: 'john_doe',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small input',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    placeholder: 'Medium input',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large input',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const WithIconLeft: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    icon: SearchIcon,
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    label: 'Email',
    placeholder: 'your@email.com',
    type: 'email',
    icon: EnvelopeIcon,
    iconPosition: 'right',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input spans the full width',
    fullWidth: true,
  },
};

export const EmailWithIcon: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'you@example.com',
    icon: EnvelopeIcon,
    iconPosition: 'left',
    helperText: 'We will never share your email',
  },
};

export const PasswordWithIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    icon: LockIcon,
    iconPosition: 'left',
  },
};

export const UsernameWithIcon: Story = {
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    icon: UserIcon,
    iconPosition: 'left',
  },
};

export const FilledWithError: Story = {
  args: {
    variant: 'filled',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter email',
    error: true,
    errorMessage: 'This field is required',
  },
};
