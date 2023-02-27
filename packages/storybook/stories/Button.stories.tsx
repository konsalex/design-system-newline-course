// import { Button, ButtonProps } from '@newline-ds/react';
import React, { ComponentProps, useRef, useState } from 'react';
import { Button } from '@newline-ds/react/src/Button';
import { Meta, StoryFn } from '@storybook/react';
import {
  Menu,
  MenuHeader,
  MenuItem,
  MenuItems,
} from '@neo4j-ndl/react';


export default {
  title: 'Newline/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const NestedMenu: StoryFn<ComponentProps<typeof Menu>> = (args) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
      <Menu
        {...args}
        id="default-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <MenuItems>
          <MenuItem onClick={() => null} title="Action 1" />
          <MenuItem title="Action 2">
            {({ nestedMenuProps }) => (
              <Menu
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                {...nestedMenuProps}
              >
                <MenuItems>
                  <MenuItem title="SubItem1" />
                  <MenuItem title="SubItem2" />
                  <MenuItem title="SubItem3">
                    {({ nestedMenuProps }) => (
                      <Menu
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        {...nestedMenuProps}
                      >
                        <MenuItems>
                          <MenuItem title="SubItem1" />
                          <MenuItem title="SubItem2" />
                        </MenuItems>
                      </Menu>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            )}
          </MenuItem>
          <MenuItem title="Action 3" description="Action 3 is awesome" />
        </MenuItems>
      </Menu>
  );
};
