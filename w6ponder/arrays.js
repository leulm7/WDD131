document.addEventListener("DOMContentLoaded", () => {
  const myList = document.querySelector("#myList");
  if (myList) {
    myList.innerHTML = stepsHtml.join("");
  }

  const gpaElement = document.querySelector("#gpa");
  if (gpaElement) {
    const gpa = gpaPoints.reduce((total, item) => total + item, 0) / gpaPoints.length;
    gpaElement.textContent = `GPA: ${gpa.toFixed(2)}`;
  }
});
//  arrays.js
const steps = ["one", "two", "three"]; 
function listTemplate(step) {
  return `<li>${step}</li>` //the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
// document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML

const grades = ['A', 'B', 'A'];

function convertGradeToNumber(grade) {
 let point = 0
 if (grade === 'A'){
  point = 4;
 }
 else if (grade === 'B') {
  point = 3;
 }
 return point;
}

const gpaPoints = grades.map(convertGradeToNumber);

console.log("GPA POINTS: " + gpaPoints);

const gpa = gpaPoints.reduce((total, item) => {
  return total + item;
}, 0)