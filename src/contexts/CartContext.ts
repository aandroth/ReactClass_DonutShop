import {createContext} from "react"
import Donut from "../models/Donut";
import DonutDetails from "../models/DonutDetails";

interface CartContextModel {
    items: DonutDetails[];
    addItem: (item: DonutDetails)=> void;
    removeItem: (id: string) => void;
}

const defaultValues: CartContextModel = {
    items: [],
    addItem: () => {},
    removeItem: () => {},
}

const CartContext = createContext(defaultValues);

export default CartContext;