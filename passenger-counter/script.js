let saveEl = document.getElementById("save-el")
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

/**
 * Decrement people counter with 1 minus.
 * If the counter is 0, do not decrement.
 * @returns null
 */
function decrement() {
    console.log("Decrement button was clicked")

    if (peopleCounter > 0) {
        peopleCounter--;
    } 

    countEl.innerText = peopleCounter

    console.log(peopleCounter)

    return
}

function save() {
    console.log("Save button was clicked")
    saveEl.innerText += ` ${peopleCounter} - `
    countEl.textContent = 0
    peopleCounter = 0
    console.log(peopleCounter)

    return
}

document.getElementById("count-el").innerText = peopleCounter   