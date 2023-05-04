import React, { FC } from 'react';
import ReactDom from 'react-dom';
import {
  Container,
  Box,
  Slide,
  DialogActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';

type Props = {
  onClose: () => void;
  open: boolean;
};

const ModalPopUp: FC<Props> = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog maxWidth='md' fullWidth onClose={handleClose} open={open}>
      <DialogTitle
        fontSize={26}
        sx={{
          color: '#686565',
          padding: '15px 24px',
        }}
      >
        Why to not do it?
      </DialogTitle>
      <Container disableGutters={true}>
        <DialogContent
          sx={{ fontSize: '16px', color: '#686565', padding: '0px 24px' }}
        >
          <p>
            Often our minds are running on auto-pilot. Sometimes we don't become
            aware of doing something until after we have done it. Sometimes the
            result of doing that thing had an unwanted outcome. We tell
            ourselves that we aren't going to do that again, but then we do it
            again, and again, and again. The first step in breaking the chain of
            a bad habit is to become aware that it is happening.
          </p>
          <p>
            Enter the Todon't app. The app that helps you remember the things
            you don't want to do.
          </p>
          <p>So go on, give it a try...or don't.</p>
        </DialogContent>
        <DialogActions>
          <Button
            type='button'
            color={'primary'}
            size='medium'
            sx={{
              margin: 1,
              fontSize: '16px',
            }}
            onClick={handleClose}
          >
            CLOSE
          </Button>
        </DialogActions>
      </Container>
    </Dialog>
  );
};

const Modal: FC<Props> = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <ModalPopUp {...props} />,
        document.getElementById('overlay-root')!
      )}
    </React.Fragment>
  );
};

export default Modal;
