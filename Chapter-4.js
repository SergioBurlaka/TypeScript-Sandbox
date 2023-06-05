// Лінк на туторіал
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var muName = 'Sergii';
var newName;
// Type '"Marta"' is not assignable to type '"Sergii"'.
// newName = 'Marta'
var OldFamily;
(function (OldFamily) {
    OldFamily[OldFamily["Dave"] = 0] = "Dave";
    OldFamily[OldFamily["Jhon"] = 1] = "Jhon";
    OldFamily[OldFamily["Amy"] = 2] = "Amy";
})(OldFamily || (OldFamily = {}));
var family = [
    'Dave',
    'Jhon',
    'Sarah'
];
var familyPersone = 'Dave';
var familyPersone_5 = family[0];
// Type '"Sarah"' is not assignable to type '"Dave" | "Jhon"'.
// const familyPersone_3: PersoneFromEnum & PersoneFromEnum_2 = 'Sarah'
var familyPersoneTwo = 'Sarah';
// Get value from enum 
// https://stackoverflow.com/questions/71828165/make-type-from-enums-number-values-in-typescript
var Family;
(function (Family) {
    Family["dave"] = "Dave";
    Family["jhon"] = "Jhon";
    Family["any"] = "Amy";
})(Family || (Family = {}));
var addition = function (a, b) { return a + b; };
console.log(addition(4, 6));
var subtraction = function (a, b) { return a - b; };
console.log(subtraction(8, 6));
// rest 
var returnArrayOfStrings = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return __spreadArray([], rest, true);
};
console.log(returnArrayOfStrings('hello', 'Marty Macfly', 'Doc'));
var errorHandler = function (errorMessage) {
    throw new Error(errorMessage);
};
// console.log(errorHandler('Oh no there is a big mistake'))
function keepProcessing() {
    while (true) {
        console.log('I always does something and never ends.');
    }
}
// keepProcessing()
