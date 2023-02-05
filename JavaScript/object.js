// // var phone = {
// //     brand: "samsung",
// //     model: 223,
// //     price: 12000,
// //     processor: "AMD"

// // };
// // console.log(phone.brand);

// // phone.price = 8000;
// // console.log(phone.price);

// // phone["price"] = 9000;
// // console.log(phone.price);

// var color = "green"

// switch (color) {
//     case "white": console.log("the color is white");
//         break;

//     case "green": console.log("the color is green");
//         break;

//     case "blue": console.log("the color is blue");
//         break;

//     default: console.log("the color is black");

// }

// var i = 0;
// while (i <= 10) {
//     console.log(i, " printed");
//     if (i == 3) {
//         break;
//     }
//     i++;
// };

// var i = 1;
// for (i; i <= 10; i++) {
//     console.log(i, "printed");
//     if (i == 7) {
//         break;
//     };
// };

var array = [12, 23, 34, 45, 56, 67, 78, 89, 90, 65, 54, 43, 21];
// for (i = 0; i < array.length; i++) {
//     var arrayNumber = array[i];
//     if (arrayNumber > 50) {
//         continue;
//     }
//     console.log(arrayNumber);
// };

var arrayIndexValue = array.indexOf(45);
if (arrayIndexValue == -1) {
    console.log("there is no such value in the database");
}
else {
    console.log("the value do exist in the database");
}