import React, {children, createContext, useState} from 'react'
import {useToggle} from '../hooks'
const AppContext = createContext({

        isMenuOpen: false

})

const PageWrapper = () => {

    const { isToggled, toggle} = useToggle(false)
    return (
        <AppContext.Provider
            value = {{isMenuOpen: isToggled, toggleMenu: toggle}}
        >{children}</AppContext.Provider>
    )
}