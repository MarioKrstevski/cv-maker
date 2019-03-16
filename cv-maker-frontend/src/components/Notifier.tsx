import Snackbar from '@material-ui/core/Snackbar';
import React, { useEffect, useState } from 'react';

let openSnackbarFn;

function Notifier() {
  const [state, setState] = useState({ open: false, message: '' });

  const openSnackbar = ({ message }) => {
    setState({ open: true, message });
  };

  const handleSnackbarClose = () => {
    setState({ open: false, message: '' });
  };

  useEffect(() => {
    openSnackbarFn = openSnackbar;
    return () => (openSnackbarFn = null);
  }, []);

  const message = <span id="snackbar-message-id" dangerouslySetInnerHTML={{ __html: state.message }} />;

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        message={message}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        open={state.open}
        snackbarcontentprops={{
          'aria-describedby': 'snackbar-message-id',
        }}
      />
    </div>
  );
}

export function openSnackbar({ message }) {
  openSnackbarFn({ message });
}

export default Notifier;
