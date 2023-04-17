function getWeather() {
  let city = document.getElementById("cityName").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=<Yor API Key>`;

 
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {

        // console.log(Math.floor(data.main.temp - 273.15));
        // console.log(data.weather[0].main);
        // console.log(data.weather[0].description);
        const icon = data.weather[0].icon;
        const imgURL = "https://openweathermap.org/img/wn/" + icon +"@2x.png";
        document.getElementById('wicon').setAttribute('src',imgURL);
        console.log(imgURL)
        document.getElementById('temp').innerHTML= `${Math.floor(data.main.temp - 273.15)}  °C`;
        document.getElementById('city').innerHTML = `${data.name}`;
        document.getElementById('humidity').innerHTML =`${data.main.humidity} %`;
        document.getElementById('wind').innerHTML =`${data.wind.speed} m/s`;
      })
      .catch(function (err) {
        console.log(err);
      });
  }



