import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  message: {
    background: theme.palette.warning.light,
    padding: theme.spacing(0, 1),
    borderRadius: theme.spacing(0.5),

    '&.sent': {
      background: theme.palette.success.light,
    },
  },
  breakWords: {
    wordBreak: 'break-all',
  },
}));
