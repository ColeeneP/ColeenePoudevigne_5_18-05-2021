let mainTitle = document.createElement('h1');
document.querySelector('main').append(mainTitle);

    fetch('http://localhost:3000/api/cameras/order')
.then(res => {
       return res.json()
})
.then(commande => {
    noCommande(commande)
})

function noCommande(commande) {
    let idcommande = commande.order;
    mainTitle.textContent = 'Commande effectuée sous le numéro ' + idcommande + '.';
}


let recap = document.createElement('div');
    recap.textContent = 'Récapitulatif de commande';
let price = document.createElement('span');
    price.textContent = sessionStorage.getItem('totalPrice');
let adress = document.createElement('div');
    adress.textContent = new String (localStorage.getItem('adress'));

document.querySelector('main').append(recap);
recap.append(price);
recap.append(adress);



