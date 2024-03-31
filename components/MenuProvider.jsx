'use client'

import { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext();

export function MenuProvider({children}){
    const [menu, setMenu] = useState('AC');

    useEffect(() => {
        setMenu(localStorage.getItem('menu') || 'AC');
    }, [setMenu]);

    return <MenuContext.Provider value={[menu, setMenu]}>
        {children}
    </MenuContext.Provider>
}

export function useMenu(){
    const [menu, setMenu] = useContext(MenuContext);

    const setMenuWithStorage = (menu) => {
        localStorage.setItem('menu', menu);
        setMenu(menu);
    }

    return [menu, setMenuWithStorage];
}
