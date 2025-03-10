import { Link, useParams } from "react-router-dom";
import { subcategories } from "../data/subcategories";
import { useMemo } from "react";
import SubcategoryCard from "../components/SubcategoryCard";
import { categories } from "../data/categories";

export default function CategoryView() {

  const params = useParams()
  const categoryId = params.categoryId!
  const items = useMemo(() => subcategories.filter( subcategory => subcategory.foreign === +categoryId), [categoryId])

  const category = useMemo(() => categories.filter( categories => categories.id === +categoryId), [categoryId])
  const {id, title} = category[0]
  
  return (
    <>
      <h1 className="text-center text-secundario text-3xl font-bold mt-10 uppercase">{title}</h1>
      
      <div className="flex justify-center gap-2 text-secundario font-bold text-xl mt-2 border-b-4 pb-6 mb-28">
        <Link to={'/'} className="">Inicio</Link>
        <p>&gt;</p>
        <Link to={`/category/${id}`} className="">{title}</Link>
      </div>

      <main className="mx-auto space-y-28 mb-28">
        {items.map( item => (
          <SubcategoryCard 
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            href={item.id}
          />
        ))}
      </main>


    </>
  )
}

