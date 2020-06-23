import {
    AUTH_LOGIN_COMPLETED,
    REGISTER_COMPLETED,
    AUTH_AUTHENTION_FAIL,
    AUTH_ACTIVE_ACCOUNT,
    AUTH_AUTHENTION_COMPLETED,
    AUTH_FORGOT_NEW,
    AUTH_FORGOT_SUCCESS,
    AUTH_REFESH
} from "./actionType";


const initialState = {
    error: null,
    success: false,
    authention: false,
    active_account: false,
    new_password: false,
    redirect_login: false,
    email: null,
    message: null,
    login: false
}

const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case AUTH_LOGIN_COMPLETED:
            return {...state, success: true , email: action.email , error: null}
        case REGISTER_COMPLETED:
            return {...state,success: action.success,error: null}
        case AUTH_REFESH:
            return {...state,login:false}
        case AUTH_AUTHENTION_FAIL:
            return {...state,error: action.error , message: action.message , login: true }
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