

export const TiposBasicos = () => {
 
 const nombre : string = 'Fernando';
 const edad : number = 22;
 const estaActivo:boolean = false;

 const poderes = ['Agua', 'Fuego', 'Aire', 'Tierra'];

 return (
<>
<h3>Tipos Basicos</h3>
{nombre},{edad}, {(estaActivo)? 'activo': 'no activo'}
<br />
{poderes.join(', ')}
</>
  )
}
