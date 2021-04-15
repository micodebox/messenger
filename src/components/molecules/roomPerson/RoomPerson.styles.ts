import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0.5),
    width: `calc(100% - ${theme.spacing(1)}px)`,
    borderRadius: theme.spacing(0.5),
    cursor: 'pointer',
    '&.selected': {
      color: 'white',
      background: theme.palette.primary.main,
    },
  },
}));
