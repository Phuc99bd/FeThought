import {
    AUTH_LOGIN_COMPLETED,
    REGISTER_COMPLETED,
    AUTH_AUTHENTION_FAIL,
    AUTH_ACTIVE_ACCOUNT,
    AUTH_AUTHENTION_COMPLETED,
    AUTH_FORGOT_NEW,
    AUTH_FORGOT_SUCCESS
} from "./actionType";


const initialState = {
    error: null,
    success: false,
    authention: false,
    active_account: false,
    new_password: false,
    redirect_login: false
}

const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case AUTH_LOGIN_COMPLETED:
            return {...state, success: true}
        case REGISTER_COMPLETED:
            return {...state,success: action.success,error: null}
        case AUTH_AUTHENTION_FAIL:
            return {...state,error: action.error}
        case AUTH_ACTIVE_ACCOUNT:
            return {...state,active_account: true}
        case AUTH_AUTHENTION_COMPLETED:
            return {...state,authention: true }
        case AUTH_FORGOT_NEW:
            return {...state,new_password: true }
        case AUTH_FORGOT_SUCCESS:
            return {...state,redirect_login: true }
        default: 
            return state;
    }
}
export default authReducer