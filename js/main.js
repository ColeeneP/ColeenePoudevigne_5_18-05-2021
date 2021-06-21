      // Création des variables et constantes
      const main = document.querySelector('main');
      console.log(main);
      

      var productList = document.createElement('div');
      productList.className = "product_list";

      var myProduct;
      var imgProduct;
      var nameProduct;
      var descriptionProduct;
      var priceProduct;
      var idArticle;
      var myId;
      var presentationProduct;
      var selectedProduct;
      var linkProduct;  
    
    
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
        console.log(data)       
    }).catch((error) => {
        console.error(error);
    });

    function showArticles () {
        fetch('http://localhost:3000/api/cameras')
          .then(res => {
            return res.json()
          })
          .then(camera => {
            listeProduits(camera)
          })
          .catch(err => {
            console.error('error import', err);
          })
    }
    showArticles();

function listeProduits(camera) {
    var myCategory = document.createElement('h2');
    myCategory.className = "Numerique";
    myCategory.textContent = "Nos Caméras";
    main.append(myCategory);
    main.append(productList);

  camera.forEach(function(camera) {  // Fonction d'affichage de chaque élément contenu dans notre API
      myProduct = document.createElement('article');  // Création de la sémantique de la page
      myProduct.className = "product";
      imgProduct = document.createElement('img');
      imgProduct.className = "product_min";
      nameProduct = document.createElement('h3');
      nameProduct.className = "product_title";
      descriptionProduct = document.createElement('span');
      descriptionProduct.className = "description";
      priceProduct = document.createElement('span');
      priceProduct.className = "price";

      imgProduct.src = camera.imageUrl;   // Récupération des données et insertion dans le bloc adéquat 
      imgProduct.alt = camera.name;
      nameProduct.textContent = camera.name;
      descriptionProduct.textContent = camera.description;
      priceProduct.textContent = camera.price + " €";
      idArticle = camera._id;

      linkProduct = document.createElement('a');
      linkProduct.append(myProduct);
      
      productList.append(myProduct);
      myProduct.append(imgProduct);
      myProduct.append(nameProduct);
      myProduct.append(descriptionProduct);
      myProduct.append(priceProduct);   

      myProduct.onclick = function link(){ // Envoyer vers la page produit au clic
        console.log(camera._id);   // Récupération de l'id de l'article cliqué  
        sessionStorage.setItem('idProduit', camera._id);
        sessionStorage.setItem('nameProduct', camera.name);
        sessionStorage.setItem('descriptionProduct', camera.description);
        sessionStorage.setItem('priceProduct', camera.price);
        sessionStorage.setItem('imageURL', camera.imageUrl);
        sessionStorage.setItem('lenses1', camera.lenses[1]);
        location.href="../html/produit.html";
      }
  })
}

let numberArticle                 = document.createElement('div');
    numberArticle.className       = 'number';
let headerLink                    = document.getElementsByClassName('header_link').append(numberArticle);

    numberArticle.textContent = '1';
    if (numberArticle === '1') {
      numberArticle.style.visibility = "hidden";
    }
