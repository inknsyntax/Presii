const { giftSeed, retailers } = require("../data/giftSeed");

const normalizeText = (value = "") => value.toLowerCase().trim();

const parseKeywords = (input = "") =>
  input
    .split(",")
    .map((item) => normalizeText(item))
    .filter(Boolean);

const budgetValue = {
  low: 30,
  mid: 80,
  high: 180,
  luxury: 300
};

const relationshipSignals = {
  partner: ["romance", "style", "luxury", "premium"],
  parent: ["family", "home", "wellness"],
  friend: ["social", "gaming", "creative"],
  coworker: ["office", "minimal", "coffee"],
  sibling: ["gaming", "music", "tech", "hobby"],
  child: ["family", "creative", "collectible", "science"]
};

const occasionSignals = {
  birthday: ["creative", "style", "social"],
  anniversary: ["romance", "luxury", "premium"],
  holiday: ["family", "home", "comfort"],
  graduation: ["learning", "office", "travel", "tech"],
  thankyou: ["minimal", "coffee", "home"],
  justbecause: ["surprise", "creative", "fun"]
};

function computeScore(item, answers, keywords) {
  const itemTags = item.tags.map(normalizeText);
  const interests = parseKeywords(answers.interests);
  const hobbies = parseKeywords(answers.hobbies);
  const style = normalizeText(answers.style);
  const keywordPool = [...keywords, ...interests, ...hobbies, style].filter(Boolean);

  const signals = [
    ...(relationshipSignals[normalizeText(answers.relationship)] || []),
    ...(occasionSignals[normalizeText(answers.occasion)] || [])
  ];

  let score = 0;
  for (const signal of [...keywordPool, ...signals]) {
    if (itemTags.includes(signal)) {
      score += 12;
    }
    if (item.name.toLowerCase().includes(signal)) {
      score += 6;
    }
  }

  const budget = budgetValue[normalizeText(answers.budget)] || budgetValue.mid;
  const midpoint = (item.minPrice + item.maxPrice) / 2;
  const distance = Math.abs(midpoint - budget);
  score += Math.max(0, 40 - distance / 3);

  if (answers.ageRange === "13-17" && itemTags.includes("family")) score += 8;
  if (answers.ageRange === "18-25" && itemTags.includes("tech")) score += 8;
  if (answers.ageRange === "26-35" && itemTags.includes("premium")) score += 6;
  if (answers.ageRange === "36-50" && itemTags.includes("home")) score += 6;
  if (answers.ageRange === "50+" && itemTags.includes("wellness")) score += 8;

  return Math.round(score);
}

function priceByRetailer(item, retailerId) {
  const ranges = {
    amazon: [0.95, 1.05],
    target: [0.9, 1.0],
    walmart: [0.85, 0.98],
    costco: [0.92, 1.1],
    "sams-club": [0.9, 1.08],
    "five-below": [0.5, 0.8],
    "best-buy": [1.0, 1.2]
  };

  const [low, high] = ranges[retailerId] || [1, 1.1];
  const midpoint = (item.minPrice + item.maxPrice) / 2;
  const adjusted = midpoint * (low + high) / 2;
  return Math.max(5, Math.round(adjusted));
}

function buildRetailerLinks(itemName) {
  return retailers.map((retailer) => ({
    retailer: retailer.name,
    retailerId: retailer.id,
    url: `${retailer.searchUrl}${encodeURIComponent(itemName)}`
  }));
}

function generateRecommendations(payload = {}) {
  const answers = payload.answers || {};
  const keywords = parseKeywords(payload.keywords || "");

  const scored = giftSeed
    .map((gift) => ({
      ...gift,
      score: computeScore(gift, answers, keywords)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 35);

  const expanded = [];
  for (const gift of scored) {
    const links = buildRetailerLinks(gift.name);
    for (const link of links) {
      expanded.push({
        id: `${gift.name}-${link.retailerId}`.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
        title: gift.name,
        retailer: link.retailer,
        retailerId: link.retailerId,
        categoryTags: gift.tags,
        score: gift.score,
        estimatedPrice: priceByRetailer(gift, link.retailerId),
        url: link.url
      });
    }
  }

  return expanded
    .sort((a, b) => b.score - a.score)
    .slice(0, 220);
}

module.exports = {
  generateRecommendations
};
