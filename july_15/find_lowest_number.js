numbers = [1,2,3,4,5,6,7]

function findLowestNumber(array) {
    array.sort()
    return array[0]
}
console.log(findLowestNumber(numbers))