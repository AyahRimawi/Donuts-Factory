document.getElementById("submit-btn").addEventListener('click',function(event) 
{
    event.preventDefault();

    let username = document.getElementById("username").value
    let age = document.getElementById("age").value
    let gender = document.getElementById("gender").value
    let order = document.getElementById("order").value
  

    let result = document.getElementById("result")
    result.innerHTML=`Welcome To Donuts Factory: ${username} , ${age} , ${gender} , ${order}`
})


