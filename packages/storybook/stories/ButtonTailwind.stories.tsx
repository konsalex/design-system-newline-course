import { Button } from '@newline-ds/react/src/ButtonTailwind';
import { Meta, StoryFn } from '@storybook/react';

import '@newline-ds/react/lib/output.css';

export default {
  title: 'Newline/Tailwind Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
