const figures = document.querySelector('.figures');

/** SETTING THE NUMBERS **/
/**
 * * Use fill-method to fill the array from 0 - 11
 * * map through the array and give each number a div outside a p-tag
 * * add 1 to i, to make the counter start at 1 instead of 0
 * * add two classes to each numner. One class that is for all numbers
 * and one class that is for each individual number
 * 
 * Possibilities to add class to the p-tag.
 */
const clockNumbers = () => {
    const numbers = new Array(12).fill(null);
    figures.innerHTML = numbers.map((_, i) =>
        `<div>
            <p> ${i + 1}            
        </div>`
    ).join("");
    for (let i = 0; i < figures.children.length; i++) {
        let child = figures.children[i];
        child.classList.add("number", `${"number" + [i + 1]}`)
        /*
        const singleNumber = child.querySelector("p")
        singleNumber.classList.add("singleNumber")
        */
    }
}
clockNumbers();

/** ClockHandles **/
/**
 * * Get currentDate -> the new Date constructor will give the
 * current time.
 * * From currentDate, we can get the seconds... minutes... & hours.
 * * Divide the ratios to appropriate numbers (parts).
 * * The setProperty-method takes what property we want to set (from
 *  our CSS), and what we want to set it to (the rotationRatio).
 */
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

const setClock = () => {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

const setRotation = (element, rotationRatio) => {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setInterval(setClock, 1000)
setClock()