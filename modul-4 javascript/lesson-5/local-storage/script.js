const form = document.getElementById('form1');
const formFileds = form.elements;

const submitBtn = document.querySelector('.btn')

// submitBtn.addEventListener('click', clearStorage)

// function clearStorage() {
//     localStorage.clear();
// }

for (let i = 0; i < formFileds.length; i++) {
    formFileds[i].addEventListener('change', changeHandler)
}

function changeHandler() {
     if(this.type !== 'checkbox'){
         console.log(this.name, this.value)
         localStorage.setItem(this.name, this.value)
     }else {
         console.log(this.name, this.checked);
         localStorage.setItem(this.name, this.checked)
     }
}



