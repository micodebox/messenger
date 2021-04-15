import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: `calc(100% - ${theme.spacing(4)}px)`,
  },
}));
