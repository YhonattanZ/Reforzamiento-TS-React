

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}
// Las interfaces son para agregar reglas de validacion
interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

  const persona: Persona = {
    nombreCompleto: 'Yhonattan',
    edad: 22,
    direccion: {
        pais: 'Canada',
        casaNo: 22
    }
  }  


  return (
   <>
    <div>ObjetosLiterales</div>
    <code>
        <pre>{JSON.stringify(persona)}</pre>
    </code>
   </>
  )
}
