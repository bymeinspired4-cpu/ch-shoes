// Base de données des produits
const productsDatabase = {
  // Accueil - Produits phares
  'sandales-fermees': {
    name: 'Sandales fermées',
    price: '35 000 FCFA',
    collection: 'Sandales',
    image: 'image/unnamed.jpg',
    description: 'Découvrez nos magnifiques sandales fermées, conçues pour le confort et l\'élégance. Idéales pour le quotidien, elles offrent un soutien optimal tout en restant très stylées.',
    caracteristiques: [
      'Matière: Cuir premium',
      'Couleur: Disponible en plusieurs teintes',
      'Semelle: Confortable et durable',
      'Type: Sandales fermées',
      'Occasion: Quotidien, casual'
    ]
  },
  'sandales-ouvertes': {
    name: 'Sandales ouvertes',
    price: '30 000 FCFA',
    collection: 'Sandales',
    image: 'image/unnamed (1).jpg',
    description: 'Les sandales ouvertes de CH SHOES allient légèreté et sophistication. Parfaites pour les journées chaudes, elles vous offrent fraîcheur et style.',
    caracteristiques: [
      'Matière: Cuir pleine fleur',
      'Couleur: Disponible',
      'Design: Moderne et épuré',
      'Type: Sandales ouvertes',
      'Saison: Printemps/Été'
    ]
  },
  'talons': {
    name: 'Talons',
    price: '45 000 FCFA',
    collection: 'Talons',
    image: 'image/unnamed (2).jpg',
    description: 'Élégance et prestance avec nos talons d\'exception. Conçus pour sublimer votre silhouette, ils sont parfaits pour vos soirées et occasions spéciales.',
    caracteristiques: [
      'Matière: Cuir de qualité supérieure',
      'Hauteur talon: 8cm',
      'Couleur: Noir et autres teintes',
      'Type: Talons hauts',
      'Occasion: Soirée, événements'
    ]
  },
  'ballerine': {
    name: 'Ballerine',
    price: '25 000 FCFA',
    collection: 'Ballerines',
    image: 'image/ballerine.jpg',
    description: 'Nos ballerines offrent confort et élégance pour vos journées. Elles sont l\'accessoire indispensable pour un look casual chic et intemporel.',
    caracteristiques: [
      'Matière: Cuir souple',
      'Couleur: Multiple',
      'Semelle: Ultra confortable',
      'Type: Ballerines plates',
      'Occasion: Quotidien, all-day wear'
    ]
  },

  // Sandales catégorie
  'sandale-anneau-doree': {
    name: 'Sandale Anneau Dorée',
    price: '15 000 FCFA',
    collection: 'Sandales',
    image: 'image/anneau.jpg',
    description: 'Cette élégante sandale avec anneau doré est parfaite pour un style sophistiqué et intemporel. Confortable et durable, elle sera votre compagne de tous les jours.',
    caracteristiques: [
      'Matière: Cuir naturel',
      'Détail: Anneau doré',
      'Couleur: Doré',
      'Type: Sandale plate',
      'Occasion: Quotidien, semi-formel'
    ]
  },
  'sandale-bordeaux': {
    name: 'Sandale Fine Bordeaux',
    price: '12 000 FCFA',
    collection: 'Sandales',
    image: 'image/bordeaux.jpg',
    description: 'Une sandale fine et élégante en couleur bordeaux, parfaite pour ajouter une touche de sophistication à vos tenues.',
    caracteristiques: [
      'Matière: Cuir fin',
      'Couleur: Bordeaux',
      'Design: Délicat et aéré',
      'Type: Sandale fine',
      'Saison: Printemps/Été'
    ]
  },
  'sandale-tressees': {
    name: 'Sandale Tressée cuir',
    price: '15 000 FCFA',
    collection: 'Sandales',
    image: 'image/tressees cuir.jpg',
    description: 'Magnifique sandale tressée en cuir, alliant confort et élégance. Le tressage traditionnel en fait une pièce unique.',
    caracteristiques: [
      'Matière: Cuir tressé',
      'Technique: Tressage artisanal',
      'Couleur: Naturelle',
      'Type: Sandale tressée',
      'Occasion: Quotidien'
    ]
  },
  'sandale-vernie': {
    name: 'Sandale Vernie perle',
    price: '20 000 FCFA',
    collection: 'Sandales',
    image: 'image/vernies.jpg',
    description: 'Cette sandale vernie avec finition perle apporte une touche de glamour à vos pieds. Parfaite pour les occasions spéciales.',
    caracteristiques: [
      'Matière: Cuir verni',
      'Finition: Perle',
      'Couleur: Brillant',
      'Type: Sandale vernie',
      'Occasion: Soirée, événements'
    ]
  },

  // Talons catégorie
  'mule-noeud-rose': {
    name: 'Mule Noeud Rose Satin',
    price: '18 500 FCFA',
    collection: 'Talons',
    image: 'image/rose satin.jpg',
    description: 'Mule raffinée avec noeud en satin rose. Un incontournable pour vos tenues élégantes et féminines.',
    caracteristiques: [
      'Matière: Satin rose',
      'Détail: Noeud',
      'Hauteur talon: 7cm',
      'Type: Mule',
      'Occasion: Soirée, occasionnel'
    ]
  },
  'escarpin-noir': {
    name: 'Escarpin Bride Cheville Noir',
    price: '20 000 FCFA',
    collection: 'Talons',
    image: 'image/escarpin noir .jpg',
    description: 'Escarpin classique noir avec bride cheville. Un modèle intemporel pour tous vos looks formels et élégants.',
    caracteristiques: [
      'Matière: Cuir noir',
      'Détail: Bride cheville',
      'Hauteur talon: 8cm',
      'Type: Escarpin',
      'Occasion: Formel, soirée'
    ]
  },
  'talon-blanche-noeud': {
    name: 'Talon Blanc Noeud',
    price: '22 500 FCFA',
    collection: 'Talons',
    image: 'image/blanche noeud.jpg',
    description: 'Élégant talon blanc orné d\'un noeud. Parfait pour un mariage, une cérémonie ou une soirée spéciale.',
    caracteristiques: [
      'Matière: Cuir blanc',
      'Détail: Noeud décoratif',
      'Hauteur talon: 8.5cm',
      'Type: Escarpin talon',
      'Occasion: Mariage, cérémonie'
    ]
  },
  'talon-doree-strass': {
    name: 'Dorée Gold Strass',
    price: '25 000 FCFA',
    collection: 'Talons',
    image: 'image/doree strass.jpg',
    description: 'Un talon doré avec détails strass pour briller lors de vos occasions spéciales. Luxe et sophistication garantis.',
    caracteristiques: [
      'Matière: Cuir doré',
      'Détail: Strass et cristaux',
      'Hauteur talon: 9cm',
      'Type: Sandale talon',
      'Occasion: Gala, soirée'
    ]
  },
  'talon-menthe': {
    name: 'Lanières Menthe',
    price: '15 000 FCFA',
    collection: 'Talons',
    image: 'image/verte fine.jpg',
    description: 'Talon fin aux lanières menthe, offrant légèreté et confort. Une couleur tendance pour l\'été.',
    caracteristiques: [
      'Matière: Cuir menthe',
      'Design: Lanières',
      'Hauteur talon: 6cm',
      'Type: Sandale talon',
      'Saison: Printemps/Été'
    ]
  },

  // Ballerines catégorie
  'ballerine-olive-noeud': {
    name: 'L\'elegante Olive a Noeud',
    price: '18 000 FCFA',
    collection: 'Ballerines',
    image: 'image/olive a noeud.jpg',
    description: 'Une ballerine élégante de couleur olive avec un noeud raffiné. Parfaite pour vos tenues quotidiennes et vos occasions spéciales.',
    caracteristiques: [
      'Matière: Cuir olive',
      'Détail: Noeud',
      'Type: Ballerine plate',
      'Couleur: Olive',
      'Occasion: Quotidien, formel'
    ]
  },
  'ballerine-perle-blanche': {
    name: 'Perle Blanche de Jour',
    price: '15 000 FCFA',
    collection: 'Ballerines',
    image: 'image/perle blanche.jpg',
    description: 'Ballerine blanche avec finition perle, idéale pour un look lumineux et intemporel.',
    caracteristiques: [
      'Matière: Cuir blanc',
      'Finition: Perle',
      'Type: Ballerine plate',
      'Couleur: Blanc',
      'Occasion: Quotidien'
    ]
  },
  'ballerine-rose-pastel': {
    name: 'Douceur Rose Pastel',
    price: '15 000 FCFA',
    collection: 'Ballerines',
    image: 'image/rose pastel.jpg',
    description: 'Une ballerine douce et délicate en rose pastel. Confortable et élégante pour toutes les occasion.',
    caracteristiques: [
      'Matière: Cuir rose pastel',
      'Couleur: Rose pastel',
      'Type: Ballerine plate',
      'Confort: Optimal',
      'Saison: Printemps/Été'
    ]
  },
  'ballerine-nude-satin': {
    name: 'Classique Nude Satin',
    price: '15 000 FCFA',
    collection: 'Ballerines',
    image: 'image/nude satin.jpg',
    description: 'La ballerine nude satin, un classique indémodable qui allonge la jambe et se marie avec tout.',
    caracteristiques: [
      'Matière: Satin nude',
      'Couleur: Nude',
      'Type: Ballerine plate',
      'Style: Classique',
      'Occasion: Quotidien, soirée'
    ]
  },
  'ballerine-miroir-beige': {
    name: 'Miroir Beige Chic',
    price: '18 000 FCFA',
    collection: 'Ballerines',
    image: 'image/miroir beige .jpg',
    description: 'Une ballerine beige avec effet miroir pour un look sophistiqué et intemporel.',
    caracteristiques: [
      'Matière: Cuir beige',
      'Finition: Miroir',
      'Type: Ballerine plate',
      'Couleur: Beige',
      'Occasion: Quotidien, semi-formel'
    ]
  },
  'ballerine-fuschia': {
    name: 'Fuschia Royal a Boucle',
    price: '20 000 FCFA',
    collection: 'Ballerines',
    image: 'image/Fuschia Royal.jpg',
    description: 'Une ballerine fuschia audacieuse avec détail de boucle. Parfaite pour faire une déclaration de style.',
    caracteristiques: [
      'Matière: Cuir fuschia',
      'Détail: Boucle',
      'Type: Ballerine plate',
      'Couleur: Fuschia',
      'Occasion: Quotidien, occasions'
    ]
  }
};document.addEventListener('DOMContentLoaded', function() {
  // Récupérer l'ID du produit depuis l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (productId && productsDatabase[productId]) {
    const product = productsDatabase[productId];
    displayProduct(product, productId);
  } else {
    // Par défaut, afficher le premier produit
    const defaultProductId = 'sandales-fermees';
    const product = productsDatabase[defaultProductId];
    displayProduct(product, defaultProductId);
  }
});

