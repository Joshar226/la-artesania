import { useMemo } from "react"
import { useStore } from "../store"
import CartCard from "./CartCard"
import { formatCurrency } from "../utils"
import { toast } from "react-toastify"


export default function Cart() {

    const showCart = useStore( state => state.showCart)
    const setShowCart = useStore( state => state.setShowCart)
    const clearCart = useStore( state => state.clearCart)
    
    const cart = useStore( (state) => state.cart)
    const total = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])
    const tabletWidht = 1024

    const confirmPurchase = () => {
        try {
            clearCart()
            toast.success('Compra Confirmada')
        } catch (error) {
            console.log(error)
            toast.error('Hubo un error')
        }
    }


  return (
    <div className={`fixed inset-0 flex z-1 bg-black/70 ${!showCart && 'w-0 transition-all duration-500'}`} >
    {screen.availWidth > tabletWidht && (
        <div className="flex-1" onClick={() => setShowCart(false)} ></div>
    )}

    <aside className={`${showCart ? 'lg:w-[20%] transition-all duration-500 p-3 w-full' : 'w-0 '} overflow-y-auto h-svh space-y-4 flex flex-col`}>
        {screen.availWidth < tabletWidht && ( 
        <div className="mt-3">
            <p className="text-white text-2xl bg-red-500 py-1 px-3 rounded-full hover:bg-red-600 cursor-pointer inline" onClick={() => setShowCart(false)}>Cerrar</p>
        </div>
        )}
        <div className="space-y-4 flex-1">
            {cart.map ( item => (
            <CartCard
                key={item.id}
                item={item}
            />
            ))}
        </div>
        
        <div className="bg-white p-3 space-y-2">
            <p className="text-amarillo font-bold text-2xl ">Total: <span className="text-black">{formatCurrency(total)}</span></p>
            <button className="bg-amarillo text-white uppercase text-2xl font-bold w-full p-1 cursor-pointer hover:bg-amarillo-oscuro" onClick={() => confirmPurchase()}>Confirmar</button>
        </div>
    </aside>
    </div>
  )
}
