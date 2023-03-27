//useReducer se usa cuando hay que realizar un estado mas complejo y que puede cambiar de diferentes maneras
import { useReducer } from "react"

interface AuthState {
validando:boolean;
token:string | null;
username: string;
nombre: string;
}

const initialState: AuthState = {
  validando : true,
  token: null,
  username: '',
  nombre: ''
}

type AuthAction ={
  type: 'logout'
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

}

export const Login = () => {

const [state, dispatch] = useReducer(authReducer, initialState);


  return (
    <>
    <h1>Login</h1>
    <div className="alert alert-info">Autenticando</div>
    <div className="alert alert-danger"> No Autenticado</div>
    <div className="alert alert-success">Autenticado</div>
    <button className="btn btn-primary btn-rounded waves-effect waves-light">Login</button>
    &nbsp; 
    <button className="btn btn-danger">Login</button>
    </>
  )
}
