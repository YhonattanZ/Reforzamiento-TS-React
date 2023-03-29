import { useState } from 'react';


export const useFormulario = <T extends Object>(formulario: T) => {
  
//useState  
const [state, setState] = useState(formulario);

  const onChanged = (value: string, campo:keyof T) =>{
      //Desestructuro los datos   
      /*
      Spread syntax allows an iterable, such as an array or string
      to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
      In an object literal, the spread syntax enumerates the properties
      of an object and adds the key-value pairs to the object being created.
      */ 
   setState({
        ...state,
        [campo]: value,

    })
  }
  return {
    ...state,
    formulario:state,
    onChanged
}
}
