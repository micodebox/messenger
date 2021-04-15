import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AppBar, Box, Toolbar, UserAvatar } from 'components/atoms';
import { HomeIcon } from 'components/atoms/icons';

import { TopBarProps } from './TopBar.types';
import { useStyles } from './TopBar.styles';

export const TopBar = ({ children, currentUser }: TopBarProps) => {
  const classes = useStyles();

  return (
    <AppBar color="primary" position="sticky">
      <Toolbar>
        <RouterLink to="/">
          <HomeIcon className={classes.logo} />
        </RouterLink>

        {children}

        <Box flexGrow={1} />

        <UserAvatar name={currentUser.name} avatar={currentUser.avatar} />
      </Toolbar>
    </AppBar>
  );
};
