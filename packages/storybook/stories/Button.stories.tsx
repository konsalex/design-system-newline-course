// import { Button, ButtonProps } from '@newline-ds/react';
import { Button } from '@newline-ds/react/src/Button';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Newline/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
