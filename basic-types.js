"use strict";
//primitive declarations
var firstName = 'tom';
var lastName = 'michel'; // type inference
var speed = 45;
var married;
married = true;
//array declarations
var hobbies = ['volleyball', 'cricket', 'chess'];
var employes = [{ name: 'tom' }, { age: 90, gender: 'male' }];
var ageRange = [12, 23, 34];
//objects declarations
var person = { name: 'garry', age: 28 };
var employee;
employee = { name: 'vivid', department: 'finance' };
var cc = { mode: 'creditCard', amount: 8909.90 };
var cheque = { mode: 'cheque', amount: 4504.090 };
//union type
var temp;
temp = 'tempValue';
temp = 45;
//function declaration
function sum(a, b) {
    return a + b;
}
//function calling
sum(10, 20);
//generics
function iterate(inputArr) {
    return inputArr;
}
var strResult = iterate(['a', 'b']);
var numResult = iterate([12, 34]);
//class declarations
var Payment = /** @class */ (function () {
    function Payment(mode, amount) {
        this.mode = mode;
        this.amount = amount;
    }
    return Payment;
}());
var Address = /** @class */ (function () {
    function Address(street, city, state, pincode) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
    }
    return Address;
}());
var homeAddress = new Address('lawrence road', 'new delhi', 'delhi', 1220);
console.log('city is : ' + homeAddress.city);
console.log('pincode is ' + homeAddress.pincode);
var dev = { skill: 'java', salary: 90909, codeOutput: function () { return 'success'; } };
