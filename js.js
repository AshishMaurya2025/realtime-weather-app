
var wapper = document.querySelector(".wapper");
var searchBtn = document.querySelector("#searchBtn");
var input = document.querySelector(".input");
var cityName = document.querySelector("#city");

var temperature = document.querySelector(".temperature");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".wind");

var error = document.querySelector(".error");
var images = document.querySelector(".images");

let key = "458253f8ea746284bf33ce35a2c791c5";
let api = "https://api.openweathermap.org/data/2.5/weather?q=";

async function searchWeather(city){
     let reponse = await fetch(api+city+`&appid=${key}`)
         
     
          if(reponse.status == '404'){
             wapper.style.display = "none"
             error.style.display = "block";
   
             
             
          }else{
            
          let data = await reponse.json(); 
         temperature.innerHTML = Math.round(data.main.temp - 273.15)+"°C";
         cityName.innerHTML = data.name;
         humidity.innerHTML = data.main.humidity + "%";
         wind.innerHTML = data.wind.speed + "Km/h";
         console.log(data)
         wapper.style.display = "block"
            error.style.display = "none";
                      
          
          if(data.weather[0].main == "Clouds"){
             images.src = "images/clouds.png";
          }else if(data.weather[0].main == "Clear"){
             images.src = "images/clear.png";
              
          }else if(data.weather[0].main == "Rain"){
            images.src = "images/rain.png";
             
         }else if(data.weather[0].main == "Drezzel"){
          images.src = "images/drezzel.png";
           
       }else if(data.weather[0].main == "Mist"){
        images.src = "images/mist.png";
         
       }
     }
        }
         

 searchBtn.addEventListener("click",function(){
    //  let values = input.values
      searchWeather(input.value);
     
 })