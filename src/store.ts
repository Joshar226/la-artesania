import { create } from "zustand"
import { CartType, ProductType } from "./types"
import { toast } from "react-toastify"

type Store = {
    showCart: boolean
    cart: CartType[]
    setShowCart: (showCart: boolean) => void
    addToCart: (product: ProductType) => void
    increaseQuantity: (id: ProductType['id']) => void
    decreaseQuantity: (id: ProductType['id']) => void
    removeItem: (id: ProductType['id']) => void
}
    
export const useStore = create<Store>((set, get) => ({
    showCart: false,
    cart: [],
    setShowCart: (da : boolean) => {
        set(() => ({
            showCart: da
        }))
    },
    addToCart: (product : ProductType) => {

        const data = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image
        }

        let cart: CartType[] = []
        if( get().cart.find( item => item.id === product.id ) ) {
            //INCREMENTAR QUANTITY
            cart = get().cart.map( item => item.id === product.id ? {
                ...item,
                quantity: ++item.quantity,
                subtotal: item.price * item.quantity
            } : item)
            
        } else {
            //AGREGAR AL CARRITO
            cart = [...get().cart, {
                ...data,
                quantity: 1,
                subtotal: 1 * product.price
            }]
        }

        try {
            set(() => ({
                cart
            }))
            toast.success('Producto Agregado Correctamente')
        } catch (error) {
            console.log(error);
            toast.error('Hubo un error')
        }
    },
    increaseQuantity: (id) => {
        
        set((state) => ({
            cart: state.cart.map( item => item.id === id ? {
                ...item,
                quantity: ++item.quantity,
                subtotal: item.price * item.quantity
            } : item)
        }))
    },
    decreaseQuantity: (id) => {
        set((state) => ({
            cart: state.cart.map( item => item.id === id ? {
                ...item,
                quantity: --item.quantity,
                subtotal: item.price * item.quantity
            } : item)
        }))
    },
    removeItem: (id) => {
        set((state) => ({
            cart: state.cart.filter(item => item.id !== id)
        }))
    }
}))