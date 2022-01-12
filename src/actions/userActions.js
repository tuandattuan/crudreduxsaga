import * as types from '../config/acitonTypes'

export const getUserAction = (payload) => {                       //còn thằng payload này là thằng saga payload gọi tới
    return {
        type: types.GET_REQUEST,
        payload
    }
}

export const getUserSuccessAction = (users) => {              //(users) de thang reducer gọi tới (action.user)
    return {
        type: types.GET_SUCCESS,
        users
    }
}


export const addUserAction = (data) => {
    return {
        type: types.ADD_REQUEST,
        data
    }
}

export const addUserSuccessAction = (users) => {
    return {
        type: types.ADD_SUCCESS,
        users
    }
}

export const deleteUserAction = (id) => {
    return {
        type: types.DELETE_REQUEST,
        id
    }
}

export const deleteUserSuccessAction = (id) => {
    return {
        type: types.DELETE_SUCCESS,
        id
    }
}

export const editUserAction = (user) => {
    return {
        type: types.EDIT_REQUEST,
        user
    }
}

export const editUserSuccessAction = (id) => {
    return {
        type: types.EDIT_SUCCESS,
        id
    }
}

export const editUserFailure = (id) => {
    return {
        type: types.EDIT_FAILURE,
        id
    }
}