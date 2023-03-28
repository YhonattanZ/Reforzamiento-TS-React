import React from 'react'
import { useEffect } from 'react';
import { reqResAPI } from '../api/reqRes';

export const Usuarios = () => {
useEffect(() => {
  //API call
  reqResAPI.get('/users').then(resp => {
    console.log(resp.data.data);
  }).catch(console.log);  
  
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
