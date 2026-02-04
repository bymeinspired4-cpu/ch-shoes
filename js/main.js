/**
 * ============================================
 * CH SHOES - Application Principale
 * Gestion complète du site e-commerce
 * ============================================
 */

document.addEventListener('DOMContentLoaded', function() {
  
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
  const closeButtons = document.querySelectorAll('.close');

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
   * Ferme les modals au clic sur le bouton de fermeture
   */
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
   * Fonctionnalité de recherche avec validation
   */
  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      const searchInput = document.querySelector('.search-input');
      const query = searchInput.value.trim();
      if (query) {
        console.log('Recherche : ' + query);
        alert('Recherche pour : ' + query);
      }
    });
  }

  /**
   * Active la recherche au clic sur Entrée dans le champ
   */
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
        const h3 = produitContainer.querySelector('h3')?.textContent || 'Produit';
        const productId = h3.toLowerCase().replace(/\\s+/g, '-');
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
});

