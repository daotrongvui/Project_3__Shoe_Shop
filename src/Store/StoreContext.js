import React, { createContext, useState, useContext } from 'react';

export const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
    const [subCategory, setSubCategory] = useState('');

    const [valueMin, setValueMin] = useState(5);
    const [valueMax, setValueMax] = useState(150);

    const [color, setColor] = useState('');
    const [size, setSize] = useState('');

    const [cart, setCart] = useState([]);
    const Delete = (id) => {
        console.log('id:', id);
        let carts = [];
        cart.length &&
            cart.map((item) => {
                if (item.id !== id) {
                    carts.push(item);
                }
            });
        cart.length = 0;
        setCart(carts);
    };

    return (
        <StoreContext.Provider
            value={{
                subCategory,
                setSubCategory,
                valueMin,
                setValueMin,
                valueMax,
                setValueMax,
                color,
                setColor,
                cart,
                setCart,
                Delete,
                size,
                setSize,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

const useStore = () => useContext(StoreContext);

export default useStore;
