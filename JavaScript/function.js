// function say() {
//     console.log("Let's have some tea");
//     console.log("Or maybe Coffee");
// }

// say();

// function foodValue(taka) {
// //     if (taka == 0) {
// //         console.log("gave me no money to bring the food");
// //     }
// //     else {
// //         console.log("gave me ", taka, " to bring the food");
// //     }
// // }

// // foodValue(100);
// // foodValue(150);
// // foodValue(0);

// function result(marks) {
//     if (marks > 80) {
//         console.log("your result is A+");
//     }
//     else if (marks > 70) {
//         console.log("Youer result is A");
//     }
//     else if (marks > 60) {
//         console.log("your result is A-");
//     }
//     else {
//         console.log("Your result is laddu-guddu");
//     }
// }

// var student1 = 62;
// var student2 = 42;
// console.log("result of student1 is :");
// result(student1);
// console.log("result of student2 is :");
// result(student2);

function bringFood(money) {
    var applePrice = 30;
    totalApple = money / applePrice;
    return totalApple;
}

var money = 999;
var food = bringFood(money);
var foodInt = Math.floor(food);
console.log(foodInt);

function phonePrice(money) {
    var samsung = 17;
    quantity = money / samsung;
    return quantity;
}

var money = 20
var phone = phonePrice(money);
var phone = Math.floor(phone);
console.log("you will get ", phone, " at this price");