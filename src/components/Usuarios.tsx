import React from 'react'
import { useEffect, useState } from 'react';
import { reqResAPI } from '../api/reqRes';
import { ReqResList } from '../interfaces/reqRes';

export const Usuarios = () => {

const [usuarios, setUsuarios] = useState([]);  
    
useEffect(() => {
  //API call
  reqResAPI.get<ReqResList>('/users').then(resp => {
    console.log(resp.data.data);
  })
  .catch(console.log);  
  
}, [])


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

    </tbody>
 </table>
 </>
  )
}
