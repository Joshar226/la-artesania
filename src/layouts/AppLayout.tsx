import { FaFacebookF } from "react-icons/fa"
import { Link, Outlet } from "react-router-dom"
import { categories } from "../data"

export default function AppLayout() {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="bg-cafe">
        <div className="flex container m-auto justify-stretch py-10 items-center">
          <Link 
            to={'/'} 
            className="titulo text-white text-5xl">La Artesanía
          </Link>
          <nav className="flex gap-10 text-2xl text-white">
            {categories.map( category => (
              <Link key={category.id} to={`/category/${category.id}`} className="hover:text-amarillo">{category.text}</Link>
            ))}
              <Link to={'/#'} className="hover:text-amarillo">Sobre Nosotros</Link>
              <Link to={'/#'} className="hover:text-amarillo">Contáctenos</Link>
          </nav>
        </div>
      </div>

      <Outlet />



      <footer>
        <div className="bg-cafe">
          <div className="flex justify-evenly p-5" >
            <div>
              <h3 className="text-white uppercase text-2xl font-bold">Empresa</h3>
              <div className="flex flex-col">
                <Link to={'/#'} className="text-white text-xl font-bold hover:text-amarillo my-1">Sobre Nosotros</Link>
                <Link to={'/#'} className="text-white text-xl font-bold hover:text-amarillo">Garantías y Políticas</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white uppercase text-2xl font-bold">Contáctenos</h3>
              <div className="flex flex-col">
                <Link to={'https://wa.me/50612345678'} target="_blank" className="text-white text-xl font-bold hover:text-amarillo my-1">Whatsapp: +506 1234 5678</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white uppercase text-2xl font-bold">Redes Sociales</h3>
              <div className="flex items-center justify-center">
                <FaFacebookF color="white" size={25} />
                <Link to={'https://www.facebook.com/'} target="_blank" className="text-white text-xl font-bold hover:text-amarillo my-1">La Artesanía</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amarillo-oscuro">
          <p className="text-white font-bold text-xl text-center p-2">Derechos Reservados&copy; {year} La Artesanía</p>
        </div>
      </footer>
    
    </>
    
  )
}
