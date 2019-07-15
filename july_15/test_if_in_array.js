numbers = [1,2,3,4,5,6]
number = 17
function inArrayTrueFalse(number, array) {
    if (array.includes(number)) {
        console.log("The item is in the array")
    }
    else {
        console.log("There is no item by that name here")
    }
}
inArrayTrueFalse(number, numbers)