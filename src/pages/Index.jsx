import { useLoaderData } from 'react-router-dom'
import Cliente from '../components/Cliente'

export function loader() {   // es como un useState, es una funcion que se va a ejecutar cuando el componente se termine de cargar IDEAL para consultar APIS
  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
];
  return clientes;
}

function Index() {

  const clientes = useLoaderData();
  
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>

      {clientes.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white'>
            <tr className='text-left'>
              <th className='pl-6 p-2'>Clientes</th>
              <th className='pl-6 p-2'>Contactos</th>
              <th className='pl-6 p-2'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map( cliente => (
              <Cliente 
                cliente={cliente}
                key={cliente.id}
              />
            ))}
          </tbody>
        </table>
      ): (
          <p className="text-center mt-10">No Hay Clientes aun</p>
      )}
    </>
  )
}

export default Index
