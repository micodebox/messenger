import React from 'react';

import { Box } from 'components/atoms';
import { RoomPerson } from 'components/molecules';

import { useStyles } from './Rooms.styles';
import { RoomsProps } from './Rooms.types';

export const Rooms = ({ profiles, onSelectProfile, selectedProfile }: RoomsProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {profiles.map((profile) => (
        <RoomPerson
          key={profile.id}
          profile={profile}
          isSelected={selectedProfile && profile.id === selectedProfile.id}
          onSelect={onSelectProfile}
        />
      ))}
    </Box>
  );
};
