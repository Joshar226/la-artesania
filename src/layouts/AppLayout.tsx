import { FaFacebookF } from "react-icons/fa"
import { Link, Outlet } from "react-router-dom"
import { categories } from "../data/categories"
import { IoCart } from "react-icons/io5"
import { useStore } from "../store"
import { useEffect } from "react"
import { ToastContainer } from "react-toastify"
import Cart from "../components/Cart"


export default function AppLayout() {
  
  const showCart = useStore( state => state.showCart)
  const setShowCart = useStore( state => state.setShowCart)

  const main = document.getElementById('main')!
  useEffect(() => {
    if( showCart ) main.classList.add('overflow-hidden'); else main.classList.remove('overflow-hidden')
      
  }, [showCart, main])

  const year = new Date().getFullYear()

  return (
    <>
      <div className="bg-cafe">
        <div className="flex flex-col container mx-auto space-y-6 xl:flex-row py-10 items-center justify-between">
          <Link 
            to={'/'} 
            className="titulo text-white text-5xl">La Artesanía
          </Link>
          <nav className="flex overflow-x-scroll w-full lg:w-auto xl:overflow-hidden gap-10 text-2xl text-white my-3 px-5">
            {categories.map( category => (
              <Link key={category.id} to={`/category/${category.id}`} className="hover:text-amarillo">{category.title}</Link>
            ))}
              <Link to={'https://wa.me/50612345678'} className="hover:text-amarillo">Contáctenos</Link>
          </nav>
          <button className="cursor-pointer" onClick={() => setShowCart(true)}><IoCart size={50} color="white"/></button>
        </div>
      </div>

      <Cart />

      <Outlet />

      <footer>
        <div className="bg-cafe">
          <div className="flex flex-col text-center space-y-6 md:flex-row justify-evenly p-5" >
            <div>
              <h3 className="text-white uppercase text-xl lg:text-2xl font-bold">Empresa</h3>
              <div className="flex flex-col">
                <Link to={'/#'} className="text-white text-lg lg:text-xl font-bold hover:text-amarillo my-1">Sobre Nosotros</Link>
                <Link to={'/#'} className="text-white text-lg lg:text-xl font-bold hover:text-amarillo">Garantías y Políticas</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white uppercase text-xl lg:text-2xl font-bold">Contáctenos</h3>
              <div className="flex flex-col">
                <Link to={'https://wa.me/50612345678'} target="_blank" className="text-white text-lg lg:text-xl font-bold hover:text-amarillo my-1">Whatsapp: +506 1234 5678</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white uppercase text-xl lg:text-2xl font-bold">Redes Sociales</h3>
              <div className="flex items-center justify-center">
                <FaFacebookF color="white" size={25} />
                <Link to={'https://www.facebook.com/'} target="_blank" className="text-white text-lg lg:text-xl font-bold hover:text-amarillo my-1">La Artesanía</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amarillo-oscuro">
          <p className="text-white font-bold text-lg lg:text-xl text-center p-2">Derechos Reservados&copy; {year} La Artesanía</p>
        </div>
      </footer>
    
      <ToastContainer 
        pauseOnHover={false}
        autoClose={3000}
        pauseOnFocusLoss={false}
      />
    </>
    
  )
}
