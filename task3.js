//--------------------------Level 1-Functions Basics----------------------------
console.log("Task 1: Student Form Function");
// Create a function studentForm(name, age,course) and print




function studentForm(name, age, course) {
    console.log(`Name:${name}`);
    console.log(`Age:${age}`);
    console.log(`Course:${course}`);
}
studentForm("Naveen", 22, "MERN");



console.log("Task 2: Calculator Function");
//Create function calc(a,b):

function calc(a, b) {
    console.log(`Addition:${a + b}`);
    console.log(`Subtraction:${a - b}`);
    console.log(`Multiplication:${a * b}`);
}
calc(10, 5);


console.log("Task 3: Reuseable Greeting");
// Call same function for 3 users:
function greet(name) {
    console.log(`Hello, ${name}.`);
}
greet("Kamal");
greet("Praveen");
greet("Sai");


// ------------------------Level 2:Return & Scope----------------------------------
console.log("Task 4: Return Value");
// Create a function square(num) return the square value
function square(num) {
    return num * num;
}
console.log(square(5));


console.log("Task 5: Scope Check");
//Inside function:
// Try printing outside function Observe what happens.
// Explain why

function checkScope() {
    let secret = "JavaScript";
    console.log("Inside function:", secret)
}
checkScope();


// let secret=JavaScript;
// console.log("Outside function:", secret) // this will give error because the variable secret is declared inside the function and it is not accessible outside the function. This is called scope. The variable secret is in the local scope of the function checkScope and it cannot be accessed outside the function.


//----------------------------Level 3: Spread/Rest----------------------------------------------------
console.log("Task 6: Merge Arrays");
// Use  spread operator to merge two arrays:
let boys = ["car", "bike"];
let girls = ["doll","teddy"];
let mergedArray = [...boys, ...girls];
console.log(mergedArray);


console.log("Task 7: Unlimited Numbers");
// Create function:
function sumAll(...nums){
    let total=0;
    for(let n of nums){
        total+=n;
    }
    return total;
}
console.log(sumAll(1,2,3,4,5));



//------------------------------level 4: Destructing----------------------------------------------------
console.log("Task 8: Array Destructuring");
let colors = ["red", "green", "blue"];
let [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor); 
console.log(secondColor);
console.log(thirdColor);



console.log("Task 9: Object Destructuring");
let emp={
    name:"Naveen",
    role:"Developer",
    salary:"5LPA",
}
let {name, role, salary}=emp;
console.log(name);
console.log(role);
console.log(salary);



//---------------------------------Level 5:Real-Time Logic ------------------------------------------
console.log("Task 10: Offer Generator");
function *offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    return "Try again ";
}
const getOffer=offerGenerator();
console.log(getOffer.next().value);
console.log(getOffer.next().value);
console.log(getOffer.next().value);
console.log(getOffer.next().value);
const finalOffer=getOffer.next();
if(finalOffer.done){
    console.log("No more offers ");
}



//------------------------------------Level 6:Advanced-------------------------------------
console.log("Task 11: Curry Function");
const add=(a)=>(b)=>(c)=>a+b+c;
const result=add(10)(20)(30);
console.log(result);


console.log("Task:12: Student Marks Analyzer");

function marks(...nums){
    let total=nums.reduce((acc, curr) => acc + curr, 0);
    let average=total/nums.length;
    console.log(`Total Marks: ${total}`);
    console.log(`Average Marks: ${average}`);
}
marks(80,90,70,60);


console.log("challenge Task(Real Comapny Level):");
function register(name,role,...skills){
    console.log(`Name:${name}`);
    console.log(`Role:${role}`);
    console.log(`Skills:${skills.join(",")}`);
}
register("Anvesh","Frontend","HTML","CSS","JS","React");