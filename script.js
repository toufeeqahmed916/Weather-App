const apiKey ="fb974a3677f4296dcdf0004e9130229e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let cityW = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humd = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let search = document.querySelector(".search input");
let searchbtn = document.querySelector(".search button");
let image = document.querySelector(".weather-icon");
let weather = document.querySelector(".weather");
let error = document.querySelector(".error");

async function checkWeather (city){
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        error.style.display = "block";
        weather.style.display = "none";
    }else{
        error.style.display = "none";
        weather.style.display = "block";
    }
    let data = await response.json();
    console.log(data);
    cityW.innerText = data.name;
    temp.innerText = `${data.main.temp}°c`;
    humd.innerText = `${data.main.humidity}%`;
    wind.innerText = `${data.wind.speed}km/h;`

    if(data.weather[0].main == "Clouds"){
        image.src = "clouds.png";
    }else if(data.weather[0].main == "Rain"){
        image.src = "rain.png";
    }else if(data.weather[0].main == "Clear"){
        image.src = "clear.png";
    }else if(data.weather[0].main == "Drizzle"){
        image.src = "drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        image.src = "mist.png";
    }else if(data.weather[0].main == "Snow"){
        image.src = "snow.png";
    }

    weather.style.display = "block";
}


searchbtn.addEventListener("click", ()=>{
    checkWeather(search.value);
})



