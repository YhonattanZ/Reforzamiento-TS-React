
export const Funciones = () => {

  const sumar = (a: number, b:number) => {
   return a+b;
  }  



  return (
   <>
   <h3>Funciones</h3>
    <span>El resultado es: {sumar(5,6)}</span> 
   </>
    )
}