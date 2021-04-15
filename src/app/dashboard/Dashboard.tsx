import React from 'react';

import { Grid } from 'components/atoms';

import { Rooms } from './rooms/Rooms';
import { ChatBox } from './chatBox/ChatBox';
import { DashboardProps } from './Dashboard.types';

export const Dashboard = ({
  currentUser,
  profiles,
  selectedProfile,
  messages = [],
  onSubmitMessage,
  ...otherProps
}: DashboardProps) => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Rooms
          profiles={profiles.filter((profile) => profile.id !== currentUser.id)}
          selectedProfile={selectedProfile}
          {...otherProps}
        />
      </Grid>
      <Grid item xs={9}>
        <ChatBox selectedProfile={selectedProfile} messages={messages} onSubmitMessage={onSubmitMessage} />
      </Grid>
    </Grid>
  );
};
