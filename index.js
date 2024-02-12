//Variables and Data types//
var myName = 'Adeola';
var age = 45;
//let myArray = [4, 'Shola', false, 7]

console.log(myArray)

//Aritmethic Operators//

console.log(5 < 9);
console.log(9 === 0);
console.log(age);
console.log(myArray);

//conditionals//

if (9>6){
    console.log('coming from the if block');
} else{
    console.log('coming from the else block');
}

//objects//

var school = {
    name: 'Adoneville',
    address: 'Lagos',
}

console.log(school.name, school.address);

var myArray = ['banana', 78, 'pluto', false, 'address'];

//                0      1      2      3         4

console.log(myArray[4]);

myArray.unshift('fruits');

console.log(myArray)

// functions //

function callMyName() {
    console.log('Matt');
}

callMyName();
callMyName();
callMyName();
callMyName();
callMyName();


//arrays//

const num = [1,2,3,4,5]
  

 function add (x){
    return x+2
 }
 
 console.log()

 // filter method //

 const items = [2, 'from', 3, 67, 2998, 5, 'yes']

 const numbs = items.filter((item)=> typeof item === 'number')

const words = items.filter(item=> typeof item === 'str')
 
console.log(numbs);

// find & findindex //

const items =['hi','cars' , 'houses' , 'clothes']

const result = items.find((items)=> items.lenght === 4)


console.log(result);

//findIndex//

const items =['hi','cars' , 'houses' , 'clothes']

const result = items.findIndex((items)=> items.lenght === 4)


console.log(result);

// every and some //

const items =['hi','cars' , 'houses' , 'clothes']

const result = items.every((items)=> items.lenght === 4)


console.log(result);

// some //

const items =['hi','cars' , 'houses' , 'clothes']

const result = items.some((items)=> items.lenght === 4)


console.log(result);

// reduce //

const cart =[150,100,400,600,200]
const total = cart.reduce((accumalator + currentValue) => preValue+currentValue,0)

console.log(total);

//