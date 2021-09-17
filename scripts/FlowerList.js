import { useFlowers, getFlowers } from "./FlowerProvider.js";

const contentTarget = document.querySelector(".flowers")

export const FlowerList = () => {
    const flowerArray = useFlowers()

    contentTarget.innerHTML= "<h1>Flowers</h1>"

    flowerArray.forEach(
        flowerObj => {
            contentTarget.innerHTML += Flower(flowerObj)
        }
    )
}