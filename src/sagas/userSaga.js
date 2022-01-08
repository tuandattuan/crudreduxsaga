import {takeEvery, put, call, all} from 'redux-saga/effects'
import * as types from '../config/acitonTypes'
import * as actions from '../actions/userActions'
import * as services from '../services/userServices'


function* getUsers({payload}) {
    try {
        const userss = yield call(services.getUsers,payload.page)
        console.log(userss.meta,'user la gi')
        yield put(actions.getUserSuccessAction(userss.data))       // châm tới data là data của api khi call về
    } catch (error) {
        console.log(error)
    }
}

function* addUsers({data}) {
    try {
        const user = yield call(services.addUsers, data)
        yield put(actions.addUserSuccessAction(user))

    } catch (error) {
        console.log(error)
    }
}

function* deleteUsers({id}) {
    try {
        const res = yield call(services.deleteUsers, id)
        yield put(actions.deleteUserSuccessAction(id))
    } catch (error) {
        console.log(error)
    }
}

function* editUsers({id:{id,user}}) {
    try {
        const res = yield call(services.editUsers, id)
        //console.log(res,'res la gi')
        yield put(actions.editUserSuccessAction(id))
    } catch (error) {
        console.log(error)
    }
}


function* watchGetUser() {
    yield takeEvery(types.GET_REQUEST, getUsers)
}
function* watchAddUser() {
    yield takeEvery(types.ADD_REQUEST,addUsers)
}
function* watchDeleteUser() {
    yield takeEvery(types.DELETE_REQUEST,deleteUsers)
}
function* watchEditUser() {
    yield takeEvery(types.EDIT_REQUEST,editUsers)
}

export function* userSaga() {
    yield all([
        watchGetUser(),
        watchAddUser(),
        watchDeleteUser(),
        watchEditUser()
    ])
}