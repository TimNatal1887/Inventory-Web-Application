const form = document.querySelector("form");

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    const {title,dev,image,price,description} = event.target
    createGameTemplate(title.value,dev.value,image.value,price.value,description.value,stock.value)
})

function createGameTemplate(title,dev,image,price,description,stock){
    const info = [title,dev,image,price,description]
    const stockText = stockCheck(stock)
    if(elementCheck(info)){
        return elementCheck(info)
    }

    const button = newGame.querySelector("#remove")
    button.addEventListener("click",() =>{
        newGame.remove()
    })

    
    const newGame = document.createElement("li")
    newGame.innerHTML = `<div id="list-header">
    <h3 id="title-output">${title}</h3>
    <img src="${image}"
    <div id="developer-output">Developed by: ${dev}</div>
    <div id="price-output">Price:${price}</div>
    <div id="description-output">${description}</div>
    <div id="stock-value">
    <button class="${stock}">${stockText}</button>
    <button id="remove">Remove</button>
    </div>`
    
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
