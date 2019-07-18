let enterTimeBox = document.getElementById("enterTimeBox")
let enterTimeButton = document.getElementById("enterTimeButton")
let timeRemainingDiv = document.getElementById("timeRemainingDiv")

enterTimeButton.addEventListener("click", () => {
    let timerStart = enterTimeBox.value 
    timeRemainingDiv.innerHTML = `${timerStart} seconds left`
    let setIntervalVar = setInterval(() => {
        timerStart -= 1 
        
        if (timerStart > 0) {
            timeRemainingDiv.innerHTML = `${timerStart} seconds left`
        }
        else if (timerStart == 0) {
            timeRemainingDiv.innerHTML = "TIME'S UP!!!!"
        }
    }, 1000)

    window.setTimeout(() => {
        clearInterval(setIntervalVar)
    }, (timerStart + 1) * 1000)
})
  
