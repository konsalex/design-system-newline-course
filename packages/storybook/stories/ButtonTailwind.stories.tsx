import { Button } from '@newline-ds/react/src/ButtonTailwind';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@newline-ds/react/lib/output.css';

export default {
  title: 'Newline/Tailwind Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
