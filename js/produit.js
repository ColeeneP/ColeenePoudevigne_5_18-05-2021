// fetch('http://localhost:3000/api/cameras')
// .then(res => {
//   return res.json()
// })
// .then(camera => {
//   ficheProduit(camera)
// })
// .catch(err => {
//   console.error('error import', err);
// })

const main = document.querySelector('main');

  function ficheProduit() {
    
    let presentationProduct                 = document.createElement('div');
        presentationProduct.className       = "product_presentation";
    let imgProduct                          = document.createElement('img');
        imgProduct.className                = "image_detail";
    let nameProduct                         = document.createElement('h1');
        nameProduct.className               = "product_title";
    let descriptionProduct                  = document.createElement('div');
        descriptionProduct.className        = "description";
    let priceProduct                        = document.createElement('span');
        priceProduct.className              = "price";
    let listOption                          = document.createElement('select');
        listOption.id                       = "optionArticle";

let arrayLenses = sessionStorage.getItem('lenses');
    arrayLenses = JSON.parse([arrayLenses]);
    console.log(arrayLenses);
arrayLenses.forEach(function(element) {
            let productOption              = document.createElement('option');
            productOption.textContent      = new String (element);  
            listOption.append(productOption);
})

    let listQuantity                        = document.createElement('select');
        listQuantity.id                     = 'quantity';
        let productQuantity1                = document.createElement('option');
            productQuantity1.textContent    = "1";
        let productQuantity2                = document.createElement('option');
            productQuantity2.textContent    = "2";
        let productQuantity3                = document.createElement('option');
            productQuantity3.textContent    = "3";
    let addCart                             = document.createElement('button');
        addCart.type                        = "submit";
        addCart.textContent                 = 'Ajouter au panier';   
  
    main.append(imgProduct);
    main.append(presentationProduct);
    presentationProduct.append(nameProduct);
    presentationProduct.append(descriptionProduct);
    presentationProduct.append(priceProduct);
    presentationProduct.append(listOption);
    presentationProduct.append(listQuantity);
    presentationProduct.append(addCart); 
    listQuantity.append(productQuantity1);
        listQuantity.append(productQuantity2);
        listQuantity.append(productQuantity3);
    
    imgProduct.src = sessionStorage.getItem('imageURL');   // Récupération des données et insertion dans le bloc adéquat 
    imgProduct.alt = sessionStorage.getItem('nameProduct');
    nameProduct.textContent = sessionStorage.getItem('nameProduct');
    descriptionProduct.textContent = sessionStorage.getItem('descriptionProduct');
    priceProduct.textContent = sessionStorage.getItem('priceProduct') + " €";
  
    console.log(nameProduct);

    addCart.onclick = function addToCart() {
    let cartInfo = {'idProduct' : sessionStorage.getItem('idProduit'), 'nameProduct' : sessionStorage.getItem('nameProduct'), 'quantity' : listQuantity.value, 
                    'option' : listOption.value, 'price' : sessionStorage.getItem('priceProduct')};

    console.log('click ok');

        function addToStorage() {
        let cartData = []; 
            if (! localStorage.getItem('panier')) {
                cartData.push(cartInfo);
                localStorage.setItem('panier', JSON.stringify(cartData)); 
                console.log(cartData);
            } 
            else {
            cartData = JSON.parse([localStorage.getItem('panier')]);  
            cartData.push(cartInfo);
            localStorage.setItem('panier', JSON.stringify(cartData));
            console.log(cartData);   
            } 
        }
        addToStorage();

    alert("Produit ajouté au panier");
    location.href = "panier.html";

    }};
ficheProduit()

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