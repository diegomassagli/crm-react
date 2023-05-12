import { useNavigate, Form, useActionData } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'

export async function action({request}) {
  // console.log(formData)   esto no va a mostrar nada
  // console.log(formData.get('nombre'))  esto si !!
  // console.log([...formData])  esto tambien

  // const datos = Object.fromEntries(formData)   esta es otra forma para recuperar datos
  // console.log(datos)

  const formData = await request.formData()
  const datos = Object.fromEntries(formData)

  // Validacion
  const email = formData.get('email')
  const errores = []
  if(Object.values(datos).includes('')) {
    errores.push('Todos los campos son Obligatorios')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(email)) {
    errores.push('El Email no es valido')
  }

  // Retornar datos si hay errores
  if(Object.keys(errores).length) {  // se supone que si parto de un arreglo vacio y ahora tiene algo... hay errores
    return errores
  }


  // sacar ??
  return null;

}

function NuevoCliente() {
  const errores = useActionData()  // se usa para recibir o poder pasar los errores
  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">LLena todos los campos para registrar un nuevo cliente</p>
    
      <div className='flex justify-end'>
        <button 
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navigate('/')}
          >Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">

        {errores?.length && errores.map( (error, i) => <Error key={i}>{error}</Error> )}

        <Form
          method='post'          
          noValidate
        >                                                                                {/* es un componente provisto por react-router-dom */}
            <Formulario/>

            <input
              type="submit"
              className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
              value='registrar cliente'
            />
        </Form>
      </div>

    </>
  )
}

export default NuevoCliente
