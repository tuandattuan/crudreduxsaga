import { GET_SUCCESS, ADD_SUCCESS, DELETE_SUCCESS, EDIT_SUCCESS } from "../config/acitonTypes";
const initialState = []

export const userReducer = (state = initialState, action) => {
    console.log(action.users,'state co gi')
    switch(action.type) {
        case GET_SUCCESS:
            return action.users
        case ADD_SUCCESS:
            return [
                ...state,
                action.users
                ]
        case DELETE_SUCCESS:
            const {id} = action
            return state.filter(user => user.id !== id)
        case EDIT_SUCCESS:
            return [
                ...state,
                action.users             //chấm tới thằng success của acction
            ]
        default:
            return state
    }
}