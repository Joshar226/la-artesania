import CategoryCard from "../components/CategoryCard"
import FeaturedCard from "../components/FeaturedCard"
import ServiceCard from "../components/ServiceCard"
import { categories, featured, services } from "../data"

export default function HomeView() {

  return (
    <>
      <div>
        <div className="bg-[url(hero.jpeg)] bg-cover bg-no-repeat h-[500px]">
          <div className="flex flex-col h-full justify-center w-[1300px] mx-auto">
            <h3 className="text-5xl text-white font-bold">Ayudando a <br /> nuestros clientes <br /> a decorar sus <br /> espacios</h3>
          </div>
        </div>  
      </div>

      <section className="mt-14">
        <h3 className="text-secundario text-center text-3xl font-bold uppercase">- Categorías -</h3>

        <p className="text-center mt-5 text-xl">Trabajamos con todo tipo de materiales en nuestra fábrica, y personalizaciones al gusto del cliente</p>
        
        <nav className="flex container mx-auto justify-stretch mt-10 mb-40">
          {categories.map( category => (
            <CategoryCard
             key={category.src} 
              href={category.href}
              src={category.src}
              text={category.text}
            />
          ))}
        </nav>
      </section>

      <section className="bg-amarillo flex justify-evenly p-12">
        {services.map( service => (
          <ServiceCard 
            key={service.src}
            src={service.src}
            text={service.text}
          />
        ))}
      </section>

      <section className="mt-14">
        <h3 className="text-secundario text-center text-3xl font-bold uppercase">- Productos destacados   -</h3>

        <p className="text-center mt-5 text-xl">Disfrute de nuestros productos más destacados</p>
        
        <nav className="flex container mx-auto justify-stretch mt-10 mb-40">
          {featured.map( item => (
            <FeaturedCard 
              key={item.src}
              href={item.href}
              src={item.src}
              text={item.text}
              price={item.price}
            />
          ))}
          
        </nav>
      </section>
    </>
  )
}
