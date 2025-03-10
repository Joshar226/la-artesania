import {services } from "../data"
import { categories } from "../data/categories"
import CategoryCard from "../components/CategoryCard"
import ServiceCard from "../components/ServiceCard"

export default function HomeView() {
  return (
    <>
      <div>
        <div className="bg-[url(/hero.webp)] bg-cover bg-no-repeat h-[500px] bg-center">
          <div className="flex flex-col h-full justify-center w-full mx-auto">
            <h3 className="text-3xl text-white font-bold md:text-5xl pl-10 lg:pl-40">Ayudando a <br /> nuestros clientes <br /> a decorar sus <br /> espacios</h3>
          </div>
        </div>  
      </div>

      <section className="mt-14">
        <h3 className="text-secundario text-center text-3xl font-bold uppercase">- Categorías -</h3>

        <p className="text-center mt-5 text-xl p-3">Trabajamos con todo tipo de materiales en nuestra fábrica, y personalizaciones al gusto del cliente</p>
        
        <nav className="grid grid-cols-2 gap-4 container mx-auto justify-stretch mt-10 mb-20  p-2 md:grid-cols-3 md:p-4 lg:grid-cols-5">
          {categories.map( category => (
            <CategoryCard
              key={category.image}
              href={`/category/${category.id}`}
              image={category.image}
              title={category.title}
            />
          ))}
        </nav>
      </section>

      <section className="bg-amarillo flex flex-col text-center md:flex-row gap-10 justify-evenly p-12 mb-20">
        {services.map( service => (
          <ServiceCard 
            key={service.image}
            image={service.image}
            title={service.title}
          />
        ))}
      </section>
    </>
  )
}