function displayProduct(product, productId) {
  // Remplir les informations du produit
  document.getElementById('product-img').src = product.image;
  document.getElementById('product-img').alt = product.name;
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-collection').textContent = product.collection;
  document.getElementById('product-price').textContent = product.price;
  document.getElementById('product-description').textContent = product.description;

  // Remplir les caractéristiques
  const caracList = document.getElementById('product-caracteristiques');
  caracList.innerHTML = '';
  product.caracteristiques.forEach(carac => {
    const li = document.createElement('li');
    li.textContent = carac;
    caracList.appendChild(li);
  });

  // Vérifier si le produit est dans les favoris
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const btnFavoris = document.getElementById('btn-favoris');
  
  if (favorites.includes(product.name)) {
    btnFavoris.classList.add('favoris-actif');
    btnFavoris.innerHTML = '<i class="fa-solid fa-heart"></i> Ajouter aux favoris';
  }

  // Gérer le clic sur le bouton favoris
  btnFavoris.addEventListener('click', function() {
    if (favorites.includes(product.name)) {
      favorites = favorites.filter(fav => fav !== product.name);
      btnFavoris.classList.remove('favoris-actif');
      btnFavoris.innerHTML = '<i class="fa-regular fa-heart"></i> Ajouter aux favoris';
    } else {
      favorites.push(product.name);
      btnFavoris.classList.add('favoris-actif');
      btnFavoris.innerHTML = '<i class="fa-solid fa-heart"></i> Ajouter aux favoris';
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    updateFavoritesModal();
  });

  // Gérer le clic sur "Ajouter au panier"
  const btnPanier = document.querySelector('.btn-ajouter-panier');
  btnPanier.addEventListener('click', function() {
    alert('Produit ajouté au panier : ' + product.name + ' - ' + product.price);
    // Tu peux ajouter la logique du panier ici
  });
}

// Fonctions utilitaires (mêmes que dans main.js)
function updateFavoritesCount() {
  const countBadge = document.getElementById('favorites-count');
  if (countBadge) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    countBadge.textContent = favorites.length;
  }
}

function updateFavoritesModal() {
  const modalBody = document.querySelector('#favorites-modal .modal-body');
  if (modalBody) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.length === 0) {
      modalBody.innerHTML = '<p>Vous n\'avez pas encore de favoris</p>';
    } else {
      let html = '<ul style="list-style: none; padding: 0;">';
      favorites.forEach(fav => {
        html += '<li style="padding: 10px 0; border-bottom: 1px solid #eee;">' + fav + '</li>';
      });
      html += '</ul>';
      modalBody.innerHTML = html;
    }
  }
}
