let mainTitle = document.createElement('h1');
document.querySelector('main').append(mainTitle);

    let idcommande = sessionStorage.getItem('commande');
    mainTitle.textContent = 'Commande effectuée sous le numéro ' + idcommande + '.';

let recap = document.createElement('div');
    recap.textContent = 'La commande a bien été envoyée à l\'adresse suivante :';
    recap.style.textAlign = 'center';
let price = document.createElement('span');
    price.textContent = sessionStorage.getItem('totalPrice');
let adress = document.createElement('div');
    adress.textContent = new String (localStorage.getItem('adress'));

document.querySelector('main').append(recap);
recap.append(price);
recap.append(adress);



