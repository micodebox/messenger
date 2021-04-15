import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  chatTextBox: {
    '& > .MuiFilledInput-root': {
      padding: theme.spacing(1),
    },
  },
  sendButton: {
    padding: theme.spacing(0.5),
  },
}));
