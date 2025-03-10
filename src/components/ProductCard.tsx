import { Link } from "react-router-dom";
import { formatCurrency } from "../utils";

type ProductCardProps = {
    id: number
    title: string
    price: number
    image: string
    categoryId: number
    subcategoryId: number
}

export default function ProductCard({id, title , price , image, categoryId, subcategoryId} : ProductCardProps) {
  return (
    <div className="flex flex-col items-center border-4 border-amarillo-claro p-6 justify-between">
        <img 
            src={`/products/${image}.webp`}
            alt={title} 
            className="mb-3 max-w-[250px] max-h-[200px]"
        />
        <div className="text-lg border-b-4 border-amarillo-claro pb-5 mb-3 w-[90%]">
            <p>{title}</p>
            <p className="text-xl text-amarillo-claro font-bold">{formatCurrency(price)}</p>
        </div>

        <Link 
            to={`/category/${categoryId}/subcategory/${subcategoryId}/product/${id}`}
            className="bg-amarillo-claro py-3 px-7 text-white font-bold hover:bg-amarillo transition-colors text-center"    
        >Ver Producto</Link>
    </div>
  )
}
