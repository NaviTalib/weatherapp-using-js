
    function getWeather(){

        event.preventDefault();
        let city = document.getElementById('city').value

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1c9a12c1a14bd58da62327c21dfd80f0`;

        fetch(url)
            .then(
                function(res){
                  return   res.json();
        
            }
            ).then(
                function(data){
                    // console.log(data.main.temp-273.15);
                    // console.log(city);
                    // console.log(data.weather[0].description)
                    document.getElementById("cityname").textContent=`Weather in ${city.toUpperCase()}`;
                    document.getElementById("temp").textContent=`${((data.main.temp-273.15).toFixed(2))}°C`;
                    document.getElementById("description").textContent=`${data.weather[0].description}`;
                    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
                    document.getElementById("wind_speed").textContent= `Wind speed: ${data.wind.speed} m/s`;

                }
            );
        

    }
