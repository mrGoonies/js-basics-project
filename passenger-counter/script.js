let countEl = document.getElementById("count-el")
console.log(countEl)

let peopleCounter = 0

/**
 * Increment people counter with 1 plus. 
 * @returns null
 */
function increment() {
    console.log("The button was clicked")
    
    peopleCounter++;

    countEl.innerText = peopleCounter

    console.log(peopleCounter)

    return 
}  

document.getElementById("count-el").innerText = peopleCounter




