import React from 'react';

import { Box, Typography, UserAvatar } from 'components/atoms';
import { ChatTextField, MessagesHistory } from 'components/molecules';

import { ChatBoxProps } from './ChatBox.types';
import { useStyles } from './ChatBox.styles';

export const ChatBox = ({ selectedProfile, messages = [], onSubmitMessage }: ChatBoxProps) => {
  const classes = useStyles();

  const handleSubmitMessage = (message: string) => {
    onSubmitMessage(message);
  };

  return (
    <Box className={classes.root} display="flex" alignItems="center" justifyContent="center">
      {!selectedProfile && <Typography variant="h6">Please select a user and start chat.</Typography>}
      {selectedProfile && (
        <Box
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Box display="flex" alignItems="center" width="100%" className={classes.chatBoxHeader}>
            <UserAvatar name={selectedProfile.name} avatar={selectedProfile.avatar} />
            <Box ml={1} />
            <Typography variant="h6">{selectedProfile.name}</Typography>
          </Box>
          <Box flexGrow={1} width="100%">
            <div className={classes.messagesContainer}>
              <MessagesHistory
                messages={messages.map((message) => ({
                  ...message,
                  isSent: message.sender.id !== selectedProfile.id,
                }))}
              />
            </div>
          </Box>
          <Box className={classes.chatWrapper}>
            <ChatTextField onSubmit={handleSubmitMessage} />
          </Box>
        </Box>
      )}
    </Box>
  );
};
