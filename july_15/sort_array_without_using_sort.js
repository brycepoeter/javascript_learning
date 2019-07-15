numbers = [3, 1, 4, 5, 6, 101, 8, 7, 1, 100, 6]

function sortAscending(array) {
    newArray = []
    newArray.push(array[0]) 
    for (i=0;i<array.length; i++) {
        if (array[i+1] > newArray[i]) {
            newArray.push(array[i+1])
        }
        if (array[i+1] < newArray[i]) {
            for (j=0; j<array.length; j++) {
                if (array[i+1] < newArray[j]) {
                    newArray.splice(j,0,array[i+1])
                    break
                }
            }
        }
    }
    return newArray

}
console.log(sortAscending(numbers))