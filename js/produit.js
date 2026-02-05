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
  },

  // Oasis
  'sandale-massai': {
    name: 'Sandale Massai en Cuir',
    price: '15 000 FCFA',
    collection: 'Oasis',
    image: 'image/Massai en cuir.jpg',
    description: 'Sandale élégante inspirée de l\'artisanat Massai, en cuir premium.',
    caracteristiques: ['Matière: Cuir premium', 'Collection: Oasis', 'Type: Sandale', 'Occasion: Quotidien']
  },
  'sandale-afro-chic': {
    name: 'Sandale Afro-Chic',
    price: '15 000 FCFA',
    collection: 'Oasis',
    image: 'image/Afro-Chic.jpg',
    description: 'Sandale moderne avec touches africaines.',
    caracteristiques: ['Matière: Cuir', 'Collection: Oasis', 'Type: Sandale', 'Style: Afro-Chic']
  },
  'sandale-heritage': {
    name: 'Sandales Heritage',
    price: '15 000 FCFA',
    collection: 'Oasis',
    image: 'image/Heritage.jpg',
    description: 'Sandale Heritage, intemporelle et élégante.',
    caracteristiques: ['Matière: Cuir', 'Collection: Oasis', 'Type: Sandale', 'Style: Intemporel']
  },
  'sandale-reflet-culture': {
    name: 'Sandale Reflet de Culture',
    price: '15 000 FCFA',
    collection: 'Oasis',
    image: 'image/Refletdeculture.jpg',
    description: 'Sandale reflétant les valeurs culturelles.',
    caracteristiques: ['Matière: Cuir', 'Collection: Oasis', 'Type: Sandale', 'Design: Culturel']
  },
  'sandale-eclat-tropical': {
    name: 'Sandales Eclat Tropical',
    price: '15 000 FCFA',
    collection: 'Oasis',
    image: 'image/eclat tropical.jpg',
    description: 'Sandale aux couleurs tropicales éclatantes.',
    caracteristiques: ['Matière: Cuir', 'Collection: Oasis', 'Couleur: Tropicale', 'Saison: Printemps/Été']
  },
  'sandale-terre-evasion': {
    name: 'Sandale Terre-Evasion',
    price: '15 000 FCFA',
    collection: 'Oasis',
    image: 'image/terre d\'evasion.jpg',
    description: 'Sandale pour l\'évasion et l\'aventure.',
    caracteristiques: ['Matière: Cuir', 'Collection: Oasis', 'Type: Sandale', 'Style: Aventure']
  },
  'sandale-sillage-ancestral': {
    name: 'Sandale Sillage-Ancestral',
    price: '15 000 FCFA',
    collection: 'Oasis',
    image: 'image/sillage Ancestral.jpg',
    description: 'Sandale portant l\'héritage ancestral.',
    caracteristiques: ['Matière: Cuir', 'Collection: Oasis', 'Type: Sandale', 'Héritage: Ancestral']
  },
  'sandale-souffle-afrique': {
    name: 'Sandale Souffle-Afrique',
    price: '15 000 FCFA',
    collection: 'Oasis',
    image: 'image/Souffle d\'Afrique.jpg',
    description: 'Sandale respirant l\'essence de l\'Afrique.',
    caracteristiques: ['Matière: Cuir', 'Collection: Oasis', 'Type: Sandale', 'Essence: Africaine']
  },

  // Mosaïque
  'sandale-cauris-littoral': {
    name: 'Sandale Cauris Littoral',
    price: '15 000 FCFA',
    collection: 'Mosaïque',
    image: 'image/cauris du Litoral.jpg',
    description: 'Sandale inspirée des côtes littorales avec touches de cauris.',
    caracteristiques: ['Matière: Cuir', 'Collection: Mosaïque', 'Type: Sandale', 'Style: Littoral']
  },
  'sandale-perles-rivage': {
    name: 'Sandale Perles Du Rivage',
    price: '15 000 FCFA',
    collection: 'Mosaïque',
    image: 'image/perles du rivage.jpg',
    description: 'Sandale adorée avec perles inspirées du rivage.',
    caracteristiques: ['Matière: Cuir', 'Collection: Mosaïque', 'Type: Sandale', 'Détail: Perles']
  },
  'sandale-reflets-opaline': {
    name: 'Sandales Reflets d\'opaline',
    price: '15 000 FCFA',
    collection: 'Mosaïque',
    image: 'image/Reflets d\'Opaline.jpg',
    description: 'Sandale avec reflets opaline brillants.',
    caracteristiques: ['Matière: Cuir', 'Collection: Mosaïque', 'Type: Sandale', 'Finition: Opaline']
  },
  'sandale-eclats-ambre': {
    name: 'Sandale Eclats d\'Ambre',
    price: '15 000 FCFA',
    collection: 'Mosaïque',
    image: 'image/Eclat d\'Ambre.jpg',
    description: 'Sandale avec éclats d\'ambre chauds et lumineux.',
    caracteristiques: ['Matière: Cuir', 'Collection: Mosaïque', 'Type: Sandale', 'Couleur: Ambre']
  },
  'sandale-aube-doree': {
    name: 'Sandales Aube Doree',
    price: '15 000 FCFA',
    collection: 'Mosaïque',
    image: 'image/Aube Doree.jpg',
    description: 'Sandale aux teintes dorées de l\'aube.',
    caracteristiques: ['Matière: Cuir', 'Collection: Mosaïque', 'Type: Sandale', 'Couleur: Doré']
  },
  'sandale-rayon-corail': {
    name: 'Sandale Rayon de Corail',
    price: '15 000 FCFA',
    collection: 'Mosaïque',
    image: 'image/Rayon de corail.jpg',
    description: 'Sandale corail rappelant les rayons du soleil sur l\'océan.',
    caracteristiques: ['Matière: Cuir', 'Collection: Mosaïque', 'Type: Sandale', 'Couleur: Corail']
  },
  'sandale-passion-mandarine': {
    name: 'Sandale Passion mandarine',
    price: '15 000 FCFA',
    collection: 'Mosaïque',
    image: 'image/Passion Mandarine.jpg',
    description: 'Sandale orangée et passionnée aux teintes mandarine.',
    caracteristiques: ['Matière: Cuir', 'Collection: Mosaïque', 'Type: Sandale', 'Couleur: Mandarine']
  },
  'sandale-zenith-orange': {
    name: 'Sandale Zenith orange',
    price: '15 000 FCFA',
    collection: 'Mosaïque',
    image: 'image/Zenith orange.jpg',
    description: 'Sandale au zénith de la couleur orange vibrante.',
    caracteristiques: ['Matière: Cuir', 'Collection: Mosaïque', 'Type: Sandale', 'Couleur: Orange']
  },
  'sandale-flamme-corail': {
    name: 'Flamme de Corail',
    price: '15 000 FCFA',
    collection: 'Mosaïque',
    image: 'image/Flamme de Corail.jpg',
    description: 'Sandale flamboyante aux teintes corail incandescentes.',
    caracteristiques: ['Matière: Cuir', 'Collection: Mosaïque', 'Type: Sandale', 'Couleur: Corail']
  },

  // Princesse du Nil
  'sandale-tropicale': {
    name: 'Sandale Tropicale',
    price: '15 000 FCFA',
    collection: 'Princesse du Nil',
    image: 'image/Tropicale.jpg',
    description: 'Sandale tropicale évoquant les oasis du Nil.',
    caracteristiques: ['Matière: Cuir', 'Collection: Princesse du Nil', 'Type: Sandale', 'Style: Tropicale']
  },
  'sandale-sable-doree': {
    name: 'Sandale Sable Doree',
    price: '15 000 FCFA',
    collection: 'Princesse du Nil',
    image: 'image/Sable Doree.jpg',
    description: 'Sandale aux teintes dorées du sable du désert.',
    caracteristiques: ['Matière: Cuir', 'Collection: Princesse du Nil', 'Type: Sandale', 'Couleur: Doré']
  },
  'sandale-sahara-scintillant': {
    name: 'Sandale Sahara scintillant',
    price: '15 000 FCFA',
    collection: 'Princesse du Nil',
    image: 'image/Sahara Scintillant.jpg',
    description: 'Sandale scintillante évoquant le Sahara majestueux.',
    caracteristiques: ['Matière: Cuir', 'Collection: Princesse du Nil', 'Type: Sandale', 'Finition: Scintillante']
  },
  'sandale-perle-rosee': {
    name: 'Sandale Perle de Rosee',
    price: '15 000 FCFA',
    collection: 'Princesse du Nil',
    image: 'image/Perle de Rosee.jpg',
    description: 'Sandale blanche comme la perle de rosée.',
    caracteristiques: ['Matière: Cuir', 'Collection: Princesse du Nil', 'Type: Sandale', 'Couleur: Blanc']
  },
  'sandale-fleur-albatre': {
    name: 'Sandale Fleur d\'Albatre',
    price: '15 000 FCFA',
    collection: 'Princesse du Nil',
    image: 'image/Fleur d\'Albatre.jpg',
    description: 'Sandale délicate comme une fleur d\'albâtre.',
    caracteristiques: ['Matière: Cuir', 'Collection: Princesse du Nil', 'Type: Sandale', 'Couleur: Blanc']
  },
  'sandale-aurore-boreale': {
    name: 'Sandale Aurore Boreale',
    price: '15 000 FCFA',
    collection: 'Princesse du Nil',
    image: 'image/Aurore Boreale.jpg',
    description: 'Sandale multicolore comme une aurore boréale.',
    caracteristiques: ['Matière: Cuir', 'Collection: Princesse du Nil', 'Type: Sandale', 'Couleur: Multicolore']
  },
  'sandale-cristal-glace': {
    name: 'Sandale Cristal de Glace',
    price: '15 000 FCFA',
    collection: 'Princesse du Nil',
    image: 'image/Cristal de Glace.jpg',
    description: 'Sandale aux reflets de cristal de glace.',
    caracteristiques: ['Matière: Cuir', 'Collection: Princesse du Nil', 'Type: Sandale', 'Finition: Cristal']
  },
  'sandale-noeud-givre': {
    name: 'Sandale Noeud de Givre',
    price: '15 000 FCFA',
    collection: 'Princesse du Nil',
    image: 'image/Noeud de Givre.jpg',
    description: 'Sandale avec détail noeud givré et élégant.',
    caracteristiques: ['Matière: Cuir', 'Collection: Princesse du Nil', 'Type: Sandale', 'Détail: Noeud']
  },
  'sandale-jardin-dentelle': {
    name: 'Sandale Jardin de Dentelle',
    price: '15 000 FCFA',
    collection: 'Princesse du Nil',
    image: 'image/Jardin de Dentelle.jpg',
    description: 'Sandale ornée comme un jardin de dentelle.',
    caracteristiques: ['Matière: Cuir', 'Collection: Princesse du Nil', 'Type: Sandale', 'Détail: Dentelle']
  },

  // Ebène Nuit
  'sandale-perles-venus': {
    name: 'Sandale Perles de Venus',
    price: '45 000 FCFA',
    collection: 'Ebène Nuit',
    image: 'image/Perles de Venus.jpg',
    description: 'Sandale luxueuse adorée de perles de Vénus.',
    caracteristiques: ['Matière: Cuir premium', 'Collection: Ebène Nuit', 'Type: Sandale', 'Détail: Perles']
  },
  'sandale-ombre-nuit': {
    name: 'Sandale Ombre de nuit',
    price: '20 000 FCFA',
    collection: 'Ebène Nuit',
    image: 'image/Ombre de nuit.jpg',
    description: 'Sandale noire comme l\'ombre de la nuit.',
    caracteristiques: ['Matière: Cuir', 'Collection: Ebène Nuit', 'Type: Sandale', 'Couleur: Noir']
  },
  'sandale-flash-argentee': {
    name: 'Sandale Flash argentee',
    price: '25 000 FCFA',
    collection: 'Ebène Nuit',
    image: 'image/Flash Argentee.jpg',
    description: 'Sandale noire avec éclats argentés lumineux.',
    caracteristiques: ['Matière: Cuir', 'Collection: Ebène Nuit', 'Type: Sandale', 'Finition: Argentée']
  },
  'sandale-perle-rare': {
    name: 'Sandale Perle Rare',
    price: '15 000 FCFA',
    collection: 'Ebène Nuit',
    image: 'image/Perle Rare.jpg',
    description: 'Sandale rare comme une perle noire précieuse.',
    caracteristiques: ['Matière: Cuir', 'Collection: Ebène Nuit', 'Type: Sandale', 'Couleur: Noir']
  },
  'sandale-perle-minuit': {
    name: 'Sandale Perle de Minuit',
    price: '15 000 FCFA',
    collection: 'Ebène Nuit',
    image: 'image/Perle Minuit.jpg',
    description: 'Sandale adorée de perles à l\'heure de minuit.',
    caracteristiques: ['Matière: Cuir', 'Collection: Ebène Nuit', 'Type: Sandale', 'Détail: Perles']
  },
  'sandale-tresor-pharaon': {
    name: 'Sandale Tresor du Pharaon',
    price: '15 000 FCFA',
    collection: 'Ebène Nuit',
    image: 'image/Tresor Pharaon.jpg',
    description: 'Sandale luxueuse comme un trésor du pharaon.',
    caracteristiques: ['Matière: Cuir', 'Collection: Ebène Nuit', 'Type: Sandale', 'Style: Luxe']
  },
  'sandale-nuit-etoilee': {
    name: 'Sandale Nuit Etoilee',
    price: '15 000 FCFA',
    collection: 'Ebène Nuit',
    image: 'image/Nuit Etoilee.jpg',
    description: 'Sandale constellée comme une nuit étoilée.',
    caracteristiques: ['Matière: Cuir', 'Collection: Ebène Nuit', 'Type: Sandale', 'Finition: Étoilée']
  },
  'sandale-eclat-stellaire': {
    name: 'Sandale Eclat Stellaire',
    price: '15 000 FCFA',
    collection: 'Ebène Nuit',
    image: 'image/Eclat Stellaire.jpg',
    description: 'Sandale aux éclats stellaires et mystérieux.',
    caracteristiques: ['Matière: Cuir', 'Collection: Ebène Nuit', 'Type: Sandale', 'Finition: Stellaire']
  },
  // Nouveautés
  'fleurs-tulle': {
    name: 'Fleurs en tulle',
    price: '570 000 FCFA',
    collection: 'Nouveautés',
    image: 'image/fleurs en tulle.jpg',
    description: 'Magnifiques chaussures ornées de fleurs en tulle délicates et élégantes.',
    caracteristiques: ['Matière: Tulle et cuir', 'Couleur: Multicolore', 'Type: Chaussure de soirée', 'Occasion: Gala, mariage']
  },
  'white-teddy-platform': {
    name: 'White Teddy Platform',
    price: '18 000 FCFA',
    collection: 'Nouveautés',
    image: 'image/white Teddy .jpg',
    description: 'Plateforme blanche douce comme du teddy, confortable et tendance.',
    caracteristiques: ['Matière: Teddy blanc', 'Type: Plateforme', 'Hauteur: 5cm', 'Occasion: Casual, confortable']
  },
  'bridal-mrs-slippers': {
    name: 'Bridal Mrs Slippers',
    price: '10 000 FCFA',
    collection: 'Nouveautés',
    image: 'image/Bridal Mrs Slippers.jpg',
    description: 'Pantoufles de mariée élégantes et confortables pour un grand jour mémorable.',
    caracteristiques: ['Matière: Satin', 'Type: Pantoufles', 'Couleur: Blanc crème', 'Occasion: Mariage']
  },
  'soleil-dete': {
    name: 'Soleil D\'ete',
    price: '15 000 FCFA',
    collection: 'Nouveautés',
    image: 'image/Soleil d\'ete.jpg',
    description: 'Sandale lumineuse et colorée comme un soleil d\'été radieux.',
    caracteristiques: ['Matière: Cuir aéré', 'Type: Sandale d\'été', 'Couleur: Jaune/Or', 'Saison: Printemps/Été']
  },
  'pink-dahlia-pumps': {
    name: 'Pink Dahlia Pumps',
    price: '25 000 FCFA',
    collection: 'Nouveautés',
    image: 'image/Pink Dahlia.jpg',
    description: 'Escarpins rose comme une dahlia, parfaits pour les occasions spéciales.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Rose doux', 'Type: Escarpin', 'Hauteur talon: 7cm']
  },
  'ethnic-bow-slides': {
    name: 'Ethic Bow Slides',
    price: '12 000 FCFA',
    collection: 'Nouveautés',
    image: 'image/Ethnic Bow Slides.jpg',
    description: 'Sandales ethniques avec noeud charmant, fusion de style africain et moderne.',
    caracteristiques: ['Matière: Cuir', 'Type: Sandale', 'Détail: Noeud ethnique', 'Couleur: Multicolore']
  },
  // Talons supplémentaires
  'escarpin-orange-strass': {
    name: 'Escarpin Noeud Strass Orange',
    price: '27 500 FCFA',
    collection: 'Talons',
    image: 'image/escarpin orange.jpg',
    description: 'Escarpin orange éclatant orné d\'un noeud strass, l\'accessoire parfait pour briller.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Orange', 'Type: Escarpin', 'Détail: Strass']
  },
  'haute-doree-chic': {
    name: 'Haute Dorée Chic',
    price: '30 000 FCFA',
    collection: 'Talons',
    image: 'image/guess gold.jpg',
    description: 'Chaussure haute dorée d\'élégance pure, parfaite pour les soirées glamour.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Doré', 'Hauteur talon: 8cm', 'Style: Chic']
  },
  'crystal-queen-perles': {
    name: 'Crystal Queen Perles',
    price: '32 000 FCFA',
    collection: 'Talons',
    image: 'image/blanche perles.jpg',
    description: 'Chaussure blanche royale ornée de cristaux et de perles scintillantes.',
    caracteristiques: ['Matière: Cuir satin', 'Couleur: Blanc', 'Détail: Perles et cristaux', 'Occasion: Gala']
  },
  'steve-madden-nude': {
    name: 'Steve Madden Nude',
    price: '24 000 FCFA',
    collection: 'Talons',
    image: 'image/beige fine.jpg',
    description: 'Escarpin beige fin et intemporel, la chaussure classique par excellence.',
    caracteristiques: ['Matière: Cuir fin', 'Couleur: Beige', 'Type: Escarpin', 'Saison: Toute l\'année']
  },
  'mule-lilas': {
    name: 'Mule Lilas',
    price: '28 000 FCFA',
    collection: 'Talons',
    image: 'image/mulelilas.jpg',
    description: 'Mule lilas romantique et douce, comme une fleur de printemps.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Lilas', 'Type: Mule', 'Style: Romantique']
  },
  'mule-noire-tressees': {
    name: 'Mule Tressée Confort Noire',
    price: '12 500 FCFA',
    collection: 'Talons',
    image: 'image/mule noire.jpg',
    description: 'Mule noire confortable avec détails tressés pour un look casual-chic.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Noir', 'Type: Mule confortable', 'Détail: Tressage']
  },
  'escarpin-perla-lilas': {
    name: 'Escarpin Perla Lilas',
    price: '22 500 FCFA',
    collection: 'Talons',
    image: 'image/escarpin perla.jpg',
    description: 'Escarpin lilas délicat et féminin pour une touche de couleur sophistiquée.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Lilas', 'Type: Escarpin', 'Hauteur talon: 7cm']
  },
  'aquazzura-jaune': {
    name: 'Aquazzura Style Jaune',
    price: '19 500 FCFA',
    collection: 'Talons',
    image: 'image/aquazzura jaune.jpg',
    description: 'Sandale jaune lumineux avec une allure très contemporaine et stylée.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Jaune doré', 'Type: Sandale', 'Style: Moderne']
  },
  'menthe-strass-noeud': {
    name: 'Menthe Strass & Noeud',
    price: '21 500 FCFA',
    collection: 'Talons',
    image: 'image/menthe strass.jpg',
    description: 'Chaussure menthe délicate ornée de strass et d\'un noeud élégant.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Menthe', 'Détail: Strass et noeud', 'Style: Élégant']
  },
  'minimaliste-gold': {
    name: 'Minimaliste Gold',
    price: '17 500 FCFA',
    collection: 'Talons',
    image: 'image/minimaliste gold.jpg',
    description: 'Chaussure dorée au design minimaliste pour un look intemporel et chic.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Doré', 'Type: Escarpin', 'Style: Minimaliste']
  },
  'schutz-fuchsia': {
    name: 'Schutz Fuchsia',
    price: '40 500 FCFA',
    collection: 'Talons',
    image: 'image/schutz fuchsia.jpg',
    description: 'Chaussure fuchsia éclatante pour un impact visuel maximal.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Fuchsia', 'Type: Escr pin', 'Hauteur talon: 9cm']
  },
  // Ballerines supplémentaires
  'croco-lavande-soft': {
    name: 'Croco Lavande Soft',
    price: '18 000 FCFA',
    collection: 'Ballerines',
    image: 'image/lavande soft.jpg',
    description: 'Ballerine lavande douce avec un finish crocodile tendance.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Lavande', 'Type: Ballerine', 'Effet: Crocodile']
  },
  'purete-noeud-plat': {
    name: 'Purete a Noeud Plat',
    price: '16 000 FCFA',
    collection: 'Ballerines',
    image: 'image/noeud plat.jpg',
    description: 'Ballerine épurée avec un élégant noeud plat sur le devant.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Blanc/Neutre', 'Type: Ballerine', 'Détail: Noeud']
  },
  'eclat-crystal-nude': {
    name: 'Eclat Crystal Nude',
    price: '22 000 FCFA',
    collection: 'Ballerines',
    image: 'image/eclat crystal.jpg',
    description: 'Ballerine nude scintillante ornée de cristaux subtils.',
    caracteristiques: ['Matière: Cuir satin', 'Couleur: Nude', 'Type: Ballerine', 'Détail: Cristaux']
  },
  'nuit-douce': {
    name: 'Nuit Douce',
    price: '15 000 FCFA',
    collection: 'Ballerines',
    image: 'image/nuit douce.jpg',
    description: 'Ballerine noire comme une douce nuit étoilée.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Noir', 'Type: Ballerine', 'Style: Classique']
  },
  'vert-emeraude': {
    name: 'Ballerine Vert Emeraude',
    price: '18 000 FCFA',
    collection: 'Ballerines',
    image: 'image/vert emeraude.jpg',
    description: 'Ballerine vert émeraude riche et profonde, couleur de luxe.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Vert émeraude', 'Type: Ballerine', 'Style: Luxe']
  },
  'citadine-caramel': {
    name: 'Citadine Cuir Caramel',
    price: '18 000 FCFA',
    collection: 'Ballerines',
    image: 'image/citadine caramel.jpg',
    description: 'Ballerine citadine caramel parfaite pour la vie urbaine chic.',
    caracteristiques: ['Matière: Cuir premium', 'Couleur: Caramel', 'Type: Ballerine', 'Style: Urbain']
  },
  'office-black': {
    name: 'Classique Office Black',
    price: '15 000 FCFA',
    collection: 'Ballerines',
    image: 'image/office black.jpg',
    description: 'Ballerine noire classique parfaite pour le bureau et les occasions formelles.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Noir', 'Type: Ballerine', 'Occasion: Professionnel']
  },
  'rubis-soiree-strass': {
    name: 'Rubis de Soiree a Strass',
    price: '22 000 FCFA',
    collection: 'Ballerines',
    image: 'image/rubis de soiree.jpg',
    description: 'Ballerine rouge rubis ornée de strass pour les grandes soirées.',
    caracteristiques: ['Matière: Cuir satin', 'Couleur: Rouge rubis', 'Détail: Strass', 'Occasion: Soirée']
  },
  'fleur-celeste': {
    name: 'Douceur de Fleur Celeste',
    price: '18 000 FCFA',
    collection: 'Ballerines',
    image: 'image/fleur celeste .jpg',
    description: 'Ballerine bleu ciel douce comme une fleur céleste.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Bleu ciel', 'Type: Ballerine', 'Style: Doux']
  },
  'petale-soie': {
    name: 'Ballerine Petale de Soie',
    price: '20 000 FCFA',
    collection: 'Ballerines',
    image: 'image/petale de soie.jpg',
    description: 'Ballerine rose tendre doux comme un pétale de soie.',
    caracteristiques: ['Matière: Cuir satin', 'Couleur: Rose pâle', 'Type: Ballerine', 'Texture: Soie']
  },
  'diva-passion-rouge': {
    name: 'Diva Passion Rouge',
    price: '22 000 FCFA',
    collection: 'Ballerines',
    image: 'image/diva passion .jpg',
    description: 'Ballerine rouge passionnée pour une femme qui ose briller.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Rouge vif', 'Type: Ballerine', 'Style: Diva']
  },
  'blue-pompon-chic': {
    name: 'Blue Navy Pompon Chic',
    price: '20 000 FCFA',
    collection: 'Ballerines',
    image: 'image/blue pompon.jpg',
    description: 'Ballerine bleu marine avec pompon chic pour un look ludique.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Bleu marine', 'Type: Ballerine', 'Détail: Pompon']
  },
  'duo-mandarina': {
    name: 'Duo Citadin Mandarina',
    price: '18 000 FCFA',
    collection: 'Ballerines',
    image: 'image/duo mandarina.jpg',
    description: 'Ballerine mandarine ensoleillée avec touches citadines modernes.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Orange mandarine', 'Type: Ballerine', 'Style: Citadin']
  },
  'eclat-citron': {
    name: 'Eclat Citron',
    price: '19 000 FCFA',
    collection: 'Ballerines',
    image: 'image/eclat citron.jpg',
    description: 'Ballerine jaune citron éclatante pour apporter de la lumière.',
    caracteristiques: ['Matière: Cuir', 'Couleur: Jaune citron', 'Type: Ballerine', 'Style: Lumineux']
  },
  'beige-chic-m': {
    name: 'Beige chic',
    price: '22 000 FCFA',
    collection: 'Ballerines',
    image: 'image/beige chic M.jpg',
    description: 'Ballerine beige intemporelle pour un style chic et discret.',
    caracteristiques: ['Matière: Cuir premium', 'Couleur: Beige', 'Type: Ballerine', 'Style: Chic']
  }
};

document.addEventListener('DOMContentLoaded', function() {
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
