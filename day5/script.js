console.log('1')
console.log('2')
console.log('3')
console.log('4')
console.log('5')
console.log('6')
console.log('7')
console.log('8')
console.log('9')
console.log('10')

//prompt
let result = prompt("Enter your name")
console.log("hello, ", result);

let num = prompt("enter number");
num = Number(num);
if(isNaN(num))
{
    num = 10
}
console.log(num + 10);

let grade = prompt("enter your grade");

grade = Number(grade);

if(grade >= 70 && !isNaN(grade)){
    console.log("you pass");
}else{
    console.log("you failed")
}
