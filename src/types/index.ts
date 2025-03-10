export type ProductType = {
    id: number;
    title: string;
    price: number;
    image: string;
    weight: number;
    brand: string;
    color: string;
    description: string;
    foreign: number;
};

export type CartType = {
    id: number
    title: string;
    price: number;
    image: string;
    quantity: number
    subtotal: number
}