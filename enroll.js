let DSA = [];
let PL = [];
let Networks = [];

function displayStudents() {
    let message = "\nFinal Enrolled Students:\n";
    message += "DSA: " + (DSA.length > 0 ? DSA.join(", ") : "None") + "\n";
    message += "PL: " + (PL.length > 0 ? PL.join(", ") : "None") + "\n";
    message += "Networks: " + (Networks.length > 0 ? Networks.join(", ") : "None") + "\n";
    alert(message);
}

function enrollStudent(subjectArray) {
    let studentName = prompt("Enter the name of the student:");
    if (studentName) {
        subjectArray.push(studentName);
        alert(`${studentName} has been enrolled.`);
    }
}

function unenrollStudent(subjectArray) {
    if (subjectArray.length === 0) {
    alert("No students are currently enrolled in this subject.");
    return;
}
let currentEnrollees = "Currently Enrolled Students: " + subjectArray.join(", ");
alert(currentEnrollees);

let studentName = prompt("Enter the name of the student:");
let index = subjectArray.indexOf(studentName);
if (index !== -1) {
    subjectArray.splice(index, 1);
alert(`${studentName} has been unenrolled.`);
} else {
    alert(`${studentName} is not enrolled in this subject.`);
}
}

function main() {
    while (true) {
        let subjectChoice = prompt("Select a subject to enroll:\n(A) DSA\n(B) PL\n(C) Networks\n(D) Exit");
        let selectedSubjectArray;
        
        switch (subjectChoice.toUpperCase()) {
            case 'A':
                selectedSubjectArray = DSA;
                break;
            case 'B':
                selectedSubjectArray = PL;
                break;
            case 'C':
                selectedSubjectArray = Networks;
                break;
            case 'D':
                displayStudents();
                return;
            default:
                alert("Invalid choice. Please select a valid option.");
                continue;
}

while (true) {
    let operationChoice = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit");
    switch (operationChoice.toUpperCase()) {
        case 'A':
            enrollStudent(selectedSubjectArray);
            break;
        case 'B':
            unenrollStudent(selectedSubjectArray);
            break;
        case 'C':
            break;
        case 'D':
            displayStudents();
        return;
        default:
            alert("Invalid choice. Please select a valid option.");
            continue;
        }
        if (operationChoice.toUpperCase() === 'C') {
            break;
        }
    }
}
}
main();