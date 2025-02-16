function getGrades(inputSelector) {
    // get grades from the input box
    const grades = document.querySelector(inputSelector).value;
    // split them into an array (String.split(','))
    const splitGrades = grades.split(",");
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    const cleanGrades = splitGrades.map((grade) => grade.trim().toUpperCase());   
    // return grades
    return cleanGrades;
  }
  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    let point = 0
    if (grade === 'A'){
        point = 4;
    }    
    else if (grade === 'B') {
        point = 3;
    }
    else if (grade === 'C') {  
        point = 2;
    }
    else if (grade === 'D') {
        point = 1;
    }
    return point;
  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    const points = grades.map((grade) => lookupGrade(grade));
    // calculates the GPA
    const total = points.reduce((total, num) => total + num)/points.length;
    // return the GPA
    return total.toFixed(2);
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    const output = document.querySelector(selector);
    output.innerText = gpa;
  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    const grades = getGrades('#grades');
    // calculate the gpa from the grades entered
    const gpa = calculateGpa(grades);
    // display the gpa
    outputGpa(gpa, '#output');
  }

document.querySelector("#submitButton").addEventListener("click", clickHandler);