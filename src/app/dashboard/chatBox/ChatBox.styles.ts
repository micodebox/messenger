import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: `calc(100vh - ${theme.spacing(8)}px)`,
    width: '100%',
    overflowX: 'hidden',
  },
  chatWrapper: {
    width: `calc(100% - ${theme.spacing(2)}px)`,
    padding: theme.spacing(1),
  },
  chatBoxHeader: {
    padding: theme.spacing(2),
    width: `calc(100% - ${theme.spacing(4)}px)`,
  },
  messagesContainer: {
    margin: theme.spacing(1),
    background: theme.palette.grey[100],
    borderRadius: theme.spacing(0.5),
    height: `calc(100vh - ${theme.spacing(27)}px)`,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
}));
