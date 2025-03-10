import { Link } from "react-router-dom";

type SubcategoryCardProps = {
  title: string
  description: string
  image: string
  href: number
}

export default function SubcategoryCard({title, description, image, href} : SubcategoryCardProps) {

  const tabletWidht = 1024

  console.log(screen.availWidth > tabletWidht);
  
  

  return (
    <section className="flex justify-around items-center">
      {screen.availWidth > tabletWidht && 'hidden' && (
        <div className={`bg-amarillo  w-[90%] lg:w-auto`}>
          <img src={`/subcategories/${image}.webp`} alt={title} className="w-[450px] h-[400px] py-10 translate-x-11"  />
        </div>
      )}
        
      <div className="bg-amarillo-oscuro ml-5 mr-10 lg:w-[20%]">
        <div className="bg-amarillo translate-5 ">
            <div className="p-10 flex flex-col items-center ">
              <h3 className="text-center font-bold text-2xl uppercase">{title}</h3>
                {screen.availWidth < tabletWidht && (
                  <img src={`/subcategories/${image}.webp`} alt={title} className="my-5"/>
                )}
              <p className="mb-5 lg:my-10 text-center">{description}</p>
              <Link to={`subcategory/${href}`} className="bg-white py-3 px-5 lg:p-5 border-4 border-amarillo-claro text-lg font-bold text-center" >Ver {title}</Link>
            </div>
        </div>
      </div>
    </section>
  )
}
