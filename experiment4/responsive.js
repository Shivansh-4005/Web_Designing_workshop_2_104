var subjects = prompt("Enter number of subjects");
var total = 0;

for (var i = 1; i <= subjects; i++) {
    var marks = prompt("Enter marks of subject " + i);
    total += Number(marks);
}

var average = total / subjects;
var grade;
var result;

if (average >= 60) {
    grade = "A";
    result = "Pass";
} else if (average >= 50) {
    grade = "B";
    result = "Pass";
} else if (average >= 40) {
    grade = "C";
    result = "Pass";
} else {
    grade = "D";
    result = "Fail";
}

// Create a result container dynamically
var div = document.createElement("div");
div.className = "result";
div.innerHTML = 
    "Total Marks = " + total + "<br>" +
    "Average Marks = " + average + "<br>" +
    "Grade = " + grade + "<br>" +
    "Result = " + result;

document.body.appendChild(div);
