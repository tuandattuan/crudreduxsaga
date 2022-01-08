import React,{useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getUserAction} from '../../../actions/userActions'

import {Delete} from '@mui/icons-material';
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, IconButton} from '@mui/material';
import { deleteUserAction } from '../../../actions/userActions';


const DeleteUser = (props) => {
  const [open, setOpen] = useState(false);
  const {user} = props

  const handleClickOpen = (id) => {
    setOpen(true);
   
  };

  const handleClose = () => {
    setOpen(false);
  };

  const  handleDelete = ()=> {  
    props.deleteUser(user.id) 
    
    props.loadInit({page:1})
}



  return (
    <div>
      <IconButton aria-label="delete" onClick={handleClickOpen} >
            <Delete />
      </IconButton>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions
          
        >
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleDelete}  autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser:(id) => {
      dispatch(deleteUserAction(id))
    },
    loadInit: (page) => {
      dispatch(getUserAction(page))
    }
      
  }
}

export default connect(null,mapDispatchToProps)(DeleteUser);