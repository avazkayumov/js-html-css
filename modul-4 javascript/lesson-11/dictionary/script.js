const inputDefinitions = document.querySelector(".input-definitions")
const inputSynonyms = document.querySelector(".input-synonyms")
const definitionUl = document.querySelector(".definition-ul")
const synonymsUl = document.querySelector('.synonyms-ul')


function fetchDefinition() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ff5598ce71mshcb511033617f842p10aeb9jsn9ffc37c40e7b',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${inputDefinitions.value}/definitions`,options)
        .then (res => res.json())
        .then (data => renderDefinition(data))
}

function renderDefinition(data) {

    data.definitions.forEach(({definition}) => {
        definitionUl.insertAdjacentHTML('afterbegin', `
            <li class="list">${definition}</li>
        `)
    
    });

    console.log(data)
}


function fetchSynonyms() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ff5598ce71mshcb511033617f842p10aeb9jsn9ffc37c40e7b',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${inputSynonyms.value}/synonyms`, options)
        .then (response => response.json())
        .then (result => renderSynonyms(result))
}

function renderSynonyms(result) {
    console.log(result)

    result.synonyms.forEach(synonym => {
        synonymsUl.insertAdjacentHTML('afterbegin', `
            <li class="list">${synonym}</li>
        `)
    })
}

function clearPage() {
    inputDefinitions.value = ''
    inputSynonyms.value = ''
    definitionUl.innerHTML = '' 
    synonymsUl.innerHTML = ''
}