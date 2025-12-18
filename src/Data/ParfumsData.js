import perfume1Front from '../Assets/Perfumes/perfume1-front.jpg';
import perfume1Back from '../Assets/Perfumes/perfume1-back.jpg';
import perfume2Front from '../Assets/Perfumes/perfume2-front.jpg';
import perfume2Back from '../Assets/Perfumes/perfume2-back.jpg';
import perfume3Front from '../Assets/Perfumes/perfume3-front.jpg';
import perfume3Back from '../Assets/Perfumes/perfume3-back.jpg';
import perfume4Front from '../Assets/Perfumes/perfume4-front.jpg';
import perfume4Back from '../Assets/Perfumes/perfume4-back.jpg';
import perfume5Front from '../Assets/Perfumes/perfume5-front.jpg';
import perfume5Back from '../Assets/Perfumes/perfume5-back.jpg';
import perfume6Front from '../Assets/Perfumes/perfume6-front.jpg';
import perfume6Back from '../Assets/Perfumes/perfume6-back.jpg';
import perfume7Front from '../Assets/Perfumes/perfume7-front.jpg';
import perfume7Back from '../Assets/Perfumes/perfume7-back.jpg';
import perfume8Front from '../Assets/Perfumes/perfume8-front.jpg';
import perfume8Back from '../Assets/Perfumes/perfume8-back.jpg';

