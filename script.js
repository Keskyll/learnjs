console.log('hello JS');
let num = 1;
const pi=3.141595;
var num2 = 2; //hoisting
num = 2;
console.log(typeof num);
console.log(typeof num);
let text = 'hello world';
text = "hello world";
text = `hello world
and pi is ${pi}`;
console.log(text);
let bool = true;
bool = false;
console.log(bool);
let undef;
console.log(undef);
let nil = null;
console.log(nil);
nil=undefined;
console.log(nil);
num= -1/0; //infinity and -infinty
console.log(num);
num= math.sqrt(-1);
console.log(num);
num= 0* -1;
console.log(num);
num=0.1 + 0.2;
console.log(num);
let array= [1, 2, 3, 'heasd', true];
array.push('asdasd');
console.log(array);
console.log(array[0]);
let obj = {
    name: 'Karoli',
    age: 28,
    dogs: ['Lucky', 'Lotte'],
    address: {
        city: 'Vihasoo',
        street: 'Kasesalu'
    },
    'to-do': 'stuff',
    'anything goes': true,
    hello(){
        console.log('hello');
    }
}
console.log(obj);
console.log(obj.name);
console.log(obj['to-do']);
let func= function (){
    console.log('hello world');
}
function func2(){
    console.log('hello world');
}
let func3= ()=> console.log('hello world');
let func4 =()=> {
    console-log('hello world');
}