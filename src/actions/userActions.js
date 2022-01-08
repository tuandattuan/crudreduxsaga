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

export const editUserAction = (id) => {
    return {
        type: types.EDIT_REQUEST,
        id
    }
}

export const editUserSuccessAction = (users) => {
    return {
        type: types.EDIT_SUCCESS,
        users
    }
}