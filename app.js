const apikey="629469a28286cd4604cd44675f6aa4b2";
const apiurl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button i");
const weathericon=document.querySelector(".weather-icon");
const error=document.querySelector(".error");


async function checkweather(city){
    const responce=await fetch (apiurl+ city+`&appid=${apikey}`);
    if(responce.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else{
        var data=await responce.json();

        console.log(data);
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity;
            document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        
        if(data.weather[0].main=="Clouds"){
            weathericon.src="2.jpeg";
        
        }
        else if(data.weather[0].main=="Clear"){
            weathericon.src="6.jpeg";
        }
    }
    document.querySelector(".weather").style.display="block" ;

}






searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
});

