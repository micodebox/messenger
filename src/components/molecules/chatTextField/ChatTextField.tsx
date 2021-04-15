import React, { useState } from 'react';

import { IconButton, TextField } from 'components/atoms';
import { SendIcon } from 'components/atoms/icons';

import { useStyles } from './ChatTextField.styles';
import { ChatTextFieldProps } from './ChatTextField.types';

export const ChatTextField = ({ onSubmit }: ChatTextFieldProps) => {
  const classes = useStyles();
  const [message, setMessage] = useState<string>();

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    if (message && message !== '' && onSubmit) {
      onSubmit(message);
    }

    setMessage('');
  };

  return (
    <TextField
      multiline
      placeholder="Type message here..."
      size="small"
      fullWidth
      variant="filled"
      InputProps={{
        endAdornment: (
          <IconButton className={classes.sendButton} onClick={handleSubmit}>
            <SendIcon />
          </IconButton>
        ),
      }}
      classes={{
        root: classes.chatTextBox,
      }}
      value={message}
      onChange={handleChangeText}
    />
  );
};
