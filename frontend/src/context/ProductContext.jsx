import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [menu, setMenu] = useState(null);

    return (
        <MenuContext.Provider value={{ menu, setMenu }}>
            {children}
        </MenuContext.Provider>
    );
};

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState(null);

    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider>
    );
};