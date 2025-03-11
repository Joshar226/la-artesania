import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { categories } from "../data/categories";
import { subcategories } from "../data/subcategories";
import { products } from "../data/products";
import { formatCurrency } from "../utils";
import { FaWhatsapp } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import { useStore } from "../store";

export default function ProductView() {

    const params = useParams()

    const categoryId = params.categoryId!
    const category = useMemo(() => categories.filter( categories => categories.id === +categoryId), [categoryId])
    const {title: categoryTitle} = category[0]

    const subcategoryId = params.subcategoryId!
    const subcategory = useMemo(() => subcategories.filter( subcategories => subcategories.id === +subcategoryId), [subcategoryId])
    const {title: subcategoryTitle} = subcategory[0]

    const productId = params.productId!
    const product = useMemo(() => products.filter( product => product.id === +productId), [productId])
    const {title, price, image, brand, color, description, weight} = product[0]

    const additionalProducts = useMemo(() => products.filter( product => product.foreign === +subcategoryId ), [subcategoryId])    
    const items = useMemo(() => additionalProducts.filter( product => product.id !== +productId ), [additionalProducts, productId])
        
    const addToCart = useStore( (state) => state.addToCart)
  return (
    <>
        <h1 className="text-center text-secundario text-3xl font-bold mt-10 uppercase">Dormitorio</h1>

        <div className="flex justify-center gap-2 text-secundario font-bold text-sm mt-2 border-b-4 p-4 lg:pb-6 lg:p-0 mb-28">
            <Link to={'/'} className="">Inicio</Link>
            <p>&gt;</p>
            <Link to={`/category/${categoryId}`} className="">{categoryTitle}</Link>
            <p>&gt;</p>
            <Link to={`/category/${categoryId}/subcategory/${subcategoryId}`} className="">{subcategoryTitle}</Link>
            <p>&gt;</p>
            <Link to={`/category/${categoryId}/subcategory/${subcategoryId}/product/${productId}`} className="">{title}</Link>
        </div>

        <section className="container mx-auto flex items-start flex-col lg:flex-row" >
            <div className="lg:w-1/2 mx-auto w-full">
                <img
                    src={`/products/${image}.webp`}
                    alt={title}
                    className="mx-auto w-1/2 lg:w-auto"
                />
            </div>

            <aside className="flex flex-col lg:w-1/2 p-4 lg:p-0">
                <div className="flex flex-col h-full gap-4 items-start">
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <div>
                        <h3 className="text-3xl font-bold text-amarillo-claro">{formatCurrency(price)}</h3>
                        <p>Impuestos Incluidos. Gastos de envío calculados al finalizar la compra</p>
                    </div>
                    <a href="https://wa.me/50612345678">
                        <div className="flex items-center gap-2">
                            <FaWhatsapp size={30} color="#00c951"/>
                            <p className="text-xl text-green-500 font-bold">Whatsapp</p>
                        </div>
                    </a>

                    <button className="bg-amarillo-claro py-2 px-5 text-white font-bold text-xl cursor-pointer hover:bg-amarillo" onClick={() => addToCart(product[0])}>Agregar al Carrito</button>
                </div>

                <div className="bg-amarillo text-white mt-10 mb-20">
                    <h3 className="text-2xl font-bold p-6 border-b-3">Ficha Técnica</h3>

                    <div className="p-6 border-b-2">
                        <table className="w-full text-left text-lg">
                            <thead>
                                <tr>
                                    <th>Peso (Kg):</th>
                                    <th>Marca:</th>
                                    <th>Color:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{weight} Kg</td>
                                    <td>{brand}</td>
                                    <td>{color}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="py-3 px-6">
                        <h3 className="text-xl font-bold">Más Detalles</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </aside>
        </section>

        <section className="container mx-auto mb-15 p-4 lg:p-0">
            <h2 className="text-3xl font-bold mb-3">Te puede interesar</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-15">
                {items.map( item => (
                    <ProductCard 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image} 
                        categoryId={+categoryId} 
                        subcategoryId={+subcategoryId}                    />
                ) )}
            </div>
        </section>

    </>
  )
}
