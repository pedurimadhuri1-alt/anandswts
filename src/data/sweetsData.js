export const SWEETS_DATA = [
  {
    id: "anand-kaja",
    name: "Signature Anand Kaja",
    teluguName: "ఆనంద్ కాజా",
    category: "special",
    pricePerKg: 340,
    rating: 4.9,
    reviewsCount: 380,
    image: "/images/anand_kaja.png",
    description:
      "The pride of Anand Sweets Rajahmundry. Crispy, golden, multi-layered sweet soaked in pure sugar syrup.",
    ingredients: "Refined Flour, Pure Ghee, Sugar Syrup, Cardamom",
    shelfLife: "15 Days",
    isBestseller: true,
    isPureGhee: true,
    availableWeights: [
      { label: "250g", multiplier: 0.25 },
      { label: "500g", multiplier: 0.5 },
      { label: "1 Kg", multiplier: 1.0 }
    ]
  },

  {
    id: "pootharekulu",
    name: "Pure Ghee Pootharekulu",
    teluguName: "పూతరేకులు",
    category: "ghee",
    pricePerKg: 520,
    rating: 5.0,
    reviewsCount: 420,
    image: "/images/pootharekulu.png",
    description:
      "Authentic ultra-thin paper-rice rolls layered with organic jaggery, pure desi ghee and crushed dry fruits.",
    ingredients:
      "Rice Batter, Pure Desi Ghee, Organic Jaggery, Almonds & Pistachios",
    shelfLife: "30 Days",
    isBestseller: true,
    isPureGhee: true,
    availableWeights: [
      { label: "250g", multiplier: 0.25 },
      { label: "500g", multiplier: 0.5 },
      { label: "1 Kg", multiplier: 1.0 }
    ]
  },

  {
    id: "sunnundalu",
    name: "Urad Dal Ghee Sunnundalu",
    teluguName: "మినప సున్నుండలు",
    category: "traditional",
    pricePerKg: 440,
    rating: 4.9,
    reviewsCount: 350,

    // CORRECT FILE NAME
    image: "/images/sunnudalu.jpg",

    description:
      "Authentic Rajahmundry Sunnundalu prepared with slow-roasted black gram dal, organic jaggery and generous pure desi ghee.",
    ingredients:
      "Roasted Urad Dal, Organic Jaggery, Pure Desi Ghee, Cardamom",
    shelfLife: "25 Days",
    isBestseller: true,
    isPureGhee: true,
    availableWeights: [
      { label: "250g", multiplier: 0.25 },
      { label: "500g", multiplier: 0.5 },
      { label: "1 Kg", multiplier: 1.0 }
    ]
  },

  {
    id: "chekkalu",
    name: "Crispy Pappu Chekkalu",
    teluguName: "పప్పు బియ్యపు చెక్కలు",
    category: "savouries",
    pricePerKg: 280,
    rating: 4.8,
    reviewsCount: 220,

    // CORRECT FILE NAME
    image: "/images/chekkalu.jpg",

    description:
      "Golden crunchy rice crackers studded with chana dal, white sesame seeds, butter and green chilis. Perfect tea-time snack.",
    ingredients:
      "Rice Flour, Chana Dal, Sesame, Butter, Green Chili, Cumin",
    shelfLife: "30 Days",
    isBestseller: true,
    isPureGhee: false,
    availableWeights: [
      { label: "250g", multiplier: 0.25 },
      { label: "500g", multiplier: 0.5 },
      { label: "1 Kg", multiplier: 1.0 }
    ]
  },

  {
    id: "mysore-pak-trilogy",
    name: "Mysore Pak Trilogy Box",
    teluguName: "నెయ్యి మైసూర్ పాక్ బాక్స్",
    category: "ghee",
    pricePerKg: 480,
    rating: 5.0,
    reviewsCount: 410,

    // CORRECT FILE NAME
    image: "/images/mysure.jpg",

    description:
      "Melt-in-mouth golden squares of Mysore Pak packaged in Anand Sweets designer tin box gift edition.",
    ingredients:
      "Roasted Besan, Aromatic Pure Desi Ghee, Sugar",
    shelfLife: "20 Days",
    isBestseller: true,
    isPureGhee: true,
    availableWeights: [
      { label: "250g", multiplier: 0.25 },
      { label: "500g", multiplier: 0.5 },
      { label: "1 Kg", multiplier: 1.0 }
    ]
  },

  {
    id: "savoury-mixture",
    name: "Anand Special Savoury Mixture",
    teluguName: "ఆనంద్ స్పెషల్ మిక్చర్",
    category: "savouries",
    pricePerKg: 260,
    rating: 4.7,
    reviewsCount: 290,

    // CORRECT FILE NAME
    image: "/images/mixcture.jpg",

    description:
      "Crunchy spicy mixture made with thin gram flour sev, roasted peanuts, cashews, and fresh curry leaves.",
    ingredients:
      "Gram Flour Sev, Peanuts, Cashews, Curry Leaves, Andhra Spices",
    shelfLife: "30 Days",
    isBestseller: true,
    isPureGhee: false,
    availableWeights: [
      { label: "250g", multiplier: 0.25 },
      { label: "500g", multiplier: 0.5 },
      { label: "1 Kg", multiplier: 1.0 }
    ]
  },

  {
    id: "ariselu",
    name: "Jaggery Nuvvula Ariselu",
    teluguName: "నువ్వుల అరిసెలు",
    category: "traditional",
    pricePerKg: 300,
    rating: 4.8,
    reviewsCount: 290,
    image: "/images/ariselu.png",
    description:
      "Traditional Andhra festive sweet made with freshly ground rice flour, melted jaggery and sesame seeds fried in ghee.",
    ingredients:
      "Rice Flour, Organic Jaggery, Pure Ghee, White Sesame Seeds",
    shelfLife: "20 Days",
    isBestseller: false,
    isPureGhee: true,
    availableWeights: [
      { label: "250g", multiplier: 0.25 },
      { label: "500g", multiplier: 0.5 },
      { label: "1 Kg", multiplier: 1.0 }
    ]
  },

  {
    id: "ugadi-festive-hamper",
    name: "Ugadi Grand Festive Gift Box",
    teluguName: "ఉగాది పండుగ స్పెషల్ బాక్స్",
    category: "gifting",
    pricePerKg: 680,
    rating: 5.0,
    reviewsCount: 510,
    image: "/images/custom_gift_box.png",
    description:
      "Grand festive gift box filled with Anand Kaja, Pootharekulu, Sunnundalu and Chekkalu for Ugadi & Telugu celebrations.",
    ingredients:
      "Assorted Pure Ghee Anand Sweets & Savouries",
    shelfLife: "20 Days",
    isBestseller: true,
    isPureGhee: true,
    availableWeights: [
      { label: "500g", multiplier: 0.5 },
      { label: "1 Kg", multiplier: 1.0 }
    ]
  }
];

