//primitive declarations
var firstName:string = 'tom'
var lastName = 'michel' // type inference
let speed:number = 45
var married:boolean;
married = true

//array declarations
var hobbies:string[]=['volleyball','cricket','chess']
var employes:{}[]=[{name: 'tom'},{age:90,gender:'male'}]
var ageRange:number[]=[12,23,34]

//objects declarations
var person= {name: 'garry',age:28}
var employee:{name: string
department:string
};
employee = {name:'vivid',department:'finance'}

//type
type payment = {mode:string,amount:number}
var cc = {mode: 'creditCard',amount:8909.90}
var cheque:payment = {mode: 'cheque',amount: 4504.090}

//union type
var temp:string | number
temp='tempValue'
temp=45

//function declaration
function sum(a:number,b:number): number{
    return a+b;
}
//function calling
sum(10,20);

//generics
function iterate<T>(inputArr:T[]){
    return inputArr;
}

var strResult = iterate<string>(['a','b'])
var numResult = iterate<number>([12,34])

//class declarations
class Payment{
    private mode: string
    private amount: number

    constructor(mode: string,amount:number)
    {
        this.mode=mode
        this.amount=amount
    }
}

class Address{
    constructor(public street:string, public city:string,public state:string,public pincode:number){}
}

var homeAddress:Address = new Address('lawrence road','new delhi','delhi',1220)
console.log('city is : ' + homeAddress.city)
console.log('pincode is ' + homeAddress.pincode)

//interface declarations
interface Developer{
    skill:string
    salary:number
    codeOutput: () => string
}

var dev:Developer = {skill:'java',salary:90909,codeOutput: () => 'success'}
