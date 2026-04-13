const giftSeed = [
  { name: "Wireless earbuds", tags: ["music", "fitness", "tech", "minimal"], minPrice: 39, maxPrice: 199 },
  { name: "Portable espresso maker", tags: ["coffee", "travel", "premium"], minPrice: 48, maxPrice: 180 },
  { name: "Indoor herb garden kit", tags: ["cooking", "nature", "home", "creative"], minPrice: 24, maxPrice: 120 },
  { name: "Smart mug warmer", tags: ["coffee", "office", "minimal"], minPrice: 19, maxPrice: 85 },
  { name: "Scent discovery set", tags: ["beauty", "luxury", "style"], minPrice: 35, maxPrice: 150 },
  { name: "Gaming keyboard", tags: ["gaming", "tech", "desk"], minPrice: 45, maxPrice: 210 },
  { name: "Mechanical puzzle box", tags: ["puzzles", "creative", "collectible"], minPrice: 25, maxPrice: 95 },
  { name: "Yoga starter bundle", tags: ["fitness", "wellness", "minimal"], minPrice: 30, maxPrice: 140 },
  { name: "Mini projector", tags: ["movies", "tech", "family", "travel"], minPrice: 60, maxPrice: 280 },
  { name: "Digital frame", tags: ["family", "home", "premium"], minPrice: 49, maxPrice: 180 },
  { name: "Art supplies master set", tags: ["art", "creative", "hobby"], minPrice: 29, maxPrice: 130 },
  { name: "Luxury throw blanket", tags: ["home", "comfort", "style"], minPrice: 28, maxPrice: 170 },
  { name: "Stargazing telescope", tags: ["science", "outdoors", "family"], minPrice: 70, maxPrice: 260 },
  { name: "Fitness smartwatch", tags: ["fitness", "tech", "wellness"], minPrice: 59, maxPrice: 350 },
  { name: "Craft cocktail kit", tags: ["food", "hosting", "premium"], minPrice: 34, maxPrice: 145 },
  { name: "Board game collection", tags: ["gaming", "family", "social"], minPrice: 22, maxPrice: 120 },
  { name: "Noise-canceling headphones", tags: ["music", "tech", "travel", "premium"], minPrice: 99, maxPrice: 399 },
  { name: "Personalized photo book", tags: ["family", "romance", "creative"], minPrice: 20, maxPrice: 90 },
  { name: "Beginner guitar bundle", tags: ["music", "creative", "hobby"], minPrice: 75, maxPrice: 260 },
  { name: "Pet camera treat dispenser", tags: ["pets", "tech", "home"], minPrice: 39, maxPrice: 220 },
  { name: "Travel packing cube set", tags: ["travel", "minimal", "organization"], minPrice: 15, maxPrice: 80 },
  { name: "Chef knife starter set", tags: ["cooking", "home", "premium"], minPrice: 45, maxPrice: 210 },
  { name: "Skincare ritual box", tags: ["beauty", "wellness", "style"], minPrice: 25, maxPrice: 130 },
  { name: "Desk standing converter", tags: ["office", "fitness", "tech"], minPrice: 69, maxPrice: 240 },
  { name: "Smart home starter bundle", tags: ["tech", "home", "minimal"], minPrice: 55, maxPrice: 280 },
  { name: "Pickleball starter kit", tags: ["fitness", "outdoors", "social"], minPrice: 35, maxPrice: 150 },
  { name: "Language learning pack", tags: ["learning", "travel", "creative"], minPrice: 19, maxPrice: 95 },
  { name: "Coffee grinder pro", tags: ["coffee", "kitchen", "premium"], minPrice: 40, maxPrice: 220 },
  { name: "LEGO architecture set", tags: ["creative", "collectible", "family"], minPrice: 30, maxPrice: 250 },
  { name: "Camping hammock", tags: ["outdoors", "travel", "adventure"], minPrice: 24, maxPrice: 110 },
  { name: "Vinyl record player", tags: ["music", "home", "style"], minPrice: 59, maxPrice: 260 },
  { name: "E-reader", tags: ["reading", "travel", "minimal", "tech"], minPrice: 79, maxPrice: 220 },
  { name: "Baking essentials kit", tags: ["cooking", "creative", "family"], minPrice: 26, maxPrice: 120 },
  { name: "Robot vacuum", tags: ["home", "tech", "premium"], minPrice: 120, maxPrice: 450 },
  { name: "High-end water bottle", tags: ["fitness", "wellness", "minimal"], minPrice: 18, maxPrice: 80 },
  { name: "Drone photography starter", tags: ["tech", "outdoors", "creative"], minPrice: 99, maxPrice: 420 },
  { name: "Journaling bundle", tags: ["writing", "wellness", "creative"], minPrice: 16, maxPrice: 70 },
  { name: "Sushi making set", tags: ["cooking", "social", "creative"], minPrice: 20, maxPrice: 95 },
  { name: "Electric scooter accessory kit", tags: ["travel", "tech", "adventure"], minPrice: 34, maxPrice: 180 },
  { name: "Premium candle set", tags: ["home", "style", "wellness"], minPrice: 22, maxPrice: 110 },
  { name: "Smart ring", tags: ["tech", "wellness", "style", "premium"], minPrice: 120, maxPrice: 390 }
];

const retailers = [
  {
    id: "amazon",
    name: "Amazon",
    searchUrl: "https://www.amazon.com/s?k=",
    affiliateTag: ""
  },
  {
    id: "target",
    name: "Target",
    searchUrl: "https://www.target.com/s?searchTerm=",
    affiliateTag: ""
  },
  {
    id: "walmart",
    name: "Walmart",
    searchUrl: "https://www.walmart.com/search?q=",
    affiliateTag: ""
  },
  {
    id: "costco",
    name: "Costco",
    searchUrl: "https://www.costco.com/CatalogSearch?keyword=",
    affiliateTag: ""
  },
  {
    id: "sams-club",
    name: "Sam's Club",
    searchUrl: "https://www.samsclub.com/s/",
    affiliateTag: ""
  },
  {
    id: "five-below",
    name: "Five Below",
    searchUrl: "https://www.fivebelow.com/search?q=",
    affiliateTag: ""
  },
  {
    id: "best-buy",
    name: "Best Buy",
    searchUrl: "https://www.bestbuy.com/site/searchpage.jsp?st=",
    affiliateTag: ""
  }
];

module.exports = {
  giftSeed,
  retailers
};
