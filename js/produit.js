    // Vérification de la bonne connexion à l'API
    fetch('http://localhost:3000/api/cameras')
    .then(res => {
      console.log('resolved', res)
    })

    .catch(err => {
      console.log('rejected', err)
  });

      // Récupération des données de l'API au format json + affichage
      fetch('http://localhost:3000/api/cameras') //fetch sur l'url de l'API
      .then(res => { // renvoie un premiere prommesse
          if (res.ok) {
              return res.json() // Si res ok, retourne un objet json
          } else {
              Promise.reject(res.status); // sinon, me retourne la cause de l'echec
          };
      })
      .then(data => { // si response ok, renvoie d'une seconde promesse
          console.log(data);
        
      }).catch((error) => {
          console.error(error);
      });

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
    let productOption                       = document.createElement('option');
        productOption.textContent           = "-- Sélectionnez une option --";  
        let productOption1                  = document.createElement('option');
            productOption1.textContent      = new String (sessionStorage.getItem('lenses1'));  
    let listQuantity                        = document.createElement('select');
        listQuantity.id                     = 'quantity';
    let productQuantity                     = document.createElement('option');
        productQuantity.textContent         = "-- Sélectionnez une quantité --";
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
    listOption.append(productOption);
        listOption.append(productOption1);
    listQuantity.append(productQuantity);
        listQuantity.append(productQuantity1);
        listQuantity.append(productQuantity2);
        listQuantity.append(productQuantity3);

    // Pour chaque lenses -> créer un productOption
    
    console.log(sessionStorage.getItem('lenses'));
    
    imgProduct.src = sessionStorage.getItem('imageURL');   // Récupération des données et insertion dans le bloc adéquat 
    imgProduct.alt = sessionStorage.getItem('nameProduct');
    nameProduct.textContent = sessionStorage.getItem('nameProduct');
    descriptionProduct.textContent = sessionStorage.getItem('descriptionProduct');
    priceProduct.textContent = sessionStorage.getItem('priceProduct') + " €";
  
    console.log(nameProduct);

    listOption.onmouseleave = () => {
        let optionSelected = listOption.value;
        console.log(optionSelected);
        sessionStorage.setItem('optionChoices', optionSelected);
    }

    listQuantity.onmouseleave = () => {
        let quantitySelected = listQuantity.value;
        console.log(quantitySelected);
        sessionStorage.setItem('quantity', quantitySelected);
    }


    let cartInfo = {'idProduct' : sessionStorage.getItem('idProduit'), 'nameProduct' : sessionStorage.getItem('nameProduct'), 'quantity' : sessionStorage.getItem('quantity'), 
                    'option' : sessionStorage.getItem('optionChoices'), 'price' : sessionStorage.getItem('priceProduct')};

    addCart.onclick = function addToCart() {
    console.log('click ok');
    
    function test() {
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
    }}
    test();
        

    alert("Produit ajouté au panier");
    location.href = "panier.html";
    };
  
  };

ficheProduit();

