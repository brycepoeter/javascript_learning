function fizzBuzz(number) {
    if (number % 15 == 0) {
        console.log("FizzBuzz")
    }
    else if (number % 5 == 0) {
        console.log("Buzz")
    }
    else if (number % 3 == 0) {
        console.log("Fizz")
    }
}

fizzBuzz(30)