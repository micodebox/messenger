import React from 'react';

import { Box } from 'components/atoms';
import { MessageItem } from '../messageItem/MessageItem';

import { MessagesHistoryProps } from './MessagesHistory.types';
import { useStyles } from './MessageHistory.styles';

export const MessagesHistory = ({ messages }: MessagesHistoryProps) => {
  const classes = useStyles();

  return (
    <Box width="100%" p={2} className={classes.root}>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </Box>
  );
};
