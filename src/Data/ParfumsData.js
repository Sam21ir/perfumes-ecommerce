// i need to repalce imagePaths by real ones from Assets
// products data version 1.0

const productsData = [
  {
    productID: 1,
    frontImg: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
    backImg: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=500&fit=crop",
    productName: "Nuit Étoilée",
    productBrand: "Essence Royale",
    productPrice: 129,
    originalPrice: 159,
    productReviews: "8k+ reviews",
    productCategory: "Femme",
    productType: "Eau de Parfum",
    productSize: "100ml",
    rating: 4.8,
    bestseller: true,
    newArrival: false,
    notes: {
      top: ["Bergamote", "Poire", "Mandarine"],
      heart: ["Jasmin", "Rose", "Pivoine"],
      base: ["Vanille", "Musc", "Bois de santal"]
    },
    description: "Un parfum envoûtant aux notes florales et boisées, parfait pour les soirées élégantes."
  },
  {
    productID: 2,
    frontImg: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop",
    backImg: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=500&fit=crop",
    productName: "Océan Mystique",
    productBrand: "Aqua Luxe",
    productPrice: 89,
    originalPrice: 109,
    productReviews: "6k+ reviews",
    productCategory: "Homme",
    productType: "Eau de Toilette",
    productSize: "75ml",
    rating: 4.6,
    bestseller: true,
    newArrival: false,
    notes: {
      top: ["Citron vert", "Notes marines", "Menthe"],
      heart: ["Lavande", "Géranium", "Gingembre"],
      base: ["Cèdre", "Ambre", "Patchouli"]
    },
    description: "Une fragrance fraîche et marine, idéale pour un homme moderne et dynamique."
  },
  {
    productID: 3,
    frontImg: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=500&fit=crop",
    backImg: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=500&fit=crop",
    productName: "Rose Impériale",
    productBrand: "Maison Floralie",
    productPrice: 149,
    originalPrice: null,
    productReviews: "9k+ reviews",
    productCategory: "Femme",
    productType: "Eau de Parfum",
    productSize: "100ml",
    rating: 4.9,
    bestseller: false,
    newArrival: true,
    notes: {
      top: ["Rose de Damas", "Litchi", "Framboise"],
      heart: ["Rose centifolia", "Magnolia", "Freesia"],
      base: ["Musc blanc", "Cèdre", "Ambre gris"]
    },
    description: "L'essence pure de la rose de Grasse, un classique intemporel et raffiné."
  },
  {
    productID: 4,
    frontImg: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop",
    backImg: "https://images.unsplash.com/photo-1565108752815-13e0c9a8c85c?w=400&h=500&fit=crop",
    productName: "Cuir Sauvage",
    productBrand: "Heritage & Co",
    productPrice: 169,
    originalPrice: 199,
    productReviews: "5k+ reviews",
    productCategory: "Homme",
    productType: "Eau de Parfum",
    productSize: "100ml",
    rating: 4.7,
    bestseller: false,
    newArrival: true,
    notes: {
      top: ["Cardamome", "Poivre noir", "Safran"],
      heart: ["Cuir", "Oud", "Encens"],
      base: ["Patchouli", "Vétiver", "Musc"]
    },
    description: "Un parfum puissant et masculin avec des notes de cuir et d'épices orientales."
  },
  {
    productID: 5,
    frontImg: "https://images.unsplash.com/photo-1588405748880-12d1d2a59926?w=400&h=500&fit=crop",
    backImg: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=400&h=500&fit=crop",
    productName: "Jardin d'Été",
    productBrand: "Essence Royale",
    productPrice: 79,
    originalPrice: 99,
    productReviews: "7k+ reviews",
    productCategory: "Unisexe",
    productType: "Eau de Toilette",
    productSize: "50ml",
    rating: 4.5,
    bestseller: true,
    newArrival: false,
    notes: {
      top: ["Thé vert", "Citron", "Basilic"],
      heart: ["Muguet", "Jasmin", "Herbe coupée"],
      base: ["Mousse de chêne", "Musc blanc", "Bois de cèdre"]
    },
    description: "Une fragrance fraîche et verte, évoquant une promenade dans un jardin fleuri."
  },
  {
    productID: 6,
    frontImg: "https://images.unsplash.com/photo-1590156206983-b94ec3b665f9?w=400&h=500&fit=crop",
    backImg: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=400&h=500&fit=crop",
    productName: "Ambre Mystérieux",
    productBrand: "Oriental Essence",
    productPrice: 139,
    originalPrice: null,
    productReviews: "8k+ reviews",
    productCategory: "Femme",
    productType: "Eau de Parfum",
    productSize: "75ml",
    rating: 4.8,
    bestseller: true,
    newArrival: false,
    notes: {
      top: ["Cannelle", "Orange sanguine", "Cardamome"],
      heart: ["Ambre", "Ylang-ylang", "Jasmin sambac"],
      base: ["Vanille de Madagascar", "Fève tonka", "Benjoin"]
    },
    description: "Un parfum oriental chaleureux et envoûtant aux notes ambrées et épicées."
  },
  {
    productID: 7,
    frontImg: "https://images.unsplash.com/photo-1592542246819-74a1c4b6e1f6?w=400&h=500&fit=crop",
    backImg: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400&h=500&fit=crop",
    productName: "Bois Précieux",
    productBrand: "Heritage & Co",
    productPrice: 159,
    originalPrice: 189,
    productReviews: "6k+ reviews",
    productCategory: "Homme",
    productType: "Eau de Parfum",
    productSize: "100ml",
    rating: 4.6,
    bestseller: false,
    newArrival: false,
    notes: {
      top: ["Bergamote", "Cardamome", "Gingembre"],
      heart: ["Bois de santal", "Cèdre de l'Atlas", "Vétiver"],
      base: ["Patchouli", "Ambre", "Musc"]
    },
    description: "Une composition boisée noble et raffinée pour l'homme distingué."
  },
  {
    productID: 8,
    frontImg: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=500&fit=crop",
    backImg: "https://images.unsplash.com/photo-1619994121345-b4a11a6aa2c0?w=400&h=500&fit=crop",
    productName: "Fleur de Cerisier",
    productBrand: "Maison Floralie",
    productPrice: 94,
    originalPrice: 119,
    productReviews: "7k+ reviews",
    productCategory: "Femme",
    productType: "Eau de Toilette",
    productSize: "75ml",
    rating: 4.7,
    bestseller: true,
    newArrival: false,
    notes: {
      top: ["Fleur de cerisier", "Mandarine", "Pêche"],
      heart: ["Pivoine", "Lotus", "Jasmin"],
      base: ["Musc blanc", "Bois de santal", "Ambre"]
    },
    description: "Une fragrance délicate et printanière inspirée des cerisiers en fleurs du Japon."
  }
];

// Marques disponibles
export const brands = [
  { id: 1, name: "Essence Royale" },
  { id: 2, name: "Maison Floralie" },
  { id: 3, name: "Aqua Luxe" },
  { id: 4, name: "Heritage & Co" },
  { id: 5, name: "Oriental Essence" }
];

// Catégories
export const categories = [
  { id: 1, name: "Femme", slug: "femme" },
  { id: 2, name: "Homme", slug: "homme" },
  { id: 3, name: "Unisexe", slug: "unisexe" }
];

export default productsData;