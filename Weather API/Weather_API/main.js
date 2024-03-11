const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': 'e62f32092fmsh72b0b229d1722aep13801djsn0304d1204862',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    const weatherapp = (city) => {
    
        cityname.innerHTML = city
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
            .then( (response)=> {
                return response.json()
            }).then( (data) => {
                console.log(data)
                
                temp.innerHTML = data.temp + "°C";
                feels_like.innerHTML = data.feels_like + "°C";
                humidity.innerHTML = data.humidity;
                max_temp.innerHTML = data.max_temp + "°C";
                min_temp.innerHTML = data.min_temp + "°C";
                cloud_pct.innerHTML = data.cloud_pct;
                wind_speed.innerHTML = data.wind_speed + " km/h";
                wind_degrees.innerHTML = data.wind_degrees;

                sunrise.innerHTML = new Date(data.sunrise * 1000).toLocaleTimeString();
                sunset.innerHTML = new Date(data.sunset * 1000).toLocaleTimeString();
            })
    }
    
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        weatherapp(city.value)
    })
    
    weatherapp("pune")