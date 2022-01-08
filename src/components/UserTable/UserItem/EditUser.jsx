import { Fab, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Grid, IconButton } from '@mui/material';
import {Edit} from '@mui/icons-material';
import { Box } from '@mui/system';
import React,{useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams } from 'react-router-dom';
import { editUserAction } from '../../../actions/userActions';
import { getUserAction } from '../../../actions/userActions';
import UserForm from '../../UserForm/UserForm';


const state = {
    name: '',
    email: '',
    gender: '',
    status: ''
}


const EditUser = (props) => {
    const [open, setOpen] = useState("")
    const [userr, setUserr] = useState(state)
    const {name, email, gender, status} = userr
    const{user} = props

    const handleClickOpen= ()=>{
        setOpen(true)
        setUserr(user);
    }

    const handleClose=()=> {
        setOpen(false)
    }

    const onValueChange = (e) => {
        setUserr({...user, [e.target.name]: e.target.value})
        
    }
   

    // const  handleUpdate= ()=> {
    //         props.editUser(user.id,user.user)
    // }
    const  handleUpdate= ()=> {
        props.editUser({id:user.id, user})
}

    return (
        <>
        
            {/* <Button sx={{marginLeft:'10%', marginBottom:'10px'}}variant='contained' color='primary' onClick={handleClickOpen}>EDIT</Button> */}
            <IconButton aria-label="edit" onClick={handleClickOpen}>
                 <Edit />
            </IconButton>
        <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="lert-dialog-description"
                    setUser={user}
                >
                    <DialogTitle id="alert-dialog-title">EDIT</DialogTitle>
                    <DialogContent>
                        <form>
                            <TextField id='name' placeholder='Enter name' label="Name" variant="outlined" margin='dense' name="name" onChange={(e) => onValueChange(e)} value={name} fullWidth/>
                            <TextField id='email' placeholder='Enter email' label="Email" variant="outlined" margin='dense' name="email" onChange={(e) => onValueChange(e)} value={email} fullWidth/>
                            <TextField id='gender' placeholder='Enter gender' label="Gender" variant="outlined" margin='dense' name="gender" onChange={(e) => onValueChange(e)} value={gender} fullWidth/>
                            <TextField id='status' placeholder='Enter status' label="Status" variant="outlined" margin='dense' name="status" onChange={(e) => onValueChange(e)} value={status} fullWidth/>
                            
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary" variant='outlined'>Cancel</Button>
                        <Button onClick={handleUpdate} color="primary" variant='outlined' >Submit</Button>
                    </DialogActions>
                </Dialog>
        
        </>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
      editUser:(id) => {
        dispatch(editUserAction(id))
      },
    //   loadInit: (page) => {
    //     dispatch(getUserAction(page))
    //   }
        
    }
  }
  


  export default connect(null,mapDispatchToProps)(EditUser);
