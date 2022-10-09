// import { Button, ButtonProps } from '@newline-ds/react';
import { Button } from '@newline-ds/react/src/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Newline/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
