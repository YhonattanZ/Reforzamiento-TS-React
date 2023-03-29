import { useRef, useState, useEffect } from 'react';
import { reqResAPI } from '../api/reqRes';
import { ReqResList, Usuario } from '../interfaces/reqRes';

//CUSTOM HOOK 
export const useUsuarios = () => {
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

const cargarUsuarios = async () => {
    const resp = await reqResAPI.get<ReqResList>('/users', {
        params: {
            page: paginaRef.current 
        }
    })
    if(resp.data.data.length > 0){
        setUsuarios(resp.data.data);
    }else{
        paginaRef.current--;
        alert('No hay mas registros');
    }
      
}
    const paginaSiguiente = () =>{
        paginaRef.current++;
        cargarUsuarios();
    } 
    const paginaAnterior = () =>{
        if(paginaRef.current > 1){
            paginaRef.current--;
            cargarUsuarios();
        }
        
      
    } 

return {
   usuarios,
   paginaSiguiente,
   paginaAnterior
}
}
