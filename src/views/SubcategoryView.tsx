import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { subcategories } from "../data/subcategories";
import { categories } from "../data/categories";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";


export default function SubcategoryView() {
    const params = useParams()

    const categoryId = params.categoryId!
    const category = useMemo(() => categories.filter( categories => categories.id === +categoryId), [categoryId])
    const {title: categoryTitle} = category[0]

    const subcategoryId = params.subcategoryId!
    const subcategory = useMemo(() => subcategories.filter( subcategories => subcategories.id === +subcategoryId), [subcategoryId])
    const {title: subcategoryTitle} = subcategory[0]

    const year = new Date().getFullYear()


    const items = useMemo(() => products.filter( product => product.foreign === +subcategoryId ), [subcategoryId])
    
  return (
    <>
        <h1 className="text-center text-secundario text-3xl font-bold mt-10 uppercase">{subcategoryTitle}</h1>

        <div className="flex justify-center gap-2 text-secundario font-bold text-xl mt-2 border-b-4 pb-6 mb-28">
        <Link to={'/'} className="">Inicio</Link>
        <p>&gt;</p>
        <Link to={`/category/${categoryId}`} className="">{categoryTitle}</Link>
        <p>&gt;</p>
        <Link to={`/category/${categoryId}/subcategory/${subcategoryId}`} className="">{subcategoryTitle}</Link>
        </div>

        <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold flex">Nueva Coleccion <br /> en {year}</h2>
        </div>

        <div className="container mx-auto bg-amarillo mt-15">
            <div className=" flex items-end justify-between mx-3 lg:mx-16">
                <h2 className="text-4xl md:text-6xl lg:text-8xl text-white font-bold max-w-[750px]">{subcategoryTitle}</h2>
                <img
                    src={`/subcategories/${subcategory[0].image}.webp`}
                    alt={categoryTitle}
                    className="w-[50%] lg:w-[30%] -translate-y-10 shadow-2xl shadow-black"
                />
            </div>
        </div>

        <main className="container mx-auto my-28 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-16 p-4">
            {items.map( item => (
                <ProductCard 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image} 
                    categoryId={+categoryId} 
                    subcategoryId={+subcategoryId}                
                />
            ))}
        </main>
    </>
  )
}
