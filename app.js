let username = prompt('Please enter your name');

// let gender;
// do {
//     gender = prompt('Please enter your gender');
// } while (gender !== 'female' && gender !== 'male');

// if (gender == 'female') {
//     alert('Welcome Ms');
// } else {
//     alert('Welcome Mr');
// }







let order = prompt('Would you like to order a donut, coffee, ice cream, or bakery items?');

let orderName = prompt('Please write down the name of your order')

alert ('Your order is being prepared')

console.log(username, " " ,orderName)
document.write(username, " " ,orderName)

Array = [username, gender, order, orderName];
console.log(Array);
console.log("Username:", Array[0]);
console.log("Gender:", Array[1]);
console.log("Order:", Array[2]);
console.log("Order Name:", Array[3]);

for (let i = 0; i < Array.length; i++) {
    console.log(Array[i]);}



