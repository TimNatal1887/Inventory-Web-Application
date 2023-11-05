const form = document.querySelector("form")

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    const {title,dev,image,price,description} = event.target
    createGameTemplate(title.value,dev.value,image.value,price.value,description.value,stock.value)
})