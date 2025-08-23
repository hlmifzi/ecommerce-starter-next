import { 
    Fragment,
    ReactElement,
    useState,
    forwardRef,
    Ref,
    ReactNode
} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { MdOutlineClose } from "react-icons/md";

import styles from "./sharedModal.module.scss"

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type DialogProps = {
  title?: ReactNode;
  open?: boolean;
  handleDialog?:any;
  classNameContainer?:any;
  children?: ReactNode;
  action?: ReactNode; // tombol atau komponen lain
}


export default function SharedModal({
    title,
    children,
    action,
    open = false,
    handleDialog,
    classNameContainer
}: DialogProps) {
  
  return (
    <Fragment>
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        className={`${styles.dialogContainer} ${classNameContainer}`}
        keepMounted
        onClose={handleDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={styles.dialogHeader}>
          <DialogTitle>
            {title}
          </DialogTitle>
          <MdOutlineClose onClick={handleDialog} />
        </div>
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