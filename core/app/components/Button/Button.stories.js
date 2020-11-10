import React from 'react';
import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({}, { variant: 'primary', label: 'Button' });

export const Secondary = Template.bind({}, { variant: 'secondary', label: 'Button' });

export const Danger = Template.bind({}, { variant: 'danger', label: 'Button' });

export const Success = Template.bind({}, { variant: 'success', label: 'Button' });

export const Warning = Template.bind({}, { variant: 'warning', label: 'Button' });

export const Link = Template.bind({}, { variant: 'link', label: 'Button' });
