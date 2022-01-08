import React from 'react'

import UserTable from './UserTable/UserTable'
import UserForm from '././UserForm/UserForm'

const UserManager = (props) => {
    return(
        <>
            <UserForm />
            <UserTable />
            {/* <PaginationTable /> */}
        </>
    )
}

export default UserManager