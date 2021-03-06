import React, { useState, createContext, useEffect } from "react"

export const FlowerContext = createContext()

export const FlowerProvider = (props) => {
    const [flowers, setFlowers] = useState([])

    const getFlowers = () => {
        return fetch("http://localhost:8088/flowers")
            .then(res => res.json())
            .then(setFlowers)
    }

    return (
        <FlowerContext.Provider value={{
            flowers, getFlowers
        }}>
            {props.children}
        </FlowerContext.Provider>
    )
}


