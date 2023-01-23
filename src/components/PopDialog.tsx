import React, { useContext } from 'react';
import AssessmentContext from '../Context/AssessmentContext';
import Details from './Details';

import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';

import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography
} from '@mui/material';

//For dialog Box
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PopDialog() {
  const { setOpen, open } = useContext(AssessmentContext);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Reservation
            </Typography>
          </Toolbar>
        </AppBar>
        <Details />
      </Dialog>
    </div>
  );
}

export default PopDialog;
