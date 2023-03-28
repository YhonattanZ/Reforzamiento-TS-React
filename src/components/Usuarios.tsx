import React from 'react'
import { useEffect, useState } from 'react';
import { reqResAPI } from '../api/reqRes';
import { ReqResList, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

const [usuarios, setUsuarios] = useState<Usuario[]>([

]);  
    
useEffect(() => {
  //API call
  reqResAPI.get<ReqResList>('/users').then(resp => {
    
    setUsuarios(resp.data.data);
  })
  .catch(console.log);  
  
}, [])

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
 <button className='btn btn-primary'>
    Siguiente
 </button>
 </>
  )
}
