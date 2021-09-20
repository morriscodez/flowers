import React from "react";
import { PropsAndState } from './PropsAndState'

export const Home = () => (
    <>
        <h2>Nashville Flowers</h2>
        <small>It Just Makes Scents</small>

        <address>
            <div>Visit Us at our many locations</div>
        </address>
        <PropsAndState yourName={"Brenda"} />
    </>
)
