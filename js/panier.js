let cartSection                 = document.createElement('section');
let titleCart                   = document.createElement('h1')
    titleCart.textContent       = 'Mon panier';
let articleTable                = document.createElement('table');

document.querySelector('main').append(cartSection);
cartSection.append(titleCart);
cartSection.append(articleTable);

if (! localStorage.getItem('panier')) {
    alert('votre panier est vide');
} else {
    let panier = JSON.parse(localStorage.getItem('panier'));
    console.log(panier);
        let tableSectionArticle                     = document.createElement('th');
            tableSectionArticle.textContent         = 'Article';
        let tableSectionQuantity                    = document.createElement('th');
            tableSectionQuantity.textContent        = 'Quantité';
        let tableSectionPrice                       = document.createElement('th');
            tableSectionPrice.textContent           = 'Prix';
        articleTable.append(tableSectionArticle);
        articleTable.append(tableSectionQuantity);
        articleTable.append(tableSectionPrice);        

        let item = JSON.parse(localStorage.getItem('panier'));
            console.log(item); 


    panier.forEach(function affichagePanier(item) {
        let lineTable                               = document.createElement('tr');
        let tableListArticle                        = document.createElement('td');            
        let tableListQuantity                       = document.createElement('td');
        let tableListPrice                          = document.createElement('td');        

        tableListArticle.textContent            = item.nameProduct;      
        tableListQuantity.textContent           = item.quantity;
        tableListPrice.textContent              = item.quantity * item.price;


        articleTable.append(lineTable);
        lineTable.append(tableListArticle);
        lineTable.append(tableListQuantity);
        lineTable.append(tableListPrice);

        })
}

let buttonContinue = document.createElement('button');
    buttonContinue.type = "submit";
    buttonContinue.textContent = "Continuer mes achats";

document.querySelector('main').append(buttonContinue);


let customerInformation             = document.createElement('section');
    customerInformation.className = 'customer_information';
    document.querySelector('main').append(customerInformation);

let titleInformation                = document.createElement('h2');
    titleInformation.textContent    = 'Mes coordonnées';
    customerInformation.append(titleInformation);

let form                            = document.createElement('form');
    customerInformation.append(form);
let lastName                        = document.createElement('label');
    form.append(lastName);
    lastName.setAttribute('for', 'lastName');
    lastName.textContent            = ('Nom');
let lastNameInput                   = document.createElement('input');
    lastNameInput.id = ('lastname');
    lastNameInput.type = ('text');
    lastName.append(lastNameInput);

let nameLabel                       = document.createElement('label');
    form.append(nameLabel);
    nameLabel.setAttribute('for', 'nameLabel');
    nameLabel.textContent           = ('Prénom')
let nameInput                       = document.createElement('input');
    nameLabel.append(nameInput);
    nameInput.id = ('name');
    nameInput.type = ('text');
    sessionStorage.setItem

let adress                          = document.createElement('label');
    form.append(adress);
    adress.setAttribute('for', 'adress');
    adress.textContent              = ('Adresse');
let adressInput                     = document.createElement('input');
    adress.append(adressInput);
    adressInput.id = ('adress');
    adressInput.type = ('text');

let city                            = document.createElement('label');
    form.append(city);
    city.setAttribute('for', 'city');
    city.textContent                = ('Ville')
let cityInput                       = document.createElement('input');
    city.append(cityInput);
    cityInput.id = ('city')
    cityInput.type = ('text')

let mail                            = document.createElement('label');
    form.append(mail);
    mail.setAttribute('for', 'mail');
    mail.textContent                = ('Email');
let mailInput                       = document.createElement('input');
    mail.append(mailInput);
    mailInput.id = ('mail');
    mailInput.type = ('mail');

let commandButton                   = document.createElement('input');
    form.append(commandButton);
    commandButton.className = "commander";
    commandButton.type = 'button';
    commandButton.value = 'Commander';

    if (!localStorage.getItem('panier')) {
        commandButton.style.visibility = "hidden";
    }

    let objCommande= { lastNameInput, nameInput, adressInput, cityInput, mailInput};


    commandButton.onclick = function commande() {
        // sessionStorage.setItem('totalPrice', totalPrice);
        localStorage.setItem('adress', (adressInput.value + ' ' + cityInput.value));
        
        console.log('click ok');
        location.href = "../html/confirmation_commande.html";

        axios({
            method: 'post',
            url: 'http://localhost:3000/api/cameras/order',
            data: objCommande,
        })
        .then(function (reponse) { 
            sessionStorage.setItem('commande', reponse);
            console.log(reponse);
        })
        .catch(function (erreur) {
            console.log(erreur);
        });
alert(adressInput.value + cityInput.value);

    };