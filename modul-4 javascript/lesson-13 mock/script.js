const mainContainer = document.querySelector('.container')
const moreBtn = document.querySelector('.more-btn')
const description = document.querySelector('.description')

function fetchJobs() {
    fetch("https://www.arbeitnow.com/api/job-board-api")
        .then (res => res.json())
        .then (data => renderJobs(data)) 
        .catch (err => console.log(err))
}

function renderJobs(jobs) {
    // console.log(jobs)
    const fragment = document.createDocumentFragment()

    jobs.data.forEach(job => {
        const scriptContainer = document.createElement('div')
        scriptContainer.insertAdjacentHTML('afterbegin', `
            <div class="jobs-container">   
                <div class="job-row">
                    <div class="first-col">
                        <div class="developer">
                            <img class="job-type-img" src="./assets/star-ic.svg" alt="">
                            <p class="job-type-p">${job.title}</p>
                        </div>
                        <div class="company-name">
                            <img class="company-name-img" src="./assets/bag-icon.svg" alt="">
                            <p class="company-name-p">${job.company_name}</p>
                        </div>
                        <div class="job-location">
                            <img class="location-img" src="./assets/location-icon.svg" alt="">
                            <p class="location-p">${job.location}</p>
                        </div>
                    </div>

                    <div class="second-col">
                        <div class="job-type">
                            <p>Job Type: </p>
                            <b class="job-type-b">${job.job_types}</b>
                        </div>
                        <div class="tags">
                            <p>Tags: </p>
                            <b class="tags-b">${job.tags}</b>
                        </div>
                        <div class="date">
                            <p>Date: </p>
                            <b class="date-b">${job.created_at}</b>
                        </div>
                    </div>

                    <div class="third-col">
                        <button class="view-btn"> <a href="#"> <img src="./assets/eye-icon.svg" alt="">  View</a></button>
                        <button class="apply-btn"> <a href="#"> <img src="./assets/apply-icon.svg" alt="">  Apply</a></button>
                        </div>
                        
                        </div>
                        
                    <details class="description">
                        <summary class="more-btn">More</summary>  
                        <h2 class="decription-title">Description</h2>
                        ${job.description}
                    </details>
            </div>
        `)
        fragment.appendChild(scriptContainer)
    });
    mainContainer.appendChild(fragment)
}

// function renderDes(event) {
//     if (description.style.display === "none") {
//         event.target.style.display === "inline";
//     }

//     fetchJobs()
// }

fetchJobs()