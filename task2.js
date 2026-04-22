//Create Student Data
let studentData = [
    { id: 1, name: "Naveen", mark: 85, course: "MERN" },
    { id: 2, name: "John", mark: 45, course: "Python" },
    { id: 3, name: "Priya", mark: 72, course: "Java" },
    { id: 4, name: "Arun", mark: 95, course: "React" },
]



// TASK 1: Print all Students

console.log("Task 1: Print all Students")
console.log(studentData)

//Use loop and print
for(let i=0; i<=1; i++){
    console.log(`${studentData[i].id} ${studentData[i].name} ${studentData[i].mark} ${studentData[i].course}`)
}




//TASK 2:Pass/Fail
console.log("Task 2: Pass/Fail")
//condition 
for(let i=0; i<studentData.length; i++){
    if(studentData[i].mark>=50){
        console.log(`${studentData[i].name} is Pass`)
    }
    else{
        console.log(`${studentData[i].name} is Fail`)
    }
}




//Task 3: Grade System
console.log("Task 3: Grade System")
for(let i=0; i<studentData.length; i++){
    if(studentData[i].mark>=90){
        console.log(`${studentData[i].name} has Grade A`)
    }
    else if(studentData[i].mark>=75){
        console.log(`${studentData[i].name} has Grade B`)
    }
    else if(studentData[i].mark>=50){
        console.log(`${studentData[i].name} has Grade C`)
    }
    else{
        console.log(`${studentData[i].name} has Failed`)
    }
}


//Task 4: Topper Student
console.log("Task 4: Topper Student")
let topper = studentData[0];
for(let i=1; i<studentData.length; i++){
    if(studentData[i].mark>topper.mark){
        topper = studentData[i];
    }
}
console.log(`${topper.name} is the topper with marks ${topper.mark}`)



//Task 5: Course Search
console.log("Task 5: Course Search")
let searchCourse = "React";
for(let i=0; i<studentData.length; i++){
    if(studentData[i].course === searchCourse){
        console.log(`${studentData[i].name} is enrolled in ${searchCourse}`)
    }
}



//Task 6: New Student
console.log("Task 6: New Student")
let newStudent = { id: 5, name: "Anvesh", mark: 88, course: "Devops" };

studentData.push(newStudent);
console.log(studentData)


//task 7: Attendance System
console.log("Task 7: Attendance System")
let attendance = "Present";
switch(attendance){
    case "Present":
        console.log("Welcome")
        break;
    case "Absent":
        console.log("Mark absent")
        break;
    case "Leave":
        console.log("Approved leave")
        break;
    default:
        console.log("Invalid attendance status")
}
//Task 8: Login System
console.log("Task 8: Login System")
console.log("just refresh and enter the username and password as per the condition")
let username=prompt("Enter username")
let password=prompt("Enter password")
if(username ===username && password ===`${username}@123` ){
    alert("Login successful")
}
else{
    alert("Login failed")
}



