// function isMoonUp(time) {
//     if (time > 19 || time < 5) {
//         return true;
//     }
//     else {
//         return false;
//     }
// };

// let clockTime = 11;
// let moon = isMoonUp(clockTime);
// console.log(moon);

// odd number - even number

function oddNumber(number) {
    if (number % 2 == 0) {
        console.log("the number is an even number");
    }
    else if (number % 2 != 0) {
        console.log("the numebr is an odd number");
    }
    else {
        console.log("the number is zero");
    }
};

let inputNumber = 3;
oddNumber(inputNumber);
// let result = oddNumber(inputNumber);
// console.log(result);