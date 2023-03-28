import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import { reqResAPI } from '../api/reqRes';
import { ReqResList, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

//useState para renderizar la informacion
// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.
const [usuarios, setUsuarios] = useState<Usuario[]>([]);  
const paginaRef = useRef(0);
//Le decimos a React que el componente necesita hacer algo despues de renderizarse
useEffect(() => {
  //API call
cargarUsuarios();
}, [])

const cargarUsuarios =async () => {
    const resp = await reqResAPI.get<ReqResList>('/users', {
        params: {
            page: paginaRef.current 
        }
    })
    if(resp.data.data.length > 0){
        setUsuarios(resp.data.data);
        paginaRef.current++;
    }else{
        alert('No hay mas registros');
    }
      
}
//Creamos un componente para renderizar la informacion traida del API
const renderInfo = ({id,first_name,last_name,email,avatar}: Usuario) =>{
    return (
        <tr key={id}>
           <td> <img src={avatar} alt={first_name} style={{width:35,borderRadius:100}}/></td>
            <td>{first_name} {last_name}</td>
            <td>{email}</td>
        </tr>
    )
}

  return (
 <>
 <h3>Usuarios:</h3>
 <table className='table table-dark'>
 <thead>
<tr>
    <th scope='col'>Avatar</th>
    <th scope='col'>Nombre</th>
    <th scope='col'>Email</th>
</tr>
    </thead>
    <tbody>
        {
        //   usuarios.map(usuario => renderInfo(usuario))  
        usuarios.map(renderInfo)
        }
    </tbody>
 </table>
 
 <button className='btn btn-primary' onClick={cargarUsuarios}>
    Siguiente
 </button>
 </>
  )
}
