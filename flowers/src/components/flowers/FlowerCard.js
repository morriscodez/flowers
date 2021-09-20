import React from "react"

export const FlowerCard = ({ flower }) => (
    <>
        <h3>{ flower.commonName }</h3>
        <p> Color: { flower.color }</p>
    </>    
)