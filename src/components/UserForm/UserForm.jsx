import { Fab, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Grid } from '@mui/material';
import {Add} from '@mui/icons-material';
import { Box } from '@mui/system';
import React,{useState} from 'react'
import { addUserAction } from '../../actions/userActions';
import { connect } from 'react-redux';
import {getUserAction} from '../../actions/userActions'

const state = {
    name: '',
    email: '',
    gender: '',
    status: ''
}


const UserForm = (props) => {
    const [open, setOpen] = useState("")
    const [user, setUser] = useState(state)
    const {name, email, gender, status} = user

    const handleClickOpen=()=>{
        setOpen(true)
    }

    const handleClose=()=> {
        setOpen(false)
    }

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const  handleAdd=  ()=> {
            props.addUser(user)
            handleClose()
            setUser("")
            props.loadInit({page:1})
    }
    

    return (
        <>
        
            <Button sx={{marginLeft:'10%', marginBottom:'10px'}}variant='contained' color='primary' onClick={handleClickOpen}>Add user</Button>
        
        <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="lert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">CREATE</DialogTitle>
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
                        <Button onClick={handleAdd}  color="primary" variant='outlined' >Submit</Button>
                    </DialogActions>
                </Dialog>
        
        </>
    )
    }

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (data) => {
            dispatch(addUserAction(data))
        },
        loadInit: (page) => dispatch(getUserAction(page))
    }
}

export default connect(null, mapDispatchToProps)(UserForm);
