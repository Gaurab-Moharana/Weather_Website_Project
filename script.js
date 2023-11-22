let city = document.getElementById("city");
let type= document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let apiKey = "382ceed752d3fccd52b8e280b412d20e";

const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`);
    console.log(getData);
    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if(jsonData.cod == 400){
        alert("Please Enter Location");
        image.src="error12.png";
        city.innerHTML="";
        temp.innerHTML="";
        type.innerHTML="";
    }

    if(jsonData.cod == 404){
        alert("Please Enter Valid Location");
        image.src="attention.png";
        city.innerHTML=search;
        temp.innerHTML="";
        type.innerHTML="";
    }


    city.innerHTML=search;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main;
    
    if(type.innerHTML=="Clouds"){
        image.src="cloudy.png";
    }
    else if(type.innerHTML=="Clear"){
        image.src="clear.png";
    }
    else if(type.innerHTML=="Sunny"){
        image.src="sun.png";
    }
    else if(type.innerHTML=="Rainy"){
        image.src="rain.png";
    }
    else if(type.innerHTML=="Smoke"){
        image.src="clear.png";
    }
    else if(type.innerHTML=="Haze"){
        image.src="clear.png";
    }
    else if(type.innerHTML=="Snow"){
        image.src="rain.png";
    }
    input.value=""
}

function myFun(){
    search=input.value;
    data(search);
}