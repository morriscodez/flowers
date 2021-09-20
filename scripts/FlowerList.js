import { useFlowers, getFlowers } from "./FlowerProvider.js";
import { Flower } from "./flower.js";

const contentTarget = document.querySelector(".flowers")

export const FlowerList = () => {
    getFlowers()
    const flowerArray = useFlowers()
    console.log('flowerArray: ', flowerArray);

    contentTarget.innerHTML= "<h1>Flowers</h1>"

    flowerArray.forEach(
        flowerObj => {
            contentTarget.innerHTML += Flower(flowerObj)
        }
    )
}