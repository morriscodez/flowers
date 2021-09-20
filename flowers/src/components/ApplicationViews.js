import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { FlowerList } from "./flowers/FlowerList"
import { FlowerProvider } from "./flowers/FlowerProvider"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/flowers */}
            <Route path="/flowers">
                <FlowerProvider>
                    <FlowerList />
                </FlowerProvider>
            </Route>
        </>
    )
}
