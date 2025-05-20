const apikey="c072140358c2d30fce7f5d3a164a316b"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox= document.querySelector(".search input")
const searchBttn= document.querySelector(".search button")
const weathericon=document.querySelector(".weather-icon")
async function checkweather(city) {
    const response= await fetch(apiurl+city+`&appid=${apikey}`)
    var data= await response.json();
  

    console.log(data)
    document.querySelector('.city').innerHTML= data.name;
    document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML= data.main.humidity +"%";
    document.querySelector('.wind').innerHTML= data.wind.speed + "km/h";
    if(data.weather[0].main =="Clouds"){
        weathericon.src="images/clouds.png"
    }
    else if(data.weather[0].main =="Clear"){
        weathericon.src="images/clear.png"
    }
    else if(data.weather[0].main =="Rain"){
        weathericon.src="images/rain.png"
    }
    else if(data.weather[0].main =="Drizzle"){
        weathericon.src="images/drizzle.png"
    }
    else if(data.weather[0].main =="Mist"){
        weathericon.src="images/mist.png"
    }
   

    
}

searchBttn.addEventListener('click',()=>{
    checkweather(searchBox.value);
 
})