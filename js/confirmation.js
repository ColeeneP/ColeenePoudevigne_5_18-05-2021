let mainTitle = document.createElement('h1');
document.querySelector('main').append(mainTitle);

    let idCommande = localStorage.getItem('commande');
    mainTitle.textContent = 'Votre commande a bien été effectuée';

let recap = document.createElement('div');
    recap.textContent = 'Voici un résumé de votre commande';
    recap.style.textAlign = 'center';
let price = document.createElement('span');
    
    let totalPrice = 0; 
    JSON.parse(localStorage.getItem('panier')).forEach(items => {totalPrice += items.price * items.quantity });
    price.textContent = 'Montant total de la commande : ' + totalPrice + ' €'; console.log(totalPrice);

let identity = document.createElement('div');
    identity.textContent = 'Nom et prénom : ' + localStorage.getItem('identite');
let adress = document.createElement('div');
    adress.textContent = new String ('Adresse de livraison : ' + (localStorage.getItem('adress')));
let commandeId = document.createElement('div');
    commandeId.textContent = 'N° de commande : ' + idCommande;

document.querySelector('main').append(recap);

recap.append(identity);
recap.append(adress);
recap.append(commandeId);
recap.append(price);

sessionStorage.clear();
localStorage.clear();