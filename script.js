



function date() {
    let date = document.getElementById("date");

    setInterval(()=>{

    var currentDate = new Date();


    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var day = currentDate.getDate();


    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var formattedDate = `0${day}-0${month}-${year}`;
    var formattedTime = `${hours}:${minutes}`;


   

    date.innerHTML = formattedDate + " "+formattedTime
    
    },1000);
}
date()

var inputValue;
function call(){
    var search = document.getElementById("searchinput");
    inputValue=search.value?search.value:"vadodara"
    search.value=""

    let place=document.getElementById("location");
    place.innerHTML=inputValue
    const options = {
        method: 'GET',
    
        headers: { 'X-Api-Key': 'GQnaq0N3uccIGFLmJLB4Qw==8RFDHjQWwbipdMuI' },
        contentType: 'application/json'
    };
    fetch(`https://api.api-ninjas.com/v1/weather?city=${inputValue}`, options).then(Response => Response.json())
        .then((response) => {
            console.log(response)
    
      
            // cloud_pct.innerHtml = response.cloud_pct
            // temp.innerHtml = response.temp
            // feels_like.innerHtml = response.feels_like
            // humidity.innerHtml = response.humidity
            // min_temp.innerHtml = response.min_temp
            // max_temp.innerHtml = response.max_temp
            // wind_degrees.innerHtml = response.wind_degrees
            // sunset.innerHtml = response.sunset
            // sunrise.innerHtml = response.sunrise
            console.log(response.wind_speed)
    
            var wind_speed = document.getElementById("wind_speed");
            wind_speed.innerHTML = `${response.wind_speed} km/h`
            var humi=document.getElementById("hum")
            humi.innerHTML=`${response.humidity} %`
            var cel=document.getElementById("celsius")
            cel.innerHTML=response.temp
            cloud_pct=response.cloud_pct
            var imag;
            var outside;
            var img=["sunny.png","cloudy.png","rainy.png"]
            if(cloud_pct>=86 && cloud_pct <=100){
                imag=img[2];
                outside="Rainy"
            }else if(cloud_pct>=70 && cloud_pct <=85){
                 imag=img[1]
                 outside="cloudy"

            }else{
                imag=img[0]
                outside="sunny"

            }
            var upsky=document.getElementById("sky")
            upsky.src=imag
            var cli=document.getElementById("climate")
            cli.innerHTML=outside;
    
        }).catch(err =>
            console.log(err));
}
call();
store=()=>{
    call();
}








