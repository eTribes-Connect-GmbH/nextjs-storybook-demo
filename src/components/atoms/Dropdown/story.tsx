import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import Dropdown from '.';
import LocationIcon from '@fortawesome/fontawesome-free/svgs/solid/location-dot.svg?react';
import GlobeIcon from '@fortawesome/fontawesome-free/svgs/solid/globe.svg?react';

const meta = { component: Dropdown } satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const cityOptions = [
  { value: 'berlin', label: 'Berlin' },
  { value: 'hamburg', label: 'Hamburg' },
  { value: 'munich', label: 'Munich' },
  { value: 'cologne', label: 'Cologne' },
];

const countryOptions = [
  { value: 'de', label: 'Germany' },
  { value: 'at', label: 'Austria' },
  { value: 'ch', label: 'Switzerland' },
  { value: 'fr', label: 'France' },
  { value: 'it', label: 'Italy', disabled: true },
];

export const Default: Story = {
  args: {
    options: cityOptions,
    placeholder: 'Select a city',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'City',
    options: cityOptions,
    placeholder: 'Select your city',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Location',
    options: cityOptions,
    placeholder: 'Choose a location',
    helperText: 'Select the city you want to explore',
  },
};

export const WithValue: Story = {
  args: {
    label: 'City',
    options: cityOptions,
    value: 'berlin',
  },
};

export const Error: Story = {
  args: {
    label: 'City',
    options: cityOptions,
    placeholder: 'Select a city',
    error: true,
    errorMessage: 'Please select a city',
  },
};

export const Disabled: Story = {
  args: {
    label: 'City',
    options: cityOptions,
    value: 'berlin',
    disabled: true,
  },
};

export const DisabledOptions: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    placeholder: 'Select a country',
    helperText: 'Italy is currently unavailable',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    options: cityOptions,
    placeholder: 'Small dropdown',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    options: cityOptions,
    placeholder: 'Medium dropdown',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    options: cityOptions,
    placeholder: 'Large dropdown',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'City',
    options: cityOptions,
    placeholder: 'Select a city',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Location',
    options: cityOptions,
    placeholder: 'Select a city',
    icon: <LocationIcon />,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'City',
    options: cityOptions,
    placeholder: 'Select a city',
    fullWidth: true,
  },
};

export const EmptyOptions: Story = {
  args: {
    label: 'City',
    options: [],
    placeholder: 'No options available',
  },
};

export const FilledWithIcon: Story = {
  args: {
    variant: 'filled',
    label: 'Language',
    options: countryOptions,
    placeholder: 'Select a country',
    icon: <GlobeIcon />,
  },
};

export const Interactive: Story = {
  args: {
    options: cityOptions,
    placeholder: 'Choose a city',
  },
  render: (args) => {
    const [selectedCity, setSelectedCity] = useState('');

    return (
      <div>
        <Dropdown
          {...args}
          label="Select Your City"
          value={selectedCity}
          onChange={setSelectedCity}
          helperText="Your selection will appear below"
        />
        {selectedCity && (
          <p style={{ marginTop: '16px', color: '#005e6e' }}>
            You selected: <strong>{cityOptions.find((c) => c.value === selectedCity)?.label}</strong>
          </p>
        )}
      </div>
    );
  },
};
