import { Outlet, Link, useLocation } from 'react-router-dom'

function Layout() {

  const location = useLocation()
  
  return (
    <div className="md:flex md:min-h-screen">
      <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
      <h2 className='text-4xl font-bold text-center text-white'>CRL - Clientes</h2>

{/* Uso el componente Link en lugar de "a href" para que no recargue paginas o la optimice */}
{/* le pongo block para que no esten pegados sino uno debajo del otro */}
{/* tambien se podria tener
        <Header />
        <Outlet />
        <Footer /> */}

      <nav className='mt-10'>    
        <Link                    
          className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`} 
          to="/">Clientes
        </Link>   
        <Link 
          className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`} 
          to="/clientes/nuevo">Nuevo Cliente
        </Link>
      </nav>

      </aside>        

      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet />
      </main>

    </div>
  )
}

export default Layout
