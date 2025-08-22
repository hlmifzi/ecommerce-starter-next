import { 
    Fragment,
    ReactElement,
    useState,
    forwardRef,
    Ref,
    ReactNode
} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type DialogProps = {
  title?: string;
  open?: boolean;
  handleDialog?:any;
  children?: ReactNode;
  action?: ReactNode; // tombol atau komponen lain
}


export default function AlertDialogSlide({
    title,
    children,
    action,
    open = false,
    handleDialog,
}: DialogProps) {
  
  return (
    <Fragment>
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
        <DialogActions>
          {action}
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}