const productsData = [
  {
    productID: 1,
    frontImg: perfume1Front,
    backImg: perfume1Back,
    productName: "Chanel No. 5",
    productBrand: "Chanel",
    productPrice: 135,
    originalPrice: 165,
    productReviews: "12k+ reviews",
    category: "Floral",
    productCategory: "Femme",
    productType: "Eau de Parfum",
    productSize: "100ml",
    rating: 4.9,
    bestseller: true,
    newArrival: false,
    notes: {
      top: ["Aldehydes", "Ylang-Ylang", "Neroli"],
      heart: ["Jasmine", "Rose", "Lily of the Valley"],
      base: ["Sandalwood", "Vanilla", "Vetiver"]
    },
    description: "The iconic fragrance that has captivated women for generations with its timeless floral bouquet."
  },
  {
    productID: 2,
    frontImg: perfume2Front,
    backImg: perfume2Back,
    productName: "Dior Sauvage",
    productBrand: "Dior",
    productPrice: 120,
    originalPrice: 145,
    productReviews: "15k+ reviews",
    category: "Fresh",
    productCategory: "Homme",
    productType: "Eau de Toilette",
    productSize: "100ml",
    rating: 4.8,
    bestseller: true,
    newArrival: false,
    notes: {
      top: ["Calabrian Bergamot", "Pepper"],
      heart: ["Sichuan Pepper", "Lavender", "Pink Pepper"],
      base: ["Ambroxan", "Cedar", "Labdanum"]
    },
    description: "A wildly fresh and powerful fragrance for the modern man who lives by his own rules."
  },
  {
    productID: 3,
    frontImg: perfume3Front,
    backImg: perfume3Back,
    productName: "YSL Black Opium",
    productBrand: "Yves Saint Laurent",
    productPrice: 125,
    originalPrice: null,
    productReviews: "11k+ reviews",
    category: "Oriental",
    productCategory: "Femme",
    productType: "Eau de Parfum",
    productSize: "90ml",
    rating: 4.7,
    bestseller: true,
    newArrival: false,
    notes: {
      top: ["Pink Pepper", "Orange Blossom", "Pear"],
      heart: ["Coffee", "Jasmine", "Bitter Almond"],
      base: ["Vanilla", "Patchouli", "Cedar"]
    },
    description: "A seductive and addictive gourmand fragrance with coffee and vanilla notes."
  },
  {
    productID: 4,
    frontImg: perfume4Front,
    backImg: perfume4Back,
    productName: "Bleu de Chanel",
    productBrand: "Chanel",
    productPrice: 140,
    originalPrice: 170,
    productReviews: "13k+ reviews",
    category: "Woody",
    productCategory: "Homme",
    productType: "Eau de Parfum",
    productSize: "100ml",
    rating: 4.9,
    bestseller: true,
    newArrival: false,
    notes: {
      top: ["Grapefruit", "Lemon", "Mint"],
      heart: ["Ginger", "Nutmeg", "Jasmine"],
      base: ["Incense", "Vetiver", "Cedar"]
    },
    description: "An aromatic-woody fragrance that embodies freedom and determination."
  },
  {
    productID: 5,
    frontImg: perfume5Front,
    backImg: perfume5Back,
    productName: "Miss Dior",
    productBrand: "Dior",
    productPrice: 130,
    originalPrice: 155,
    productReviews: "10k+ reviews",
    category: "Floral",
    productCategory: "Femme",
    productType: "Eau de Parfum",
    productSize: "100ml",
    rating: 4.8,
    bestseller: false,
    newArrival: true,
    notes: {
      top: ["Blood Orange", "Mandarin"],
      heart: ["Rose", "Peony", "Lily of the Valley"],
      base: ["Musk", "Patchouli", "Amber"]
    },
    description: "A fresh and romantic floral fragrance with a couture spirit."
  },
  {
    productID: 6,
    frontImg: perfume6Front,
    backImg: perfume6Back,
    productName: "Versace Eros",
    productBrand: "Versace",
    productPrice: 95,
    originalPrice: 115,
    productReviews: "9k+ reviews",
    category: "Fresh",
    productCategory: "Homme",
    productType: "Eau de Toilette",
    productSize: "100ml",
    rating: 4.6,
    bestseller: true,
    newArrival: false,
    notes: {
      top: ["Mint", "Green Apple", "Lemon"],
      heart: ["Tonka Bean", "Geranium", "Ambroxan"],
      base: ["Vanilla", "Vetiver", "Oakmoss"]
    },
    description: "A passionate and seductive fragrance inspired by Greek mythology."
  },
  {
    productID: 7,
    frontImg: perfume7Front,
    backImg: perfume7Back,
    productName: "Tom Ford Tobacco Vanille",
    productBrand: "Tom Ford",
    productPrice: 285,
    originalPrice: 320,
    productReviews: "8k+ reviews",
    category: "Oriental",
    productCategory: "Unisexe",
    productType: "Eau de Parfum",
    productSize: "50ml",
    rating: 4.9,
    bestseller: false,
    newArrival: true,
    notes: {
      top: ["Tobacco Leaf", "Spicy Notes"],
      heart: ["Vanilla", "Cocoa", "Tonka Bean"],
      base: ["Dry Fruit Accord", "Wood Sap"]
    },
    description: "A luxurious and opulent oriental fragrance with tobacco and vanilla."
  },
  {
    productID: 8,
    frontImg: perfume8Front,
    backImg: perfume8Back,
    productName: "Lancôme La Vie Est Belle",
    productBrand: "Lancôme",
    productPrice: 140,
    originalPrice: 165,
    productReviews: "14k+ reviews",
    category: "Floral",
    productCategory: "Femme",
    productType: "Eau de Parfum",
    productSize: "100ml",
    rating: 4.8,
    bestseller: true,
    newArrival: false,
    notes: {
      top: ["Black Currant", "Pear"],
      heart: ["Iris", "Jasmine", "Orange Blossom"],
      base: ["Praline", "Vanilla", "Patchouli"]
    },
    description: "A joyful and luminous fragrance celebrating life's beautiful moments."
  }
];

export const brands = [
  { id: 1, name: "Chanel" },
  { id: 2, name: "Dior" },
  { id: 3, name: "Yves Saint Laurent" },
  { id: 4, name: "Versace" },
  { id: 5, name: "Tom Ford" },
  { id: 6, name: "Lancôme" }
];

export const categories = [
  { id: 1, name: "Femme", slug: "femme" },
  { id: 2, name: "Homme", slug: "homme" },
  { id: 3, name: "Unisexe", slug: "unisexe" }
];

export const fragranceCategories = [
  { id: 1, name: "Floral", slug: "floral" },
  { id: 2, name: "Fresh", slug: "fresh" },
  { id: 3, name: "Woody", slug: "woody" },
  { id: 4, name: "Oriental", slug: "oriental" }
];

export default productsData;