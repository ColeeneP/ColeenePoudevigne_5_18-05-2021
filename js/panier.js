let cartSection                 = document.createElement('section');
let titleCart                   = document.createElement('h1')
    titleCart.textContent       = 'Mon panier';
let articleTable                = document.createElement('table');

document.querySelector('main').append(cartSection);
cartSection.append(titleCart);
cartSection.append(articleTable);

if (! localStorage.getItem('panier')) {
    alert('votre panier est vide');
    let buttonContinue = document.createElement('button');
    buttonContinue.textContent = "Continuer mes achats";

    buttonContinue.onclick = function continueShopping() {
        location.href = "../html/index.html";
    }

document.querySelector('main').append(buttonContinue);
} else {
    let panier = JSON.parse(localStorage.getItem('panier'));
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

let price = document.createElement('div');
let totalPrice = 0; 
JSON.parse(localStorage.getItem('panier')).forEach(items => {totalPrice += items.price * items.quantity });
price.textContent = 'Montant total de la commande : ' + totalPrice + ' €';
price.style.textAlign = 'center';
price.style.paddingTop = '40px';
document.querySelector('main').append(price);

let buttonContinue = document.createElement('button');
    buttonContinue.textContent = "Continuer mes achats";

    buttonContinue.onclick = function continueShopping() {
        location.href = "../html/index.html";
    }

document.querySelector('main').append(buttonContinue);

let customerInformation             = document.createElement('section');
    customerInformation.className = 'customer_information';
    document.querySelector('main').append(customerInformation);

let titleInformation                = document.createElement('h2');
    titleInformation.textContent    = 'Mes coordonnées';
    customerInformation.append(titleInformation);

let form                            = document.createElement('form');
    form.id                         = 'form';
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





    
    commandButton.onclick = function submitCommand() {


                let formValidation = document.getElementById('form');
                formValidation.addEventListener('submit', commandButton);
                // Validation du nom
                let lastNameValidation = document.getElementById('lastname').value;
                let lastNameRGEX = /^[a-zA-Z]{2,20}$/;
                let lastNameResult = lastNameRGEX.test(lastNameValidation);
                // Validation du prénom
                let nameValidation = document.getElementById('name').value;
                let nameRGEX = /^[a-zA-Z]{2,20}$/;
                let nameResult = nameRGEX.test(nameValidation);
                // Validation de l'adresse
                let adressValidation = document.getElementById('adress').value;
                console.log(adressValidation);
                let adressRGEX = /^(.){2,20}$/;
                let adressResult = adressRGEX.test(adressValidation);
                // Validation de la ville
                let cityValidation = document.getElementById('city').value;
                let cityRGEX = /^[a-zA-Z]{2,20}$/;
                let cityResult = cityRGEX.test(cityValidation);
                // Validation du mail
                let mailValidation = document.getElementById('mail').value;
                let mailRGEX = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
                let mailResult = mailRGEX.test(mailValidation)
        console.log(lastNameResult, nameResult, adressResult, cityResult, mailResult);

        if (lastNameResult && nameResult && adressResult && cityResult && mailResult) {
        localStorage.setItem('adress', (adressInput.value + ' ' + cityInput.value));
        localStorage.setItem('identite', (lastNameInput.value + ' ' + nameInput.value));
        console.log('click ok');
        location.href = "../html/confirmation_commande.html";

        let panier = JSON.parse(localStorage.getItem('panier'));
        let products = [];
            panier.forEach(element => {
                products.push(element.idProduct)
            });
        console.log(products);
        let contact = {
                    firstName: nameInput.value,
                    lastName: lastNameInput.value,
                    address: adressInput.value,
                    city: cityInput.value,
                    email: mailInput.value,
        };
        let contactCommande = JSON.stringify({contact, products});
        console.log(contactCommande);

        fetch('http://localhost:3000/api/cameras/order', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: contactCommande,
        })
        .then(response => {
            return response.json()
        })
        .then (data => { 
            console.log(data);
            localStorage.setItem('commande', data.orderId);
        })
        .catch (erreur => {
            console.log(erreur);
        }); 
        
        function getprice(){   // fonction de calcul du prix total
            totalPrice = 0 
            JSON.parse(localStorage.getItem('panier')).forEach((items)=>{   //boucle pour calculer le prix total en foction du nombre d'article et de la quantité de chacun 
                totalPrice += items.price*items.quantity/100
            })
            const total = document.createElement('div');   // affichage du prix total 
            orderPrice = document.createElement('p')
            orderPrice.textContent = totalPrice +'. 00 €'
        
            document.querySelector('main').append(total);
            total.appendChild(orderPrice)
            localStorage.setItem('totalPrice', orderPrice);
        }
        getprice()
        }


            else if (lastNameResult == false || nameResult == false || adressResult == false || cityResult == false || mailResult == false) {
                lastNameInput.style.backgroundColor = '#ff00005d';
            
            if (nameResult == false) {
                nameInput.style.backgroundColor = '#ff00005d';   
            }
            if (adressResult == false) {
                adressInput.style.backgroundColor = '#ff00005d';
            }
            if (cityResult == false) {
                cityInput.style.backgroundColor = '#ff00005d';
            }
            if (mailResult == false) {
                mailInput.style.backgroundColor = '#ff00005d';
            }
            }

        
        }

let numberArticle                 = document.createElement('div');
    numberArticle.className       = 'number';
let headerLink                    = document.getElementById('header_link');
headerLink.append(numberArticle);

let panier = JSON.parse(localStorage.getItem('panier'));
    if (! localStorage.getItem('panier')) {
      numberArticle.style.display = "none";
    }
    else {
      let article = 0;
      panier.forEach(element => {
        article += parseInt(element.quantity)}) 
        numberArticle.textContent = article;  
    };