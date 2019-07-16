console.log("Yes yes y'all")

let elButton = document.getElementById("saveButton")
elButton.addEventListener("click", function() {console.log("And you don't stop")})

    let cityTextBox = document.getElementById("cityTextBox")
    let urlCityImage = document.getElementById("urlCityImage")
    let vacationListDiv = document.getElementById("vacationListDiv")

    let city = cityTextBox.value
    let cityImageURL = urlCityImage.value 

    let vacationDiv = document.createElement('div')
    vacationDiv.innerHTML("Denver")
    vacationListDiv.appendChild(vacationDiv) 