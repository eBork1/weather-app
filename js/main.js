var key = "2510cc4345ae2fb5c4f9c8f0053faa8c";

let subButton = document.getElementById("subButton");
let subInput = document.getElementById("userInput");
let cityName = document.getElementById("city");
let kelvin = document.getElementById("kelvin");
let fh = document.getElementById("fh");
let cel = document.getElementById("cel");
let condition = document.getElementById("condition");
let seasonDisplay = document.getElementById("season");

userZip = document.getElementById('userInput').value

subButton.addEventListener("click", submitted);

function submitted() {
    if (userZip === ''){    
    } else {
        let requestURL = "api.openweathermap.org/data/2.5/weather?zip=" + userZip + "&appid=" + key; 
        let request = new XMLHttpRequest(); 
        
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
    }
}
console.log(userZip);




    














