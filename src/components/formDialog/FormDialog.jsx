import React from 'react';
import { useFormik } from 'formik';
import { bool, func } from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export const FormDialog = ({ open = true, closeDialog }) => {
  const formik = useFormik({
    initialValues: {
      email: '0376766@gmail.com',
      message: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.message) {
        errors.message = 'Required';
      }
    },
    onSubmit: (val) => {
      alert(JSON.stringify(val, null, 2));
      closeDialog(false);
    },
  });
  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">You can send me message.</DialogTitle>
        <DialogContent>
          <FormControl>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                id="email"
                variant="outlined"
                margin="normal"
                fullWidth
                disabled
                name="email"
                type="email"
                value={formik.values.email}
              />
              <TextareaAutosize
                style={{ width: '100%' }}
                name="message"
                label="Enter message..."
                id="message"
                rowsMin={3}
                onChange={formik.handleChange}
                value={formik.values.message}
                placeholder="Enter message..."
              />
              <DialogActions>
                <Button onClick={() => closeDialog(false)} color="primary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Send
                </Button>
              </DialogActions>
            </form>
          </FormControl>
        </DialogContent>
      </Dialog>
    </div>
  );
};

FormDialog.propTypes = {
  open: bool.isRequired,
  closeDialog: func.isRequired,
};
