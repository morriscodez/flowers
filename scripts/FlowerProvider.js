let flowers = []

export const useFlowers = () => {
    return flowers.slice()
}

export const getFlowers = () => {
    debugger
    return fetch("http://localhost:8088/flowers")
    .then(res => res.json())
    .then(parsedFlowers => {
        flowers = parsedFlowers
    })
}

