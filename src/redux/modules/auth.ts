import { createActions, handleActions } from "redux-actions";

interface AuthState {
  token: string | null;
  loding: boolean;
  error : Error | null;
}

const initialState : AuthState = {
  token : null,
  loding : false,
  error : null,

}

const prefix = 'my-books/auth'

export const {pending,success,fail} = createActions('PENDING','SUCCESS','FAIL',{prefix})

const reducer = handleActions<AuthState, string>({
  PENDING : (state: any)=>({
    ...state,
    loding:true,
    error:null,
  }),
  SUCCESS : (state: any, action: { payload: any; })=>({
    token:action.payload,
    loding:false,
    error:null,
  }),
  FAIL : (state: any, action:any)=>({
    ...state,
    loding:false,
    error:action.payload,
  })
},initialState,{prefix})

export default reducer

//saga

export function* authSaga(){

}