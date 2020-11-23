// arrow function

const fun = ()=>{
     console.log('Arrow function');
}


// classess

class Person{
    constructor(){
        this.name = 'Tuhin';
    }
    print(){
        console.log(this.name)
    }
}

const person = new Person()
person.print()



// Modern ES7 Classes

class Human{
    skill ="Can think";
    hunt = () =>{
        console.log("Human can hunt also ", this.skill);
    }
}


class Person2 extends Human{
    name ="ES7";
    print = () =>{
        console.log("Hello ,  ",this.name);
    }
}


const person2 = new Person2()
person2.print()
person2.hunt()


// Spread and Rest Operators

console.log("Spread & Rest operator")
const numbers = [1,2,3]
const newNumber =[...numbers,4,5,6]
console.log(newNumber)

// Destructuring 
console.log('Destructuring')
const dnum = [1,2,3,4];
let num1,num2;
[num1, ,num2] = dnum 
console.log(num1,num2) // prints [1 3]

const dobject = {
    name : "Tuhin",
    email: "tuhin.mc@gmail.com",
    username:'hello@World',
    password: 'hello Password'
}

console.log(dobject)
let name;
// {name} = dobject
// console.log(name)

// Reference and primitive type
console.log('Reference and Primitive Types')

let ref = {
    name:'Hello'
}

// let newRef = ref

let newRef = {
    ...ref
}
newRef.name ="ref not changed"
console.log(ref.name)


// way to copy without reference.
// like deepcopy in python


console.log("--- Array functions ----")

let arr = [1,2,3,4,5]
let arr2 = arr.map( elem => elem *2 )
console.log(arr,arr2)

console.log(arr.entries().next().done)

console.log(arr.reduce((elem,prev)=>{ return elem+prev},100))