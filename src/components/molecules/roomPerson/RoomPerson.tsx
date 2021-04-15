import React from 'react';
import clsx from 'classnames';

import { Box, Typography, UserAvatar } from 'components/atoms';

import { RoomPersonProps } from './RoomPerson.types';
import { useStyles } from './RoomPerson.styles';

export const RoomPerson = ({ profile, isSelected, onSelect }: RoomPersonProps) => {
  const classes = useStyles();

  const handleSelectPerson = () => {
    if (onSelect) {
      onSelect(profile);
    }
  };

  return (
    <Box width="100%" className={clsx(classes.root, isSelected && 'selected')} onClick={handleSelectPerson}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <UserAvatar name={profile.name} avatar={profile.avatar} />
          <Box ml={1} />
          <Typography variant="h6">{profile.name}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
