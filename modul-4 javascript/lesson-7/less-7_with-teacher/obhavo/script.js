let baseUrl = "https://api.openweathermap.org/data/2.5"
let apiKey = "f3d42f9ec85d91d233dc2cbe85c7e169"
let latLong = [41.3266638, 69.2282999]

fetch(`${baseUrl}/forecast?lat=${latLong[0]}&lon=${latLong[1]}&units=metric&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => render(data))
    .catch(err => alert(err));

function render(data) {
    console.log(data.list)
    let city = data.city.name

    document.body.insertAdjacentHTML("afterbegin", `<h1 class="city-name">${city}</h1>`)

    const container = document.createElement("div")
    container.classList.add("container")

    data.list.forEach((item) => {
        const div = document.createElement("div")
        div.classList.add("item")

        div.insertAdjacentHTML("afterbegin", `
            <h5>${item.dt_txt}</h5>
            <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" />
            <p><b>Max:</b> ${item.main.temp_max} °C</p>
            <p><b>Min:</b> ${item.main.temp_min} °C</p>
        `)
        container.appendChild(div)
    })

    document.body.appendChild(container)
}