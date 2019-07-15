numbers = [1,2,3,4,5,6,7]

function findHighestNumber(array) {
    array.sort()
    return array[array.length - 1]
}
console.log(findHighestNumber(numbers))