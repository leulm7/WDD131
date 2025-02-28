import { participantTemplate, successTemplate } from "./template.js";
let participantCount = 1

document.querySelector("#add").addEventListener("click", function () {
    participantCount++;
    const participantFieldset = participantTemplate(participantCount);
    document.getElementById("add").insertAdjacentHTML("beforebegin", participantFieldset);
});

document.querySelector("form").addEventListener("submit", submitForm);
function submitForm(event) {
    event.preventDefault();
    // do the rest of the stuff
    let total = totalFees();
    let adultName = document.querySelector("#adult_name").value;
    document.querySelector("form").style.display = "none";
    const info ={adultName: adultName, participantCount: participantCount, total: total}
    const summaryElement = document.querySelector("#summary")
    summaryElement.innerHTML = successTemplate(info);
    }

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    return feeElements.reduce((total, fee) => {
        // parseFloat will convert a string to a number. If you don't do this, the numbers will be added as strings.
        return total + (parseFloat(fee.value) ||0);
    }, 0);
    // once you have your total make sure to return it!
    
    }