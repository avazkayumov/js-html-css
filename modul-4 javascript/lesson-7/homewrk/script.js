let Api = "fee9548112180af518e0bdcac706588a";
let latLong = [41.3266638, 69.2282999]
// const baseUrl = "api.openweathermap.org/data/2.5/"

fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLong[0]}&lon=${latLong[1]}&units=metric&appid=${Api}`)
    .then((response) => response.json())
    .then((data) => render(data))
    // .catch(err => alert(err));

function render(data) {
    console.log(data)

    const container = document.createElement('div')
    container.classList.add("container")    
    document.body.appendChild(container)

    const cityName = data.city.name
    console.log(cityName)
    const changeCityName = cityName.slice(0,8)
    console.log(changeCityName)

    data.list.forEach(item => {
        const div = document.createElement('div')
        div.classList.add('item') 

        div.insertAdjacentHTML("afterbegin", `
        <div class="item">
            <div class="bg-img">
                <div class="city-name-temp">
                    <div class="temp">${item.main.temp} °</div>
                    <div class="name">${changeCityName}</div>
                </div>
                <p class = "wind-speed">Wind Speed: ${item.wind.speed}</p>
            </div>

            <div class="bottom-side">
                <p class= "data">${item.dt_txt}</p>
                <div class="description">
                    <div class="max-min-temp">
                        <b class = "main-weather">${item.weather[0].main}</b>
                        <b class = "max-min">${item.main.temp_max} ° / ${item.main.temp_min} °</b>
                    </div>
                    <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="">
                </div>
            </div>
        </div>
        
        `)
        container.appendChild(div)

    });
}