export const GALLERY_DATA = [
  {
    id: 1,
    title: "Signature Anand Kaja Preparation",
    category: "store",
    image: "/images/anand_kaja.png",
    caption:
      "Handcrafted Anand Kaja made fresh every morning in Rajahmundry"
  },

  {
    id: 2,
    title: "Happy Ugadi Telugu Festivities",
    category: "festival",

    // Using actual existing image
    image: "/images/ugadhi.jpg",

    caption:
      "Traditional Ugadi festival sweets & greetings collection"
  },

  {
    id: 3,
    title: "Godavari River Heritage",
    category: "family",
    image: "/images/godavari_bridge.png",
    caption:
      "Rooted in the cultural capital of Andhra - Rajahmundry"
  },

  {
    id: 4,
    title: "Royal Wedding Sweet Boxes",
    category: "wedding",
    image: "/images/custom_gift_box.png",
    caption:
      "Custom wedding gift hampers for grand Telugu celebrations"
  },

  {
    id: 5,
    title: "Traditional Sunnundalu & Chekkalu",
    category: "festival",
    image: "/images/sunnudalu.jpg",
    caption:
      "Freshly prepared Sunnundalu and Pappu Chekkalu"
  },

  {
    id: 6,
    title: "Mysore Pak Trilogy Display",
    category: "store",
    image: "/images/hero_sweets.png",
    caption:
      "Freshly prepared sweets daily at Anand Sweets Prakash Nagar store"
  }
];

export const REVIEWS_DATA = [
  {
    id: 1,
    name: "Srinivas Rao",
    location: "Prakash Nagar, Rajahmundry",
    rating: 5,
    date: "September 2026",
    comment:
      "Anand Sweets near Round Park Road has been our family's go-to. The Anand Kaja and Sunnundalu are incomparable — pure ghee taste every single time!"
  },

  {
    id: 2,
    name: "Padma & Venkat",
    location: "Rajahmundry",
    rating: 5,
    date: "August 2026",
    comment:
      "Ordered 50 kg of Pootharekulu and Mysore Pak boxes for my daughter's wedding. Call to order was seamless and every guest loved it!"
  },

  {
    id: 3,
    name: "Ramesh Kumar (NRI)",
    location: "Dallas, USA",
    rating: 5,
    date: "September 2026",
    comment:
      "Whenever relatives visit from Rajahmundry, Anand Sweets Sunnundalu and Chekkalu are a must-have gift. Best authentic taste!"
  },

  {
    id: 4,
    name: "Anitha Reddy",
    location: "Visakhapatnam",
    rating: 5,
    date: "July 2026",
    comment:
      "Their Ariselu and Ghee Mysore Pak Trilogy are top notch. Pure ingredients and clean shop in Prakash Nagar."
  }
];

export const STORE_INFO = {
  name: "Anand Sweets",
  city: "Rajahmundry",
  fullAddress:
    "Near Round Park Road, Prakash Nagar, Rajahmundry, Andhra Pradesh - 533103",
  shortAddress:
    "Prakash Nagar, Near Round Park Road, Rajahmundry",
  phone: "+91 93466 92862",
  landline: "0883 2478824",
  phoneFormatted: "+91 93466 92862 / 0883-2478824",
  whatsappNumber: "919346692862",
  whatsappFormatted: "+91 93466 92862",

  instagramUrl:
    "https://www.instagram.com/anandsweets_rjy/?hl=en",

  facebookUrl:
    "https://www.facebook.com/p/Anand-Sweets-100076033756715/",

  openingHours:
    "Monday - Sunday: 8:30 AM - 10:00 PM",

  email:
    "info@anandsweetsrajahmundry.com",

  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Anand+Sweets+Prakash+Nagar+Rajahmundry",

  embedMapUrl:
    "https://maps.google.com/maps?q=Prakash+Nagar,+Rajahmundry,+Andhra+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
};