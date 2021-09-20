import React, { useContext, useEffect } from "react"
import { FlowerContext } from "./FlowerProvider"
import { FlowerCard } from "./FlowerCard"

export const FlowerList = () => {


    const { flowers, getFlowers } = useContext(FlowerContext)

    console.log(flowers)

    useEffect(() => {    
        getFlowers()
    }, [])
    
    useEffect(() => {
        console.log(flowers)
    }, [flowers])

    return (
        <>
            {/* Title */}
            <div>
                <h2> View Our Flowers </h2>
            </div>
    
            {/* render flowers */}
            <div className="flower--list">
                {flowers.map(flower => {
                    return <FlowerCard key={flower.id} flower={flower} />
                })}
            </div>
        </>
    )
}
