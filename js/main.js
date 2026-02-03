// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  // Afficher le loader au chargement de la page
  const pageLoader = document.getElementById('page-loader');
  if (pageLoader && !sessionStorage.getItem('loaderShown')) {
    pageLoader.classList.add('active');
    
    setTimeout(() => {
      pageLoader.classList.remove('active');
      sessionStorage.setItem('loaderShown', 'true');
    }, 2000); // 2 secondes d'affichage
  }

  const modalLinks = document.querySelectorAll('[data-modal]');
  const closeButtons = document.querySelectorAll('.close');

  // Ouvrir les modals
  modalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = this.getAttribute('data-modal') + '-modal';
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
      }
    });
  });

  // Fermer les modals
  closeButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = this.getAttribute('data-modal') + '-modal';
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Fermer la modal en cliquant en dehors du contenu
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.classList.remove('active');
    }
  });

  // Fonctionnalité de recherche
  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      const searchInput = document.querySelector('.search-input');
      const query = searchInput.value.trim();
      if (query) {
        console.log('Recherche : ' + query);
        alert('Recherche pour : ' + query);
        // Tu peux ajouter ici la logique de recherche réelle
      }
    });
  }

  // Permettre la recherche avec Entrée
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const searchBtn = document.querySelector('.search-btn');
        searchBtn.click();
      }
    });
  }

  // Gestion des onglets du formulaire de profil
  const profileTabBtns = document.querySelectorAll('.profile-tab-btn');
  const profileTabContents = document.querySelectorAll('.profile-tab-content');

  profileTabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');
      
      // Enlever la classe active de tous les boutons et contenus
      profileTabBtns.forEach(b => b.classList.remove('active'));
      profileTabContents.forEach(content => content.classList.remove('active'));
      
      // Ajouter la classe active au bouton et contenu cliqué
      this.classList.add('active');
      document.getElementById(tabName + '-tab').classList.add('active');
    });
  });

  // Gestion du formulaire de connexion
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      
      // Sauvegarder dans localStorage
      localStorage.setItem('user', JSON.stringify({
        email: email,
        loggedIn: true
      }));
      
      alert('Connexion réussie !');
      document.getElementById('profile-modal').classList.remove('active');
      loginForm.reset();
    });
  }

  // Gestion du formulaire d'inscription
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('register-name').value;
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;
      const confirmPassword = document.getElementById('register-password-confirm').value;
      
      if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas !');
        return;
      }
      
      if (password.length < 8) {
        alert('Le mot de passe doit contenir au minimum 8 caractères !');
        return;
      }
      
      // Sauvegarder dans localStorage
      localStorage.setItem('user', JSON.stringify({
        name: name,
        email: email,
        loggedIn: true
      }));
      
      alert('Compte créé avec succès !');
      document.getElementById('profile-modal').classList.remove('active');
      registerForm.reset();
    });
  }

  // Gestion du panier
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartCount();
  updateCartModal();

  function updateCartCount() {
    const cartBadge = document.querySelector('.icon-link[data-modal="cart"] .badge');
    if (cartBadge) {
      cartBadge.textContent = cart.length;
    }
  }

  function updateCartModal() {
    const modalBody = document.querySelector('#cart-modal .modal-body');
    if (modalBody) {
      if (cart.length === 0) {
        modalBody.innerHTML = '<p>Votre panier est vide</p>';
      } else {
        let html = '<ul style="list-style: none; padding: 0;">';
        let total = 0;
        cart.forEach((item, index) => {
          html += `<li style="padding: 10px 0; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
            <span>${item.name} - ${item.price}</span>
            <button onclick="removeFromCart(${index})" style="background: #ff6b6b; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 3px;">
              <i class="fa-solid fa-trash"></i>
            </button>
          </li>`;
          total += parseFloat(item.price.replace(/[^0-9]/g, ''));
        });
        html += '</ul>';
        html += `<div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #000; font-weight: bold; font-size: 18px;">
          Total: ${total.toLocaleString()} FCFA
        </div>`;
        html += `<button onclick="checkout()" style="margin-top: 20px; width: 100%; background: #000; color: white; border: none; padding: 15px; cursor: pointer; font-size: 16px;">
          Commander
        </button>`;
        modalBody.innerHTML = html;
      }
    }
  }

  // Fonction globale pour supprimer un article du panier
  window.removeFromCart = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartModal();
  };

  // Fonction globale pour passer commande
  window.checkout = function() {
    alert('Fonction de commande à venir ! Total: ' + cart.length + ' articles');
  };

  // Ajouter au panier depuis n'importe quelle page
  const addToCartButtons = document.querySelectorAll('.btn-ajouter-panier');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productContainer = this.closest('.produit-detail-info') || this.closest('.produit');
      if (productContainer) {
        const name = productContainer.querySelector('h1, h3')?.textContent || 'Produit';
        const price = productContainer.querySelector('.produit-detail-price, p')?.textContent || '0 FCFA';
        
        const cartItem = {
          name: name,
          price: price,
          id: Date.now()
        };
        
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartModal();
        
        // Animation feedback
        this.textContent = '✓ Ajouté';
        this.style.background = '#28a745';
        setTimeout(() => {
          this.textContent = 'Ajouter au panier';
          this.style.background = '';
        }, 2000);
      }
    });
  });

  // Animation des sections au défilement
  const animatedSections = document.querySelectorAll('.nouveautes, .collections, .collections-title, .history');
  animatedSections.forEach(section => section.classList.add('animate-on-scroll'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Animation spéciale pour la section histoire
          if (entry.target.classList.contains('history')) {
            const historyBg = entry.target.querySelector('.history-background');
            const historyCard = entry.target.querySelector('.history-card');
            if (historyBg) historyBg.classList.add('animate-in');
            if (historyCard) historyCard.classList.add('animate-in');
          }
          
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    animatedSections.forEach(section => observer.observe(section));
  } else {
    animatedSections.forEach(section => section.classList.add('animate-in'));
  }

  // Parallax doux sur Nouveautés et Collections
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const parallaxItems = document.querySelectorAll(
    '.nouveautes img, .collection-card img'
  );
  parallaxItems.forEach(img => img.classList.add('parallax-img'));

  if (!prefersReducedMotion && parallaxItems.length > 0) {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const viewportCenter = window.innerHeight / 2;
          parallaxItems.forEach(img => {
            const rect = img.getBoundingClientRect();
            const imgCenter = rect.top + rect.height / 2;
            const offset = (imgCenter - viewportCenter) * 0.08;
            img.style.transform = `translateY(${offset}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Gestion des favoris
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  updateFavoritesCount();
  updateFavoritesModal();

  // Loader pour navigation vers produit (déjà défini en haut)
  
  function showLoaderAndNavigate(url) {
    if (pageLoader) {
      pageLoader.classList.add('active');
      setTimeout(() => {
        window.location.href = url;
      }, 2000); // 2 secondes de chargement
    } else {
      window.location.href = url;
    }
  }

  // Clic sur l'image produit -> afficher loader puis ouvrir la page détail
  const productImages = document.querySelectorAll('.product-image');
  productImages.forEach(image => {
    image.addEventListener('click', function(e) {
      if (e.target.closest('.product-icons')) {
        return;
      }
      // Chercher le titre du produit pour créer l'ID
      const produitContainer = this.closest('.produit');
      if (produitContainer) {
        const h3 = produitContainer.querySelector('h3')?.textContent || 'Produit';
        const productId = h3.toLowerCase().replace(/\\s+/g, '-');
        showLoaderAndNavigate('produit.html?id=' + productId);
      }
    });
  });

  // Quick view (popup) via l'icône eye
  const quickviewModal = document.getElementById('quickview-modal');
  const quickviewTitle = document.querySelector('.quickview-title');
  const quickviewPrice = document.querySelector('.quickview-price');
  const quickviewDescription = document.querySelector('.quickview-description');
  const quickviewMainImg = document.querySelector('.quickview-main-img');
  const quickviewThumbs = document.querySelector('.quickview-thumbs');
  const quickviewLink = document.querySelector('.quickview-link');
  const quickviewPrev = document.querySelector('.quickview-nav.prev');
  const quickviewNext = document.querySelector('.quickview-nav.next');

  let quickviewImages = [];
  let quickviewIndex = 0;

  function renderQuickviewImage(index) {
    if (!quickviewMainImg || !quickviewImages.length) return;
    quickviewIndex = (index + quickviewImages.length) % quickviewImages.length;
    quickviewMainImg.src = quickviewImages[quickviewIndex];
    quickviewMainImg.alt = quickviewTitle ? quickviewTitle.textContent : 'Produit';

    if (quickviewThumbs) {
      const thumbs = quickviewThumbs.querySelectorAll('button');
      thumbs.forEach((btn, i) => {
        if (i === quickviewIndex) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  }

  function openQuickview(product) {
    if (!quickviewModal) return;
    const imgEl = product.querySelector('.product-image img');
    const nameEl = product.querySelector('h3');
    const priceEl = product.querySelector('p');
    const eyeLink = product.querySelector('.product-icons a[href*="produit.html"]');

    const dataImages = product.getAttribute('data-images');
    quickviewImages = dataImages
      ? dataImages.split('|').map(src => src.trim()).filter(Boolean)
      : (imgEl ? [imgEl.getAttribute('src')] : []);

    if (quickviewTitle && nameEl) quickviewTitle.textContent = nameEl.textContent;
    if (quickviewPrice && priceEl) quickviewPrice.textContent = priceEl.textContent;
    if (quickviewDescription) {
      const desc = product.getAttribute('data-description') || ' ';
      quickviewDescription.textContent = desc;
    }
    if (quickviewLink && eyeLink) {
      const productUrl = eyeLink.getAttribute('href');
      quickviewLink.setAttribute('href', productUrl);
      quickviewLink.onclick = function(e) {
        e.preventDefault();
        quickviewModal.classList.remove('active');
        showLoaderAndNavigate(productUrl);
      };
    }

    if (quickviewThumbs) {
      quickviewThumbs.innerHTML = '';
      quickviewImages.forEach((src, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.innerHTML = `<img src="${src}" alt="Miniature">`;
        btn.addEventListener('click', () => renderQuickviewImage(i));
        quickviewThumbs.appendChild(btn);
      });
    }

    renderQuickviewImage(0);
    quickviewModal.classList.add('active');
  }

  const eyeIcons = document.querySelectorAll('.product-icons .fa-eye');
  eyeIcons.forEach(eye => {
    eye.parentElement.addEventListener('click', function(e) {
      e.preventDefault();
      const product = this.closest('.produit');
      if (product) {
        openQuickview(product);
      }
    });
  });

  if (quickviewPrev) {
    quickviewPrev.addEventListener('click', function() {
      renderQuickviewImage(quickviewIndex - 1);
    });
  }

  if (quickviewNext) {
    quickviewNext.addEventListener('click', function() {
      renderQuickviewImage(quickviewIndex + 1);
    });
  }

  // Écouter les clics sur les coeurs des produits
  const favoriteHearts = document.querySelectorAll('.product-icons .fa-heart');
  favoriteHearts.forEach((heart, index) => {
    heart.parentElement.addEventListener('click', function(e) {
      e.preventDefault();
      const productName = this.closest('.produit').querySelector('h3').textContent;
      const heart = this.querySelector('.fa-heart');
      
      if (favorites.includes(productName)) {
        favorites = favorites.filter(fav => fav !== productName);
        heart.classList.remove('fas');
        heart.classList.add('far');
      } else {
        favorites.push(productName);
        heart.classList.remove('far');
        heart.classList.add('fas');
      }
      
      localStorage.setItem('favorites', JSON.stringify(favorites));
      updateFavoritesCount();
      updateFavoritesModal();
    });
  });

  function updateFavoritesCount() {
    const countBadge = document.getElementById('favorites-count');
    if (countBadge) {
      countBadge.textContent = favorites.length;
    }
  }

  function updateFavoritesModal() {
    const modalBody = document.querySelector('#favorites-modal .modal-body');
    if (modalBody) {
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
});

