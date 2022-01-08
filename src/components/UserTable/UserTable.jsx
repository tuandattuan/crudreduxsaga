import React, { useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow   } from "@mui/material";
import { connect } from 'react-redux';
import {getUserAction} from '../../actions/userActions'
import DeleteUser from './UserItem/DeleteUser.jsx'
import EditUser from './UserItem/EditUser.jsx'

const UserTable = (props)=>  {
    const {users,page} = props
    //console.log(props.data.page,'page nhiu')
    useEffect(()=>{
        props.loadInit({page:1})
    }, [page])

        return (
            <>
            <TableContainer sx={{width:'80%', margin:'auto'}} component={Paper}>
            
            
            <Table  >
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>EMAIL</TableCell>
                        <TableCell>GENDER</TableCell>
                        <TableCell>STATUS</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) =>                      
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.gender}</TableCell>
                            <TableCell>{user.status}</TableCell>
                            <TableCell>
                                <EditUser
                                    key={user.id} user={user}
                                />
                                <DeleteUser
                                    key={user.id} user={user}
                                />
                                
                            </TableCell>
                        </TableRow>
                    )}                      
                </TableBody>
            </Table>
            
        </TableContainer>
            </>
        );
    
}


const mapStateToProps = (state) =>{
    return {
        users: state.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadInit: (page) => dispatch(getUserAction(page))
    };
}



export default connect(
    mapStateToProps,mapDispatchToProps
)(UserTable);