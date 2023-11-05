const form = document.querySelector("form");
const games = document.querySelector(".game-list")
console.log(games)

form.addEventListener("submit",(event) =>{
    event.preventDefault();

    // if(elementCheck(info)){
    //     elementCheck(info)
    // }else{
        const {title,dev,image,price,description,stock} = event.target
        createGameTemplate(title.value,dev.value,image.value,price.value,description.value,stock.value)
    // }
})


function createGameTemplate(title,dev,image,price,description,stock){
    const newGame = document.createElement("li")
    newGame.classList.add("game")
    newGame.innerHTML = `<div id="list-header">
    <h3 id="title-output">${title}</h3>
    <img src="${image}">
    <div id="developer-output">Developed by: ${dev}</div>
    <div id="price-output">Price:${price}</div>
    <div id="description-output">${description}</div>
    <div id="stock-value">
    <button class="${stock}"></button>
    <button id="remove">Remove</button>
    </div>`
    games.append(newGame)
    
    const button = newGame.querySelector("#remove")
    button.addEventListener("click",() =>{
        newGame.remove()
    })



    
}

function elementCheck(elements){
    if(!elements.every(element=> element.value)){
        const errorBox = document.createElement("ul");
        elements.forEach(element=>{
            if(!element.value){
                const newLi = document.createElement("li")
                newLi.textContent = "Error, field must not be empty!"
                errorBox.append("newLi")
            }
        })
        return true
    }
    return false
}

