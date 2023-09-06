const body = document.querySelector("body")
const container = document.querySelector(".container")
const colorText = document.querySelector(".color-text")


const values = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];



function getGradient(){
    let newHexCode = "#"
    for (let i = 1; i <= 6; i++) {
        newHexCode += values[Math.trunc(Math.random() * values.length)]
    }
    
    return newHexCode;
}



function setGradient(){
    const color1 = getGradient()
    const color2 = getGradient()
    const deg = Math.trunc(Math.random() * 360)
    const bgColor = `linear-gradient(
        ${deg}deg,
        ${color1},
        ${color2}
    )`
    body.style.background = bgColor;
    colorText.textContent = bgColor;
}

setGradient()

container.addEventListener("click" , setGradient)