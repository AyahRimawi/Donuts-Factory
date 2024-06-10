let div = document.getElementById('branch');
let p = document.createElement('p');
let content = document.createTextNode('username:'+username);
let ol = document.createElement('ol');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');

let text1 = document.createTextNode ('Gender:'+ gender)
let age = prompt('Please enter your age');
let text2 = document.createTextNode ('Age:'+ age)
let text3 = document.createTextNode ('Order:'+ order)

li1.appendChild(text1)
li2.appendChild(text2)
li3.appendChild(text3)

p.appendChild(content)

ol.appendChild(li1)
ol.appendChild(li2)
ol.appendChild(li3)


div.appendChild(p)
div.appendChild(ol)

console.log("username" + username);
console.log("Gender:" + gender);
console.log("Age:" + age);
console.log("Order:" + order);


let par = document.getElementById('parag');
let contentIntro = document.createTextNode('CUSTOMIZED BEFORE YOUR EYES!');
par.appendChild(contentIntro)




