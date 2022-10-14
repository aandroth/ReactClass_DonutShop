import { ReactNode, useState } from "react";
import Donut from "../models/Donut";
import DonutDetails from "../models/DonutDetails";
import CartContext from "./CartContext";


interface Props {
    children: ReactNode;
}

const CartContextProvider = ({ children }: Props) => {
const [items, setItems] = useState<DonutDetails[]>([]);

const addItem = (item: DonutDetails): void => {
    console.log("Added");
    console.log(item);
    if(!item)
        return;
    setItems((prev) => [...prev, item]);
};

const removeItem = (id: string): void => {
    setItems((prev) => {
    const index: number = prev.findIndex((item) => item.id === id);
    return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
};

return (
    <CartContext.Provider
    value={{ items, addItem, removeItem }}
    >
    {children}
    </CartContext.Provider>
);
};

export default CartContextProvider;