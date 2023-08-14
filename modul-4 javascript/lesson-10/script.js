const myApi = "b8990c29e5480c1022707cbaa5a6871c"
const ApiKey = fetch(`http://api.mediastack.com/v1/news?access_key=${myApi}`)

async function fetchNews() {
    try {
        const res = await ApiKey
        const result = await res.json()
        renderNews(result)
       
    }
    catch(err) {
        console.error(err)
    }
    
    function renderNews(infos) {
        const mainContainer = document.querySelector(".main-container")
        const fragment = document.createDocumentFragment()
        
        
        infos.data.forEach(info => { 
            const infoBox = document.createElement("div")
            infoBox.classList.add("news-container")
            const date = new Date(info.published_at)
 
            infoBox.insertAdjacentHTML("beforeend", `
                    <div class="news__image-container">
                        <img class="image-container__img" onerror="fixImg(event)" src="${info.image}" alt="">
                    </div>
                    <div class="news__details">
                        <h3 class="news__title">${info.title}</h3>
                        <p class="news__paragraph">${info.description}</p>
                    </div>
                    <div class="news__footer">
                        <span class="news__author">${info.author || "unknown"}</span>
                        <span class="news__date">${date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDay()}</span>
                    </div>
            `)
            fragment.appendChild(infoBox)

        });
        
        mainContainer.appendChild(fragment)
        
    }
    
}

function fixImg(event) {
   event.target.src="https://thumbs.dreamstime.com/b/news-alerts-simple-text-banner-template-minimalistic-style-breaking-news-logo-tv-design-element-report-online-microphone-icon-news-143289675.jpg" 
}
fetchNews()