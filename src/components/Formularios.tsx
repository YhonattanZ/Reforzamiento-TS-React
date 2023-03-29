import { useFormulario } from '../hooks/useFormulario';

export const Formularios = () => {

const {formulario, email, password, onChanged} = useFormulario({
    email: 'test@test.com',
    password: '1234'
});

    return (
    <>
    <h3>Formularios</h3>
    <input type="text" className='form-control mt-3'
    placeholder='Email'
    value={email}
    onChange={({target})=>{onChanged(target.value,'email')}}
    />
    <input type="text" className='form-control mt-3 mb-3'
    placeholder='Password'
    value={password}
    onChange={({target})=>{onChanged(target.value,'password')}}
    />
    <code>
        <pre>{JSON.stringify(formulario,null,2)}</pre>
    </code>
    </>
  )
}
