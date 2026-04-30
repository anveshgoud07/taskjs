//----------------------------------------LEVEL 1(basic Practice)------------------------------------------------------

//Task 1:Array Basics
let arr1=[10,20,30,40,50];
console.log(arr1[0]);
console.log(arr1[arr1.length-1])
console.log(arr1.length);


//Task 2:Push &Pop
let arr2=[1,2,3]
arr2.push(4,5)
arr2.pop()
console.log(arr2)


//Task3:Includes Check
let arr3=["html","css","javascript","react"]
console.log(arr3.includes("javascript"))


// -----------------------------------------LEVEL 2(Intermediate)-----------------------------

//TASK 4: Filter Salaries

let emp=[
    {
        name:"A", salary:10000
    },
    {
        name:"B", salary:50000
    },
    {
        name:"C", salary:30000
    }
];
let filtered=emp.filter(employee=>employee.salary>20000)
console.log(filtered)


//TASK 5: Map Names

let names=emp.map(employee=>employee.name);
console.log(names)


//TASK 6: Reduce Sum

let totalSalary=emp.reduce((acc,curr)=>acc+curr.salary,0);
console.log(totalSalary);



// --------------------------------------LEVEL 3(Logic Building)-----------------------
//TASK 7: Remove Duplicates
let arr4=[1,2,2,3,4,4,5];
let unique=arr4.filter((item,index)=>arr4.indexOf(item)===index)
console.log(unique);



//TASK 8: Find Largest Number
let arr5=[10,200,5,90]
let largest=arr5.reduce((max,curr)=>(curr>max?curr:max),arr4[0]);
console.log(largest);


//TASK 9 :Reverse String Without reverse()

let str="hello"
let reversed=str.split("").reduce((acc,char)=>char+acc,"");
console.log(reversed)


//--------------------------------------LEVEL 4(Advanced Thinking)------------------------
//Task 10: Group by Salary
let empGroup=[
    { name:"A",salary:10000},
    { name:"B",salary:50000},
    { name:"C",salary:10000}
];
let grouped=empGroup.reduce((acc,curr)=>{
    if (!acc[curr.salary]) acc[curr.salary]=[];
    acc[curr.salary].push(curr.name);
    return acc;
},{});
console.log(grouped);



//TASK 11:Flatten Array(without flat)
let arr6=[1,[2,[3,[4]]]];
function customFlatten(data){
    return data.reduce((acc,val)=>Array.isArray(val)?acc.concat(customFlatten(val)):acc.concat(val),[]);

}
console.log(customFlatten(arr6))



//Task 12:CUstom Sort(Descending)
let arrSort=[5,2,9,1];
arrSort.sort((a,b)=>b-a);
console.log(arrSort);


// ---------------------------BONUS:(interview Level)-------------------------------
//Task 13:Find Second Largest
let arrSecond=[10,50,20,40];
let sortedUnique=arrSecond.sort((a,b)=>b-a);
console.log(sortedUnique[1]);


//Task 14: COunt Characters
let strCount="aabbccdde";
let count=strCount.split("").reduce((acc,char)=>{acc[char]=(acc[char]||0)+1;
    return acc;
},{});
console.log(count)