
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
                    document.getElementById("result").textContent= `Weather in ${city} is ${(data.main.temp-273.15).toFixed(2)} C`;
                }
            );
        

    }
