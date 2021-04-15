import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: `calc(100vh - ${theme.spacing(10)}px)`,
    borderRight: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(1),
    overflowX: 'hidden',
  },
}));
