import React from 'react';
import clsx from 'classnames';

import { Box, Typography, UserAvatar } from 'components/atoms';

import { MessageItemProps } from './MessageItem.types';
import { useStyles } from './MessageItem.styles';

export const MessageItem = ({ message }: MessageItemProps) => {
  const classes = useStyles();

  return (
    <>
      <Box display="flex" mb={2}>
        <UserAvatar name={message.sender.name} avatar={message.sender.avatar} />
        <Box ml={2} />
        <Box className={classes.breakWords}>
          <Typography variant="subtitle1">{message.isSent ? 'Me' : message.sender.name}</Typography>
          <Box className={clsx(classes.message, message.isSent && 'sent')}>
            <Typography variant="body1">{message.message}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
