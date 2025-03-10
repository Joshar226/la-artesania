import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { GoTrash } from "react-icons/go";
import { CartType } from "../types";
import { formatCurrency } from "../utils";
import { useStore } from "../store";

type CartCardProps = {
  item: CartType
}

export default function CartCard({item} : CartCardProps) {

  const MIN = 1
  const MAX = 5

  const decreaseQuantity = useStore( (state) => state.decreaseQuantity) 
  const increaseQuantity = useStore( (state) => state.increaseQuantity) 
  const removeItem = useStore( (state) => state.removeItem) 

  return (
    <div className="bg-white py-4 px-5 rounded-2xl">

    <div className="flex justify-end">
      <GoTrash size={30} color="red" className="cursor-pointer" onClick={() => removeItem(item.id)}/>
    </div>

    <div className="flex gap-2 justify-around items-center">
      <img
        src={`/products/${item.image}.webp`}
        alt="cama"
        className="w-1/2"
      />

      <div className="flex items-center text-center flex-col text-lg space-y-2">
        <p>{item.title}</p>
        <p className="text-amarillo-claro font-bold">{formatCurrency(item.subtotal)}</p>
        <div className="flex items-center gap-3">
          <button  className={`cursor-pointer disabled:cursor-not-allowed disabled:text-gray-300`} disabled={item.quantity === MIN ? true : false} onClick={() => decreaseQuantity(item.id)}><CiCircleMinus size={30}/></button>
          <p className="font-bold">{item.quantity}</p>
          <button className="cursor-pointer disabled:cursor-not-allowed disabled:text-gray-300" disabled={item.quantity === MAX ? true : false} onClick={() => increaseQuantity(item.id)}><CiCirclePlus size={30}/></button>
        </div>
      </div>
    </div>
  </div> 
  )
}
