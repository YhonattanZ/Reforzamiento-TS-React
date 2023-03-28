import React from 'react'
import { Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';


export const Usuarios = () => {

const {usuarios, cargarUsuarios} =useUsuarios(); 

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
   Pagina anterior
 </button>
 &nbsp;
 <button className='btn btn-primary' onClick={cargarUsuarios}>
    Pagina siguiente
 </button>
 </>
  )
}
