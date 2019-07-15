names = ["John","Mary", "Alex", "Steve", "Mary", "John"]
function removeDuplicates(array) {
    let noDuplicates = []
    for(i=0; i<array.length; i++) {
        if (!(noDuplicates.includes(array[i]))) {
            noDuplicates.push(array[i])
        }
    }
    return noDuplicates
}

console.log(removeDuplicates(names))