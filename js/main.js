/**
 * ============================================
 * CH SHOES - Application Principale
 * Gestion complète du site e-commerce
 * ============================================
 */

// ========== CONFIGURATION ==========
const CONFIG = {
  whatsapp: {
    phoneNumber: '2250767225913', // Numéro WhatsApp pour les commandes (format international)
    message: 'Bonjour, je voudrais passer une commande'
  },
  delivery: {
    cost: 0, // Frais de livraison (0 = gratuit)
    freeThreshold: 0 // Montant minimum pour livraison gratuite
  }
};

// ========== INITIALISATION GLOBALE ==========
// Panier global accessible partout
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
  
  // ========== INITIALISATION DU PANIER ==========
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // ========== LOADER AU CHARGEMENT ==========
  /**
   * Affiche un loader au premier chargement de la page
   * Utilise sessionStorage pour ne l'afficher qu'une fois par session
   */
  const pageLoader = document.getElementById('page-loader');
  if (pageLoader && !sessionStorage.getItem('loaderShown')) {
    pageLoader.classList.add('active');
    setTimeout(() => {
      pageLoader.classList.remove('active');
      sessionStorage.setItem('loaderShown', 'true');
    }, 2000);
  }

  // ========== DÉTECTION PAGE ACTIVE ==========
  /**
   * Détecte la page actuelle et met en surbrillance le lien de navigation correspondant
   * Comparaison basée sur le nom du fichier HTML
   */
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('data-page');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  // ========== LOADER SUR NAVIGATION ==========
  /**
   * Affiche le loader lors du clic sur les liens de navigation
   * Transition de 1500ms avant de changer de page
   */
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetUrl = this.getAttribute('href');
      
      if (pageLoader) {
        pageLoader.classList.add('active');
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 1500);
      } else {
        window.location.href = targetUrl;
      }
    });
  });

  // ========== GESTION DES MODALS ==========
  const modalLinks = document.querySelectorAll('[data-modal]');

  /**
   * Ouvre les modals au clic sur les liens avec data-modal
   */
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

  /**
   * Ferme les modals au clic sur le bouton de fermeture - Event Delegation
   */
  document.addEventListener('click', function(e) {
    const closeButton = e.target.closest('.close');
    if (closeButton) {
      e.preventDefault();
      e.stopPropagation();
      const modalId = closeButton.getAttribute('data-modal') + '-modal';
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('active');
      }
    }
  });

  /**
   * Ferme les modals en cliquant en dehors
   */
  window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal') && e.target.classList.contains('active')) {
      e.target.classList.remove('active');
    }
  });

  /**
   * Ferme les modals en cliquant en dehors du contenu (sur l'overlay)
   */
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.classList.remove('active');
    }
  });

  // ========== RECHERCHE ==========
  /**
   * Fonctionnalité de recherche avec filtrage des produits
   */
  const searchBtn = document.querySelector('.search-btn');
  const searchInputField = document.getElementById('search-input-field') || document.querySelector('.search-input');
  
  function performSearch(query) {
    const searchModal = document.getElementById('search-modal');
    const searchResults = document.getElementById('search-results') || searchModal?.querySelector('.modal-body');
    
    if (!searchResults) return;
    
    // Récupérer tous les produits de la page
    const allProducts = document.querySelectorAll('.produit');
    const query_lower = query.toLowerCase();
    const results = [];
    
    // Parcourir les produits et filtrer selon la recherche
    allProducts.forEach(product => {
      const productName = product.querySelector('h3');
      const productPrice = product.querySelector('p');
      
      if (productName) {
        const name = productName.textContent.toLowerCase();
        const price = productPrice ? productPrice.textContent.toLowerCase() : '';
        if (name.includes(query_lower) || price.includes(query_lower)) {
          results.push({
            name: productName.textContent,
            price: productPrice ? productPrice.textContent : 'N/A',
            element: product
          });
        }
      }
    });
    
    // Afficher les résultats dans la modale
    if (results.length > 0) {
      let html = `<div style="padding: 20px;"><p style="margin: 0 0 20px 0; font-size: 13px; color: #666;"><strong>${results.length}</strong> résultat(s) trouvé(s)</p>`;
      results.forEach(result => {
        html += `<div style="padding: 12px; border-bottom: 1px solid #eee; cursor: pointer; transition: all 0.2s; border-radius: 4px;" class="search-result-item" data-name="${result.name}" onmouseover="this.style.backgroundColor='#f9f9f9'" onmouseout="this.style.backgroundColor='transparent'">
          <p style="font-weight: 600; margin: 0 0 3px 0; font-size: 13px;">${result.name}</p>
          <p style="margin: 0; color: #999; font-size: 12px;">${result.price}</p>
        </div>`;
      });
      html += '</div>';
      searchResults.innerHTML = html;
      
      // Ajouter des clics sur les résultats pour scroller vers le produit
      const resultItems = searchResults.querySelectorAll('.search-result-item');
      resultItems.forEach(item => {
        item.addEventListener('click', function() {
          const productName = this.getAttribute('data-name');
          const productElement = Array.from(allProducts).find(p => 
            p.querySelector('h3')?.textContent === productName
          );
          if (productElement) {
            const eyeLink = productElement.querySelector('.product-icons a[href^="produit.html?id="]');
            if (eyeLink) {
              window.location.href = eyeLink.getAttribute('href');
              return;
            }

            const quickviewBtn = productElement.querySelector('.quickview-btn[data-product-id]');
            const dataId = quickviewBtn?.getAttribute('data-product-id');
            if (dataId) {
              window.location.href = `produit.html?id=${dataId}`;
              return;
            }

            if (searchModal) searchModal.classList.remove('active');
            productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            productElement.style.boxShadow = '0 0 10px rgba(0,0,0,0.15)';
            setTimeout(() => {
              productElement.style.boxShadow = '';
            }, 1500);
            if (searchInputField) searchInputField.value = '';
          }
        });
      });
    } else {
      searchResults.innerHTML = `<div style="padding: 30px; text-align: center;"><p style="color: #999; margin: 0; font-size: 13px;">Aucun produit trouvé pour<br/><strong>"${query}"</strong></p></div>`;
    }
  }
  
  if (searchBtn && searchInputField) {
    searchBtn.addEventListener('click', function() {
      const query = searchInputField.value.trim();
      if (query) {
        performSearch(query);
      }
    });
    
    searchInputField.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const query = this.value.trim();
        if (query) {
          performSearch(query);
        }
      }
    });
  }

  // ========== NAVIGATION PRODUIT ==========
  // Harmonise les liens des icônes (quickview) vers produit.html?id=...
  const quickviewButtons = document.querySelectorAll('.quickview-btn[data-product-id]');
  quickviewButtons.forEach(button => {
    const productId = button.getAttribute('data-product-id');
    if (productId) {
      button.setAttribute('href', `produit.html?id=${productId}`);
      button.removeAttribute('onclick');
    }
  });

  // ========== FILTRES PANEL ==========
  const filterToggle = document.getElementById('filter-toggle');
  const filtersPanel = document.getElementById('filters-panel');
  const closeFilters = document.getElementById('close-filters');
  
  if (filterToggle && filtersPanel) {
    filterToggle.addEventListener('click', () => {
      filtersPanel.classList.toggle('active');
    });
  }
  
  if (closeFilters && filtersPanel) {
    closeFilters.addEventListener('click', () => {
      filtersPanel.classList.remove('active');
    });
  }
  
  // Price range slider
  const priceMin = document.getElementById('price-min');
  const priceMax = document.getElementById('price-max');
  const priceText = document.getElementById('price-text');
  const filterButton = document.querySelector('.filter-btn');
  const categoryFilters = document.querySelectorAll('.category-filter');
  const productCount = document.getElementById('product-count');
  
  function updatePriceDisplay() {
    let min = parseInt(priceMin?.value) || 0;
    let max = parseInt(priceMax?.value) || 50000;
    if (min > max) {
      [min, max] = [max, min];
      if (priceMin) priceMin.value = String(min);
      if (priceMax) priceMax.value = String(max);
    }
    if (priceText) {
      priceText.textContent = min.toLocaleString('fr-FR') + ' CFA — ' + max.toLocaleString('fr-FR') + ' CFA';
    }
  }

  function normalizeText(value) {
    return (value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function parsePrice(text) {
    if (!text) return 0;
    const digits = text.replace(/[^0-9]/g, '');
    return digits ? parseInt(digits, 10) : 0;
  }

  function applyFilters() {
    const products = document.querySelectorAll('.produit');
    if (!products.length) return;

    let min = parseInt(priceMin?.value) || 0;
    let max = parseInt(priceMax?.value) || 50000;
    if (min > max) {
      [min, max] = [max, min];
    }
    const selectedCategories = Array.from(categoryFilters)
      .filter(input => input.checked)
      .map(input => normalizeText(input.value));

    let visibleCount = 0;

    products.forEach(product => {
      const name = normalizeText(product.querySelector('h3')?.textContent);
      const priceTextValue = product.querySelector('p')?.textContent || '';
      const price = parsePrice(priceTextValue);

      const eyeLink = product.querySelector('.product-icons a[href*="produit.html?id="]');
      const productId = normalizeText(eyeLink?.getAttribute('href')?.split('id=')[1]);
      const quickviewBtn = product.querySelector('.quickview-btn[data-product-id]');
      const quickviewId = normalizeText(quickviewBtn?.getAttribute('data-product-id'));
      const searchable = [name, productId, quickviewId].filter(Boolean).join(' ');

      const matchesPrice = price >= min && price <= max;
      const matchesCategory = selectedCategories.length === 0
        ? true
        : selectedCategories.some(cat => searchable.includes(cat));

      const isVisible = matchesPrice && matchesCategory;
      product.style.display = isVisible ? '' : 'none';
      if (isVisible) visibleCount += 1;
    });

    if (productCount) {
      productCount.textContent = `Afficher 1-${visibleCount} sur ${products.length} résultats`;
    }
  }
  
  if (priceMin) priceMin.addEventListener('input', () => {
    updatePriceDisplay();
    applyFilters();
  });
  if (priceMax) priceMax.addEventListener('input', () => {
    updatePriceDisplay();
    applyFilters();
  });
  if (priceMin) priceMin.addEventListener('change', applyFilters);
  if (priceMax) priceMax.addEventListener('change', applyFilters);
  if (filterButton) filterButton.addEventListener('click', applyFilters);
  if (categoryFilters.length) {
    categoryFilters.forEach(input => input.addEventListener('change', applyFilters));
  }
  
  // Toggle filter groups
  window.toggleFilterGroup = function(element) {
    const content = element.nextElementSibling;
    if (content && content.classList.contains('filter-content')) {
      content.style.display = content.style.display === 'none' ? 'flex' : 'none';
      element.classList.toggle('collapsed');
    }
  };

  // Gestion des onglets du formulaire de profil
  // ========== FORMULAIRES PROFIL ==========
  /**
   * Gestion des onglets de connexion/inscription
   * Bascule entre les deux vues du modal profil
   */
  const profileTabBtns = document.querySelectorAll('.profile-tab-btn');
  const profileTabContents = document.querySelectorAll('.profile-tab-content');

  profileTabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');
      
      profileTabBtns.forEach(b => b.classList.remove('active'));
      profileTabContents.forEach(content => content.classList.remove('active'));
      
      this.classList.add('active');
      document.getElementById(tabName + '-tab').classList.add('active');
    });
  });

  // ========== FORMULAIRE CONNEXION ==========
  /**
   * Gestion de la soumission du formulaire de connexion
   * Sauvegarde les données dans localStorage
   */
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      
      localStorage.setItem('user', JSON.stringify({
        email: email,
        loggedIn: true
      }));
      
      alert('Connexion réussie !');
      document.getElementById('profile-modal').classList.remove('active');
      loginForm.reset();
    });
  }

  // ========== FORMULAIRE INSCRIPTION ==========
  /**
   * Gestion de la soumission du formulaire d'inscription
   * Vérifie les mots de passe et la longueur minimale
   */
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
    const cartFooter = document.querySelector('#cart-modal .cart-footer');
    
    if (modalBody) {
      if (cart.length === 0) {
        modalBody.innerHTML = '<p>Votre panier est vide</p>';
        if (cartFooter) cartFooter.style.display = 'none';
      } else {
        let html = '<ul style="list-style: none; padding: 0;">';
        cart.forEach((item, index) => {
          const itemImage = item.image || 'image/unnamed.jpg';
          html += `
            <li style="padding: 15px 0; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
              <div style="display: flex; gap: 15px; align-items: center; flex: 1;">
                <img src="${itemImage}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: contain; border-radius: 5px; background: #f5f5f5;" onerror="this.src='image/unnamed.jpg'">
                <div style="flex: 1;">
                  <div style="font-weight: 600; margin-bottom: 5px;">${item.name}</div>
                  <div style="font-size: 14px; color: #666;">
                    ${item.price} × ${item.quantity || 1}
                  </div>
                </div>
              </div>
              <div style="display: flex; gap: 10px; align-items: center;">
                <div style="display: flex; gap: 5px; align-items: center;">
                  <button onclick="decreaseQuantity(${index})" style="background: #f0f0f0; border: none; padding: 5px 10px; cursor: pointer; border-radius: 3px; font-weight: bold;">-</button>
                  <span style="min-width: 30px; text-align: center; font-weight: 600;">${item.quantity || 1}</span>
                  <button onclick="increaseQuantity(${index})" style="background: #f0f0f0; border: none; padding: 5px 10px; cursor: pointer; border-radius: 3px; font-weight: bold;">+</button>
                </div>
                <button onclick="removeFromCart(${index})" style="background: #ff6b6b; color: white; border: none; padding: 8px 12px; cursor: pointer; border-radius: 3px;">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>
          `;
        });
        html += '</ul>';
        modalBody.innerHTML = html;
        
        // Afficher le footer avec le total
        if (cartFooter) {
          cartFooter.style.display = 'block';
          updateCartTotal();
        }
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

  // Augmenter la quantité d'un article
  window.increaseQuantity = function(index) {
    if (cart[index]) {
      cart[index].quantity = (cart[index].quantity || 1) + 1;
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartModal();
    }
  };

  // Diminuer la quantité d'un article
  window.decreaseQuantity = function(index) {
    if (cart[index]) {
      if ((cart[index].quantity || 1) > 1) {
        cart[index].quantity = (cart[index].quantity || 1) - 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartModal();
      } else {
        // Si la quantité est 1, supprimer l'article
        removeFromCart(index);
      }
    }
  };

  // Mettre à jour le total du panier
  function updateCartTotal() {
    const totalElement = document.getElementById('cart-total-amount');
    if (totalElement) {
      let total = 0;
      cart.forEach(item => {
        const price = parsePrice(item.price);
        total += price * (item.quantity || 1);
      });
      totalElement.textContent = total.toLocaleString('fr-FR') + ' FCFA';
    }
  }

  // Fonction globale pour passer commande
  window.checkout = function() {
    alert('Fonction de commande à venir ! Total: ' + cart.length + ' articles');
  };

  // Ajouter au panier depuis n'importe quelle page - Event Delegation
  document.addEventListener('click', function(e) {
    const button = e.target.closest('.btn-ajouter-panier');
    if (!button) return;
    
    e.preventDefault();
    let name, price, image;
    
    // Cas 1: Page produit.html avec .produit-detail-info
    const detailInfo = button.closest('.produit-detail-info');
    if (detailInfo) {
      name = detailInfo.querySelector('#product-name')?.textContent || detailInfo.querySelector('h1')?.textContent || 'Produit';
      price = detailInfo.querySelector('#product-price')?.textContent || detailInfo.querySelector('.produit-detail-price')?.textContent || '0 FCFA';
      const imgElement = document.querySelector('#product-img');
      image = imgElement?.src || '';
    } 
    // Cas 2: Quickview modal
    else if (button.closest('.quickview-info')) {
      const quickviewInfo = button.closest('.quickview-info');
      name = quickviewInfo.querySelector('.quickview-title')?.textContent || 'Produit';
      price = quickviewInfo.querySelector('.quickview-price')?.textContent || '0 FCFA';
      const quickviewImg = document.querySelector('.quickview-main-img');
      image = quickviewImg?.src || '';
    }
    // Cas 3: Modal panier (pour les changements de quantité)
    else {
      return;
    }
    
    if (!name) return;
    
    // Vérifier si le produit existe déjà dans le panier
    const existingItemIndex = cart.findIndex(item => item.name === name);
    
    if (existingItemIndex > -1) {
      // Augmenter la quantité si le produit existe déjà
      cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + 1;
    } else {
      // Ajouter un nouveau produit
      const cartItem = {
        name: name,
        price: price,
        image: image,
        quantity: 1,
        id: Date.now()
      };
      cart.push(cartItem);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartModal();
    
    // Animation feedback
    button.textContent = '✓ Ajouté';
    button.style.background = '#28a745';
    setTimeout(() => {
      button.textContent = 'Ajouter au panier';
      button.style.background = '';
    }, 2000);
  });

  // Animation des sections au défilement
  // ========== ANIMATION HISTOIRE AU SCROLL ==========
  /**
   * Déclenche l'animation de la section histoire au scroll
   */
  window.addEventListener('scroll', function() {
    const historySection = document.querySelector('.history');
    if (!historySection) return;

    const rect = historySection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.8;

    if (isVisible) {
      const historyBg = document.querySelector('.history-background');
      const historyCard = document.querySelector('.history-card');
      
      if (historyBg && !historyBg.classList.contains('animate-in')) {
        historyBg.classList.add('animate-in');
      }
      if (historyCard && !historyCard.classList.contains('animate-in')) {
        historyCard.classList.add('animate-in');
      }
    }
  }, { passive: true });

  // ========== AUTRES SECTIONS ANIMÉES ==========
  /**
   * Anime les autres sections au scroll (nouveautés, collections)
   */
  const animatedSections = document.querySelectorAll('.nouveautes, .collections, .collections-title');
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    animatedSections.forEach(section => {
      section.classList.add('animate-on-scroll');
      sectionObserver.observe(section);
    });
  } else {
    animatedSections.forEach(section => {
      section.classList.add('animate-on-scroll');
      section.classList.add('animate-in');
    });
  }

  // ========== ANIMATIONS PRODUITS - TILT & RÉVÉLATION ==========
  /**
   * Crée un effet de tilt 3D au survol des images produits
   * - Les images pivotent selon la position de la souris
   * - Combiné avec un effet de brillance (shine)
   * - Respecte la préférence d'accessibilité prefers-reduced-motion
   * - Utilise IntersectionObserver pour activer les animations au scroll
   */
  const productCards = document.querySelectorAll('.produit');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (productCards.length > 0) {
    if ('IntersectionObserver' in window) {
      const productObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      productCards.forEach(card => productObserver.observe(card));
    } else {
      productCards.forEach(card => card.classList.add('is-visible'));
    }

    if (!reduceMotion) {
      productCards.forEach(card => {
        const image = card.querySelector('.product-image');
        if (!image) return;

        /**
         * Calcule l'angle de rotation selon la position de la souris
         * - rx: rotation X (basée sur la position Y)
         * - ry: rotation Y (basée sur la position X)
         * - mx, my: position du shine (effect de brillance)
         */
        const onMove = (e) => {
          const rect = image.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const rx = ((y / rect.height) - 0.5) * -8;
          const ry = ((x / rect.width) - 0.5) * 8;

          image.style.setProperty('--rx', `${rx}deg`);
          image.style.setProperty('--ry', `${ry}deg`);
          image.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
          image.style.setProperty('--my', `${(y / rect.height) * 100}%`);
        };

        /**
         * Réinitialise les transformations quand la souris quitte l'image
         */
        const onLeave = () => {
          image.style.setProperty('--rx', '0deg');
          image.style.setProperty('--ry', '0deg');
          image.style.setProperty('--mx', '50%');
          image.style.setProperty('--my', '50%');
        };

        card.addEventListener('mousemove', onMove);
        card.addEventListener('mouseleave', onLeave);
      });
    }
  }

  // ========== PARALLAX DOUX IMAGES COLLECTION ==========
  /**
   * Crée un effet de parallax léger sur les images des sections Nouveautés et Collections
   * - Les images bougent légèrement lors du scroll
   * - Décalage vertical proportionnel à la position dans la fenêtre
   * - Utilise requestAnimationFrame pour optimiser la performance
   * - Respecte prefers-reduced-motion pour l'accessibilité
   */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const parallaxItems = document.querySelectorAll(
    '.nouveautes img, .collection-card img'
  );
  parallaxItems.forEach(img => img.classList.add('parallax-img'));

  if (!prefersReducedMotion && parallaxItems.length > 0) {
    let ticking = false;

    /**
     * Met à jour le décalage parallax de chaque image
     * Basé sur la distance entre le centre de l'image et le centre de la fenêtre
     */
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

  // ========== GESTION DES FAVORIS ==========
  /**
   * Gère les produits favoris stockés dans localStorage
   * - Les favoris sont persistants entre les sessions
   * - L'icône cœur indique si un produit est en favoris
   * - Mise à jour du compteur et de la modale des favoris
   */
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  updateFavoritesCount();
  updateFavoritesModal();

  // ========== NAVIGATION VERS PAGE PRODUIT ==========
  /**
   * Affiche un loader avant de naviguer vers la page détail d'un produit
   * Crée un délai visuel pour améliorer la perception du chargement
   */
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

  /**
   * Clic sur l'image produit -> affiche loader puis ouvre la page détail
   * Crée un ID unique basé sur le titre du produit
   * Ne déclenche pas la navigation si clic sur les icônes (panier, cœur)
   */
  const productImages = document.querySelectorAll('.product-image');
  productImages.forEach(image => {
    image.addEventListener('click', function(e) {
      if (e.target.closest('.product-icons')) {
        return;
      }
      // Chercher le titre du produit pour créer l'ID
      const produitContainer = this.closest('.produit');
      if (produitContainer) {
        const linkedEye = produitContainer.querySelector('.product-icons a[href^="produit.html?id="]');
        if (linkedEye) {
          showLoaderAndNavigate(linkedEye.getAttribute('href'));
          return;
        }

        const quickviewBtn = produitContainer.querySelector('.quickview-btn[data-product-id]');
        const dataId = quickviewBtn?.getAttribute('data-product-id');
        if (dataId) {
          showLoaderAndNavigate(`produit.html?id=${dataId}`);
          return;
        }

        const h3 = produitContainer.querySelector('h3')?.textContent || 'Produit';
        const productId = h3
          .toLowerCase()
          .trim()
          .replace(/[’']/g, '')
          .replace(/\s+/g, '-');
        showLoaderAndNavigate('produit.html?id=' + productId);
      }
    });
  });

  // ========== QUICK VIEW - MODALE PRODUIT RAPIDE ==========
  /**
   * Système d'aperçu rapide (lightbox) pour les produits
   * - Affiche les images, titre, prix, description
   * - Navigation entre les images avec flèches
   * - Vignettes cliquables pour changer l'image
   * - Bouton "Voir détails" qui redirige vers la page produit
   */
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

  /**
   * Affiche l'image sélectionnée dans la modale Quick View
   * Met à jour les vignettes (thumbnails) pour montrer laquelle est active
   */
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

  // ========== CARROUSEL VIDÉOS HORIZONTAL ==========
  /**
   * Carrousel multi-cartes avec vidéo centrale active et côtés grisés
   * - Navigation au clic ou au clavier
   * - Auto-play tous les 6 secondes
   * - Pause au hover
   * - Adaptation responsive au redimensionnement
   */
  const carouselTrack = document.getElementById('carousel-track');
  const carouselPrev = document.getElementById('carousel-prev');
  const carouselNext = document.getElementById('carousel-next');
  const carouselDotsContainer = document.getElementById('carousel-dots');
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  
  if (carouselTrack) {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    let autoPlayInterval;

    /**
     * Crée les points de navigation sous le carrousel
     */
    items.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
      dot.addEventListener('click', () => goToSlide(index));
      carouselDotsContainer.appendChild(dot);
    });

    /**
     * Met à jour la position du carrousel et les classes actives
     * Centrage de l'item actif avec transformation CSS
     */
    function updateCarousel() {
      const activeItem = items[currentIndex];
      if (!activeItem || !carouselWrapper) return;

      const offset = activeItem.offsetLeft - (carouselWrapper.clientWidth - activeItem.clientWidth) / 2;
      carouselTrack.style.transform = `translateX(${-offset}px)`;

      items.forEach((item, index) => {
        item.classList.toggle('is-active', index === currentIndex);
      });
      
      document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = (index + items.length) % items.length;
      updateCarousel();
      resetAutoPlay();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    }

    function startAutoPlay() {
      autoPlayInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoPlay() {
      clearInterval(autoPlayInterval);
      startAutoPlay();
    }

    /**
     * Événements de navigation
     */
    carouselNext.addEventListener('click', () => {
      nextSlide();
      resetAutoPlay();
    });

    carouselPrev.addEventListener('click', () => {
      prevSlide();
      resetAutoPlay();
    });

    /**
     * Pause l'auto-play au survol, reprend quand la souris quitte
     */
    carouselTrack.addEventListener('mouseenter', () => {
      clearInterval(autoPlayInterval);
    });

    carouselTrack.addEventListener('mouseleave', () => {
      startAutoPlay();
    });

    /**
     * Navigation au clavier (flèches gauche/droite)
     */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
        resetAutoPlay();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
        resetAutoPlay();
      }
    });

    /**
     * Réajuste le carrousel lors du redimensionnement de la fenêtre
     */
    window.addEventListener('resize', updateCarousel);

    startAutoPlay();
    updateCarousel();
  }

  // ========== EFFET SCROLL CARROUSEL ==========
  /**
   * Réduit et assombrit le carrousel au défilement vers la section "Nos chaussures"
   * Crée un effet de "fermeture" avec scale et opacité progressifs
   * Ajoute un filtre gris au-dessus qui s'intensifie
   */
  const carouselSection = document.querySelector('.videos-carousel');
  const produitsSection = document.querySelector('.produits');
  const carouselFilterOverlay = document.querySelector('.carousel-filter-overlay');
  
  if (carouselSection && produitsSection) {
    let ticking = false;
    
    const handleCarouselScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const carouselRect = carouselSection.getBoundingClientRect();
          const produitsRect = produitsSection.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Démarrer l'effet seulement quand la section produits commence à entrer
          const startTrigger = windowHeight * 0.75;
          const endTrigger = windowHeight * 0.2;
          const scrollProgress = produitsRect.top >= startTrigger
            ? 0
            : Math.max(
                0,
                Math.min(1, (startTrigger - produitsRect.top) / (startTrigger - endTrigger))
              );
          
          // Réduire l'échelle et l'opacité du carrousel de manière plus visible
          const scale = 1 - (scrollProgress * 0.25); // Réduit jusqu'à 75%
          const opacity = 1 - (scrollProgress * 0.5); // Réduit l'opacité jusqu'à 50%
          const translateY = scrollProgress * -50; // Déplace vers le haut
          
          // Intensifier le filtre gris quand le carrousel se ferme
          const filterIntensity = scrollProgress * 0.85; // Filtre jusqu'à 85% d'opacité
          
          carouselSection.style.transform = `scale(${scale}) translateY(${translateY}px)`;
          carouselSection.style.opacity = opacity;
          
          if (carouselFilterOverlay) {
            if (scrollProgress === 0) {
              carouselFilterOverlay.style.background = 'rgba(50, 50, 50, 0)';
            } else {
              carouselFilterOverlay.style.background = `rgba(50, 50, 50, ${filterIntensity})`;
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleCarouselScroll, { passive: true });
    handleCarouselScroll(); // Initial call
  }

  // ========== SYSTÈME DE COMMANDE ==========
  /**
   * Ouvrir la modal de checkout avec le récapitulatif de la commande
   */
  window.openCheckout = function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
      alert('Votre panier est vide');
      return;
    }

    // Fermer la modal du panier
    document.getElementById('cart-modal').style.display = 'none';
    
    // Afficher la modal de checkout
    document.getElementById('checkout-modal').style.display = 'block';
    
    // Remplir le récapitulatif
    updateCheckoutSummary();
  };

  /**
   * Mettre à jour le récapitulatif de la commande
   */
  function updateCheckoutSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutItems = document.getElementById('checkout-items');
    
    if (!checkoutItems) return;
    
    let html = '<div class="checkout-items-list">';
    let total = 0;
    
    cart.forEach(item => {
      const price = parsePrice(item.price);
      const itemTotal = price * item.quantity;
      total += itemTotal;
      
      html += `
        <div class="checkout-item">
          <div class="checkout-item-info">
            <strong>${item.name}</strong>
            <span>Quantité: ${item.quantity}</span>
          </div>
          <div class="checkout-item-price">${itemTotal.toLocaleString('fr-FR')} FCFA</div>
        </div>
      `;
    });
    
    html += '</div>';
    checkoutItems.innerHTML = html;
    
    // Mettre à jour les totaux
    document.getElementById('checkout-subtotal').textContent = total.toLocaleString('fr-FR') + ' FCFA';
    document.getElementById('checkout-total').textContent = total.toLocaleString('fr-FR') + ' FCFA';
  }

  /**
   * Valider la commande
   */
  window.validateOrder = function() {
    const form = document.getElementById('checkout-form');
    
    // Vérifier que le formulaire est valide
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    
    // Récupérer les informations du formulaire
    const orderData = {
      customer: {
        name: document.getElementById('checkout-name').value,
        phone: document.getElementById('checkout-phone').value,
        email: document.getElementById('checkout-email').value,
        address: document.getElementById('checkout-address').value,
        city: document.getElementById('checkout-city').value,
        notes: document.getElementById('checkout-notes').value
      },
      items: JSON.parse(localStorage.getItem('cart')) || [],
      total: document.getElementById('checkout-total').textContent,
      date: new Date().toISOString(),
      status: 'pending'
    };
    
    // Sauvegarder la commande
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Créer le message WhatsApp
    const whatsappMessage = createWhatsAppMessage(orderData);
    
    // Vider le panier
    localStorage.setItem('cart', JSON.stringify([]));
    updateCartCount();
    updateCartModal();
    
    // Fermer la modal
    document.getElementById('checkout-modal').style.display = 'none';
    
    // Afficher confirmation
    alert('Commande enregistrée! Vous allez être redirigé vers WhatsApp pour confirmer votre commande.');
    
    // Rediriger vers WhatsApp
    window.open(whatsappMessage, '_blank');
    
    // Réinitialiser le formulaire
    form.reset();
  };

  /**
   * Créer le message WhatsApp pour la commande
   */
  /**
   * Créer le message WhatsApp pour la commande
   */
  function createWhatsAppMessage(orderData) {
    const phoneNumber = CONFIG.whatsapp.phoneNumber;
    
    let message = `🛍️ *NOUVELLE COMMANDE CH SHOES*\n\n`;
    message += `👤 *Client:* ${orderData.customer.name}\n`;
    message += `📱 *Téléphone:* ${orderData.customer.phone}\n`;
    if (orderData.customer.email) {
      message += `📧 *Email:* ${orderData.customer.email}\n`;
    }
    message += `📍 *Adresse:* ${orderData.customer.address}, ${orderData.customer.city}\n`;
    if (orderData.customer.notes) {
      message += `📝 *Instructions:* ${orderData.customer.notes}\n`;
    }
    message += `\n🛒 *PRODUITS:*\n`;
    
    orderData.items.forEach((item, index) => {
      const itemPrice = parsePrice(item.price);
      const itemTotal = itemPrice * (item.quantity || 1);
      message += `${index + 1}. ${item.name} x${item.quantity || 1} - ${itemTotal.toLocaleString('fr-FR')} FCFA\n`;
    });
    
    message += `\n💰 *TOTAL: ${orderData.total}*`;
    
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }

  /**
   * Mettre à jour l'affichage du total dans le panier
   */
  function updateCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartFooter = document.querySelector('.cart-footer');
    const totalElement = document.getElementById('cart-total-amount');
    
    if (cart.length > 0) {
      let total = 0;
      cart.forEach(item => {
        const price = parsePrice(item.price);
        total += price * item.quantity;
      });
      
      if (totalElement) {
        totalElement.textContent = total.toLocaleString('fr-FR') + ' FCFA';
      }
      
      if (cartFooter) {
        cartFooter.style.display = 'block';
      }
    } else {
      if (cartFooter) {
        cartFooter.style.display = 'none';
      }
    }
  }

  // Mettre à jour le total du panier à chaque fois qu'il change
  const originalUpdateCartModal = window.updateCartModal;
  window.updateCartModal = function() {
    if (originalUpdateCartModal) {
      originalUpdateCartModal();
    }
    updateCartTotal();
  };
});

