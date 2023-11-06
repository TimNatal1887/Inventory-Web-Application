const form = document.querySelector("form");
const gameSection = document.querySelector(".game-list")
const resetButton = document.querySelector("#reset-button")
const gameList = document.querySelectorAll(".game")

resetButton.addEventListener("click",()=>{
    const error = document.querySelector(".error")
    if(error){
        error.remove()
    }
    form.reset()
})

    

form.addEventListener("submit",(event) =>{
    event.preventDefault()
    const error = document.querySelector(".error")
    if(error){
        error.remove()
    }
    const {title,dev,image,price,description,stock} = event.target
    const info = [title,dev,image,price,description,stock]

    if(form.checkValidity()){
        createGameTemplate(title.value,dev.value,image.value,price.value,description.value,stock.value)
        form.reset()
    }else{
        elementCheck(info)
    }
})


function createGameTemplate(title,dev,image,price,description,stock){
    const newGame = document.createElement("li")
    const stockText = stockCheck(stock)
    let createMessage = document.querySelector(".create-message");
    if(createMessage){
        createMessage.remove()
    }

    newGame.classList.add("game")
    newGame.innerHTML = `<div id="list-header">
    <h3 id="title-output">${title}</h3>
    <img src="${image}">
    <div id="developer-output">Developed by: ${dev}</div>
    <div id="price-output">Price:${price}</div>
    <div id="description-output"> <strong><u>Game Description:</u></strong> <em>${description}</em></div>
    <div id="stock-value">
    <button class="stock-button ${stock}">${stockText}</button>
    <button id="remove">Remove</button>
    </div>`
    gameSection.append(newGame)
    gameList[0].before(newGame)
    
    const removeButton = newGame.querySelector("#remove")
    removeButton.addEventListener("click",() =>{
        newGame.remove()
    })

    const stockButton = newGame.querySelector(".stock-button");

    stockButton.addEventListener("click",() =>{
        if(stockButton.classList.contains("out-of-stock")){
            stockButton.textContent = "In Stock"
            stockButton.classList.add("in-stock")
            stockButton.classList.remove("out-of-stock")
        }else{
            stockButton.textContent = "Out of Stock"
            stockButton.classList.add("out-of-stock")
            stockButton.classList.remove("in-stock")
        }
    })



    
}

function elementCheck(elements) {
    const errorBox = document.createElement("ul");
    errorBox.classList.add("error");

    elements.forEach(element => {
        const name = element.name.charAt(0).toUpperCase() + element.name.slice(1)
        if (!element.value) {
            const newLi = document.createElement("li");
            newLi.textContent = `Error, ${name} must not be empty!`;
            errorBox.append(newLi);
        }
    });

    if (errorBox.children.length > 0) {
        form.append(errorBox);
        return true;
    }

    return false;
}

function stockCheck(stock){
    if(stock==="in-stock"){
        return "In Stock"
    }else{
        return "Out of Stock"
    }
}

for(let game of gameList){
    const stockButton = game.querySelector(".stock-button"); 
    const removeButton = game.querySelector("#remove")
    removeButton.addEventListener("click",() =>{
        game.remove()
    })

    stockButton.addEventListener("click",() =>{
        if(stockButton.classList.contains("out-of-stock")){
            stockButton.textContent = "In Stock"
            stockButton.classList.add("in-stock")
            stockButton.classList.remove("out-of-stock")
        }else{
            stockButton.textContent = "Out of Stock"
            stockButton.classList.add("out-of-stock")
            stockButton.classList.remove("in-stock")
        }
    })
}
