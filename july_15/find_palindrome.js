function findPalindrome(word) {
    for(let index = 0; index < word.length/2; index ++) {
        if(word[index] !== word[word.length - 1 - index]) {
            console.log("Your word is not a palindrome")
            break
        }
        else {
            console.log("Your word is a palindrome")
        }
    }
}

findPalindrome("staple")