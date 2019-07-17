
let menuListDiv = document.getElementById("menuListDiv")
let menuChoiceStarters = document.getElementById("menuChoiceStarters")
let menuChoiceEntrees = document.getElementById("menuChoiceEntrees")
let menuChoiceDesserts = document.getElementById("menuChoiceDesserts")

let starters = dishes.filter(dish => dish.course == "Starters")
let entrees = dishes.filter(dish => dish.course == "Entrees")
let desserts = dishes.filter(dish => dish.course == "Desserts")

menuChoiceStarters.addEventListener('click', () => {
    let menuItemsDiv = starters.map(dish => {
        let menuItemDiv = `<div class="menuItemDiv">
                            <img class="menuItemPhoto" src="${dish.imageURL}"></img>
                            <div class="menuItemText">
                            <h3>${dish.title}</h3>
                            <div class="dishPrice">${dish.price}</div>
                            <p>${dish.description}</p> 
                            </div>
                            </div>`
        return menuItemDiv
    })
    menuListDiv.innerHTML = menuItemsDiv.join(" ")
})

menuChoiceEntrees.addEventListener('click', () => {
    let menuItemsDiv = entrees.map(dish => {
        let menuItemDiv = `<div class="menuItemDiv">
                            <img class="menuItemPhoto" src="${dish.imageURL}"></img>
                            <div class="menuItemText">
                            <h3>${dish.title}</h3>
                            <div class="dishPrice">${dish.price}</div>
                            <p>${dish.description}</p>  
                            </div> 
                            </div>`
        return menuItemDiv
    })
    menuListDiv.innerHTML = menuItemsDiv.join(" ")
})

menuChoiceDesserts.addEventListener('click', () => {
    let menuItemsDiv = desserts.map(dish => {
        let menuItemDiv = `<div class="menuItemDiv">
                            <img class ="menuItemPhoto" src="${dish.imageURL}"></img>
                            <div class="menuItemText">
                            <h3>${dish.title}</h3>
                            <div class="dishPrice">${dish.price}</div>
                            <p>${dish.description}</p> 
                            </div>
                            </div>`
        return menuItemDiv
    })
    menuListDiv.innerHTML = menuItemsDiv.join(" ")
})


