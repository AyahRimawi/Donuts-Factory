const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

document.getElementById("div1").appendChild(para);

//  const element = document.getElementById("div1");
// const child = document.getElementById("p1");
document.getElementById("div1").insertBefore(para,document.getElementById("p1"));