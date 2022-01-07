// default paramete


function printName(name="priyanka"){
    console.log(name);
}
printName();


// Rest parameter

function sum(...num){
    console.log(num);
    console.log(arguments);

}
sum(25,23,4,5);

// rest parameter is  always take last parameter 



// sprad operator ......

var arr1 =[1,2,3,4,5];
var arr2 =[6,7,8,9];

function sum(param1,param2,param3,param4,param5,){
console.log(param1);
console.log(param2);
console.log(param3);
console.log(param4);
console.log(param5);
}
sum(arr1);
sum(...arr1);
var arr3 =[33,...arr1,45,...arr2,100];
console.log(arr3);

var obj1 = {

    x:10,
    y:15,
    z:'abc'
}
var obj2={...obj1, a:45 , x:78 };
console.log(obj2);


// Arrow function



// Multi line String & String  Interpolation 


// class Employee 


// Promises...


// let newPromise =new Promise((resolve,reject) => {
//     let result = 1;
//     if(result===1){
//         resolve ("successs");
//     }
//     else{
//         reject ("rejected");
//     }

// })
// console.log(new Promise);




// Asyn await...


async function printStep(){
    console.log("printing step");

}
console.log(printStep());
