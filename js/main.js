//api key and url
var key = "2510cc4345ae2fb5c4f9c8f0053faa8c";

//declare variables
let Btn = document.getElementById("subButton");
let subInput = document.getElementById("userInput");
let cityName = document.getElementById("City");
let kelvin = document.getElementById("kelvin");
let fh = document.getElementById("fh");
let cel = document.getElementById("cel");
let condition = document.getElementById("condition");
let seasonDisplay = document.getElementById("season");

//btn addeventlistener
Btn.addEventListener('click', getWeather);


//async function
function getWeather() {

    //get user value
    userZip = document.getElementById('userInput').value;
    var URL = "https://api.openweathermap.org/data/2.5/weather?zip=" + userZip + "&appid=" + key;
    console.log(userZip);
    console.log(URL);

    fetch(URL)
        .then(function (response) {
            console.log(response);
            return response.json()

        })
        .then(function (json) {
            console.log(json);
            let city = json.name;
            cityName.innerHTML = city;

            let tempK = Math.round(json.main.temp);
            kelvin.innerHTML = tempK + "°";

            let tempF = Math.round(((json.main.temp - 273.15) * 9 / 5) + 32);
            fh.innerHTML = tempF + "°";

            let tempC = Math.round(json.main.temp - 273.15);
            cel.innerHTML = tempC + "°";

            let cond = json.weather[0].description;
            condition.innerHTML = cond;

            let icon = json.weather[0].icon;
            let iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
            $('#icon').attr('src', iconurl);
        })
}
















