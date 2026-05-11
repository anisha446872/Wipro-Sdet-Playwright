// Student Grade Calculator
console.log("Student Grade Calculator");

function calculateStudentGrade(studentMarks) {

    if (studentMarks >= 90) {
        return "Grade A";
    }

    else if (studentMarks >= 75) {
        return "Grade B";
    }

    else if (studentMarks >= 50) {
        return "Grade C";
    }

    else {
        return "Fail";
    }
}

let studentMarks = 75;
let studentGrade = calculateStudentGrade(studentMarks);
console.log("Marks:", studentMarks);
console.log("Grade:", studentGrade);