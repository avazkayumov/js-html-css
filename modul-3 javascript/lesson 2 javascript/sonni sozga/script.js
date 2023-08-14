let num = prompt('Uch xonali son kiriting')

let yuzlik = num / 100;
yuzlik = parseInt(yuzlik)

let onlik = num / 10 
onlik = parseInt(onlik)
onlik = onlik % 10

let birlik = num % 10;
let natija = "" 

switch(yuzlik) {
    case 1:
        natija = 'bir yuz';
        break
    case 2:
        natija = 'ikki yuz'
        break
    case 3:
        natija = 'uch yuz';
        break
    case 4:
        natija = 'tort yuz';
        break
    case 5:
        natija = 'besh yuz';
        break
    case 6:
        natija = 'olti yuz';
        break
    case 7:
        natija = 'yetti yuz';
        break 
    case 8:
        natija = 'sakkiz yuz';
        break  
    case 9:
        natija = 'toqqiz yuz';
        break 
}


switch(onlik) {
    case 1:
        natija += ' on';
        break
    case 2:
        natija += ' yigirma'
        break
    case 3:
        natija += ' ottiz';
        break
    case 4:
        natija += ' qiriq';
        break
    case 5:
        natija += ' ellik';
        break
    case 6:
        natija += ' oltmish';
        break
    case 7:
        natija += ' yetmish';
        break 
    case 8:
        natija += ' sakson';
        break  
    case 9:
        natija += ' toqson';
        break 
}


switch(birlik) {
    case 1:
        natija += ' bir';
        break
    case 2:
        natija += ' ikki';
        break
    case 3:
        natija += ' uch';
        break
    case 4:
        natija += ' tort';
        break
    case 5:
        natija += ' besh';
        break
    case 6:
        natija += ' olti';
        break
    case 7:
        natija += ' yetti';
        break 
    case 8:
        natija += ' sakkiz';
        break  
    case 9:
        natija += ' toqqiz';
        break 
}

if (yuzlik === 0 && onlik === 0 && birlik === 0) {
    alert('nol')
}else {
    alert(natija)
}