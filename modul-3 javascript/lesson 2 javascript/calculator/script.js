const num1 = prompt('Birinchi sonni kiriting')
const num2 = prompt('Ikkinchi sonni kiriting')
const amal = prompt('Amalni kiriting')

switch (amal) {
    case '-':
        console.log (`${num1 - num2}`);
        break

    case '+':
        console.log (`${Number(num1) + Number(num2)}`);
        break

    case '/':
        console.log (`${num1 / num2}`);
        break
    
    case '*':
        console.log (`${num1 * num2}`);
        break
}