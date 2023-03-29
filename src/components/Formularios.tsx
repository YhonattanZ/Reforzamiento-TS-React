import React from 'react'
import { useState } from 'react';

export const Formularios = () => {

//useState  
  const [formulario, setFormulario] = useState({
    email: 'test@test.com',
    password: '1234'
  });

  const onChanged = (value: string, campo:string) =>{
    setFormulario({
    //Desestructuro los datos   
    /*
    Spread syntax allows an iterable, such as an array or string
    to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
    In an object literal, the spread syntax enumerates the properties
    of an object and adds the key-value pairs to the object being created.
    */ 
        ...formulario,
        [campo]: value,

    })
  }

    return (
    <>
    <h3>Formularios</h3>
    <input type="text" className='form-control mt-3'
    placeholder='Email'
    value={formulario.email}
    onChange={({target})=>{onChanged(target.value,'email')}}
    />
    <input type="text" className='form-control mt-3 mb-3'
    placeholder='Password'
    value={formulario.password}
    onChange={({target})=>{onChanged(target.value,'password')}}
    />
    <code>
        <pre>{JSON.stringify(formulario,null,2)}</pre>
    </code>
    </>
  )
}
