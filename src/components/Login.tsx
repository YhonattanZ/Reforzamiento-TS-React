//useReducer se usa cuando hay que realizar un estado mas complejo y que puede cambiar de diferentes maneras

import { useReducer, useEffect } from "react"

//Creamos una interfaz la cual tendra algunos valores iniciales
interface AuthState {
validando:boolean;
token:string | null;
username: string;
nombre: string;
}

//Creamos el initialState del tipo Interfaz e inicializamos los datos
const initialState: AuthState = {
  validando : true,
  token: null,
  username: '',
  nombre: ''
}

type LoginPayload = { 
  username: string,
  nombre: string
}

type AuthAction = 
|{type: 'logout'}
|{type: 'login', payload:LoginPayload}

//Creamos un authReducer el cual tendra por estado nuestro AuthState y AuthAction
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
//El state nunca puede mutar es decir modificar
//Tambien debe cumplirse el type del action 
switch (action.type) {
  case 'logout':
  return{
    validando : false,
    token: null,
    nombre: '',
    username: ''
  }  
  
  case 'login':
    //Desestructuracion 
    const {nombre, username} = action.payload;
    return{
    validando: false,
    token: 'ABC123',
    nombre,
    username
  }

  default:
    return state;
}
}

export const Login = () => {

//con useEffect realizamos una accion del type asignado
  useEffect(() => {
    setTimeout(()=>{
      dispatch({ type: 'logout'});
    }, 1500);
  }, []);

  const login = () => {
    dispatch({type: 'login', payload: {
  nombre: 'Yhonattan',
  username:'Lunafxll'
    }})
  }
  
  const logout = () => {
    dispatch({type:'logout'});
  }
  //Inicializamos el useReducer, para hacerlo debemos tener un reducer y un valor inicial para ese reducer.
  const [{validando,token, nombre}, dispatch] = useReducer(authReducer, initialState);
  
  if(validando){
    return (<>
     <h1>Login</h1>
    <div className="alert alert-info">Autenticando</div>
    </>)
  }
  
  return (
    <>
    <h1>Login</h1>

    {(token) ? 
    <div className="alert alert-success">Autenticado como: {nombre}</div>
     :<div className="alert alert-danger"> No Autenticado</div>
    }
{(token) ? 
<button className="btn btn-danger"onClick={logout}>Logout</button> 
: <button className="btn btn-primary" onClick={login}>Login</button>
 }
    
    </>
  )
}
