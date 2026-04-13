const themes = [
  { id: "solid-white", label: "Solid White", preview: "linear-gradient(135deg, #ffffff, #e9edf2)" },
  { id: "solid-light-grey", label: "Solid Light Grey", preview: "linear-gradient(135deg, #f1f3f6, #dce2e9)" },
  { id: "chastity", label: "Chastity", preview: "linear-gradient(135deg, #cdc2ff, #f7d67f)" },
  { id: "water", label: "Water", preview: "linear-gradient(135deg, #5ab3ff, #dff8ff)" },
  { id: "wind", label: "Wind", preview: "linear-gradient(135deg, #aebbc8, #eaf4ff)" },
  { id: "solid-black", label: "Solid Black", preview: "linear-gradient(135deg, #080808, #373737)" },
  { id: "solid-dark-grey", label: "Solid Dark Grey", preview: "linear-gradient(135deg, #2f353b, #14171b)" },
  { id: "earth", label: "Earth", preview: "linear-gradient(135deg, #17543f, #1c6284)" },
  { id: "lust", label: "Lust", preview: "linear-gradient(135deg, #970f33, #121214)" },
  { id: "fire", label: "Fire", preview: "linear-gradient(135deg, #8f1900, #ffbf54)" }
];

const retailers = [
  { id: "amazon", name: "Amazon", searchUrl: "https://www.amazon.com/s?k=" },
  { id: "target", name: "Target", searchUrl: "https://www.target.com/s?searchTerm=" },
  { id: "walmart", name: "Walmart", searchUrl: "https://www.walmart.com/search?q=" },
  { id: "costco", name: "Costco", searchUrl: "https://www.costco.com/CatalogSearch?keyword=" },
  { id: "sams-club", name: "Sam's Club", searchUrl: "https://www.samsclub.com/s/" },
  { id: "five-below", name: "Five Below", searchUrl: "https://www.fivebelow.com/search?q=" },
  { id: "best-buy", name: "Best Buy", searchUrl: "https://www.bestbuy.com/site/searchpage.jsp?st=" }
];

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
  { name: "Smart ring", tags: ["tech", "wellness", "style", "premium"], minPrice: 120, maxPrice: 390 },
  { name: "Dog DNA test kit", tags: ["pets", "science", "family"], minPrice: 49, maxPrice: 140 },
  { name: "Custom neon sign", tags: ["style", "home", "creative"], minPrice: 65, maxPrice: 220 },
  { name: "Cold brew tower", tags: ["coffee", "home", "luxury"], minPrice: 80, maxPrice: 260 },
  { name: "Running recovery massage gun", tags: ["fitness", "wellness", "tech"], minPrice: 70, maxPrice: 260 },
  { name: "Movie night snack vault", tags: ["movies", "family", "social"], minPrice: 18, maxPrice: 65 },
  { name: "Astronomy wall projector", tags: ["science", "creative", "home"], minPrice: 35, maxPrice: 140 },
  { name: "Luxury tea sampler", tags: ["wellness", "home", "premium"], minPrice: 28, maxPrice: 110 },
  { name: "Car detail studio kit", tags: ["organization", "hobby", "premium"], minPrice: 40, maxPrice: 180 },
  { name: "Portable picnic table", tags: ["outdoors", "social", "travel"], minPrice: 38, maxPrice: 120 }
];

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

const budgetValue = {
  low: 30,
  mid: 80,
  high: 180,
  luxury: 300
};

const retailerPriceRanges = {
  amazon: [0.95, 1.05],
  target: [0.9, 1.0],
  walmart: [0.85, 0.98],
  costco: [0.92, 1.1],
  "sams-club": [0.9, 1.08],
  "five-below": [0.5, 0.8],
  "best-buy": [1.0, 1.2]
};

const storageKeys = {
  theme: "presii-theme",
  favorites: "presii-favorites"
};

const state = {
  theme: localStorage.getItem(storageKeys.theme) || "water",
  favorites: readJson(storageKeys.favorites, []),
  recommendations: [],
  answers: {
    keywords: "wireless, cozy, gamer",
    relationship: "friend",
    occasion: "birthday",
    budget: "mid",
    ageRange: "18-25",
    interests: "music, pets, fitness",
    hobbies: "gaming, travel",
    style: "minimal"
  },
  insights: []
};

const elements = {
  form: document.getElementById("giftForm"),
  heroSearchButton: document.getElementById("heroSearchButton"),
  searchButton: document.getElementById("searchButton"),
  themePicker: document.getElementById("themePicker"),
  resultsGrid: document.getElementById("resultsGrid"),
  resultsSection: document.getElementById("resultsSection"),
  insightsList: document.getElementById("insightsList"),
  favoritesList: document.getElementById("favoritesList"),
  resultCount: document.getElementById("resultCount"),
  favoriteCount: document.getElementById("favoriteCount"),
  shareButton: document.getElementById("shareButton"),
  copyButton: document.getElementById("copyButton"),
  shareStatus: document.getElementById("shareStatus"),
  searchFeedback: document.getElementById("searchFeedback"),
  template: document.getElementById("resultCardTemplate")
};

document.documentElement.setAttribute("data-theme", state.theme);

bootstrap();

function bootstrap() {
  renderThemes();
  hydrateForm();
  bindEvents();

  if (!loadSharedState()) {
    runSearch();
  }

  renderFavorites();
}

function bindEvents() {
  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    triggerSearch();
  });

  elements.searchButton.addEventListener("click", () => triggerSearch({ scrollToResults: true }));
  elements.heroSearchButton.addEventListener("click", () => triggerSearch({ scrollToResults: true }));

  elements.shareButton.addEventListener("click", shareFavorites);
  elements.copyButton.addEventListener("click", copyShareLink);
}

function renderThemes() {
  elements.themePicker.innerHTML = "";

  themes.forEach((theme) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-chip" + (state.theme === theme.id ? " active" : "");
    button.innerHTML = `
      <span class="theme-preview" style="background:${theme.preview}"></span>
      <span class="theme-label">${escapeHtml(theme.label)}</span>
    `;
    button.addEventListener("click", () => {
      state.theme = theme.id;
      localStorage.setItem(storageKeys.theme, theme.id);
      document.documentElement.setAttribute("data-theme", theme.id);
      renderThemes();
    });
    elements.themePicker.appendChild(button);
  });
}

function hydrateForm() {
  Object.entries(state.answers).forEach(([key, value]) => {
    const field = document.getElementById(key);
    if (field) {
      field.value = value;
    }
  });
}

function getFormValues() {
  const formData = new FormData(elements.form);
  return Object.fromEntries(formData.entries());
}

function normalizeText(value) {
  return String(value || "").toLowerCase().trim();
}

function parseKeywords(input) {
  return String(input || "")
    .split(",")
    .map((item) => normalizeText(item))
    .filter(Boolean);
}

function computeScore(item, answers, typedKeywords) {
  const itemTags = item.tags.map(normalizeText);
  const interests = parseKeywords(answers.interests);
  const hobbies = parseKeywords(answers.hobbies);
  const style = normalizeText(answers.style);
  const keywordPool = [...typedKeywords, ...interests, ...hobbies, style].filter(Boolean);
  const relationshipBoost = relationshipSignals[normalizeText(answers.relationship)] || [];
  const occasionBoost = occasionSignals[normalizeText(answers.occasion)] || [];

  let score = 0;
  [...keywordPool, ...relationshipBoost, ...occasionBoost].forEach((signal) => {
    if (itemTags.includes(signal)) {
      score += 12;
    }
    if (item.name.toLowerCase().includes(signal)) {
      score += 6;
    }
  });

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
  const range = retailerPriceRanges[retailerId] || [1, 1.1];
  const midpoint = (item.minPrice + item.maxPrice) / 2;
  const adjusted = midpoint * ((range[0] + range[1]) / 2);
  return Math.max(5, Math.round(adjusted));
}

function generateRecommendations(answers) {
  const typedKeywords = parseKeywords(answers.keywords);
  const scored = giftSeed
    .map((gift) => ({
      ...gift,
      score: computeScore(gift, answers, typedKeywords)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 35);

  return scored
    .flatMap((gift) => {
      return retailers.map((retailer) => ({
        id: slugify(`${gift.name}-${retailer.id}`),
        title: gift.name,
        retailer: retailer.name,
        retailerId: retailer.id,
        categoryTags: gift.tags,
        score: gift.score,
        estimatedPrice: priceByRetailer(gift, retailer.id),
        url: retailer.searchUrl + encodeURIComponent(gift.name)
      }));
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 220);
}

function buildInsights(answers, recommendations) {
  const topRetailers = recommendations.reduce((accumulator, item) => {
    accumulator[item.retailer] = (accumulator[item.retailer] || 0) + 1;
    return accumulator;
  }, {});

  const sortedRetailers = Object.entries(topRetailers)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name]) => name);

  const ageInsight = {
    "13-17": "Trending for teens: collectible builds, gaming gear, and creative kits.",
    "18-25": "Most loved by 18-25: tech-forward gifts with social and travel utility.",
    "26-35": "Top 26-35 picks: premium daily-use upgrades and smart home tools.",
    "36-50": "Most saved by 36-50: practical home luxuries and wellness essentials.",
    "50+": "Most loved by 50+: comfort-focused picks and meaningful hobby gifts."
  };

  const relationshipInsight = {
    partner: "Partner matches are weighted toward romantic, premium, and style-forward gifts.",
    parent: "Parent matches prioritize thoughtful comfort and home improvements.",
    friend: "Friend picks boost fun, social, and hobby-centric gift ideas.",
    coworker: "Coworker picks favor safe, useful, desk-friendly options.",
    sibling: "Sibling picks lean into gaming, music, and personality-driven ideas.",
    child: "Child picks elevate playful learning and hands-on creativity."
  };

  return [
    ageInsight[answers.ageRange] || "Your age profile unlocked a balanced recommendation mix.",
    relationshipInsight[normalizeText(answers.relationship)] || "Relationship context sharpened gift intent and relevance.",
    sortedRetailers.length
      ? `Best availability right now: ${sortedRetailers.join(", ")}.`
      : "Retailer coverage expands as you add specific keywords and interests."
  ];
}

function triggerSearch(options = {}) {
  state.answers = getFormValues();
  setSearchBusy(true);
  window.requestAnimationFrame(() => {
    runSearch(options);
    setSearchBusy(false);
  });
}

function runSearch(options = {}) {
  state.recommendations = generateRecommendations(state.answers);
  state.insights = buildInsights(state.answers, state.recommendations);
  renderResults();
  renderInsights();
  const summary = `${state.recommendations.length} gift matches refreshed for ${state.answers.relationship} · ${state.answers.occasion} · ${state.answers.budget}.`;
  setSearchFeedback(summary, true);
  setShareStatus("Showing live results generated entirely in your browser.");

  elements.resultsSection.classList.remove("refreshed");
  void elements.resultsSection.offsetWidth;
  elements.resultsSection.classList.add("refreshed");

  if (options.scrollToResults) {
    elements.resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderResults() {
  elements.resultsGrid.innerHTML = "";
  elements.resultCount.textContent = `${state.recommendations.length} matches`;

  if (!state.recommendations.length) {
    elements.resultsGrid.innerHTML = '<div class="empty-state">No results yet. Adjust the questionnaire and try again.</div>';
    return;
  }

  state.recommendations.forEach((item) => {
    const fragment = elements.template.content.cloneNode(true);
    const card = fragment.querySelector(".result-card");
    const favoriteToggle = fragment.querySelector(".favorite-toggle");
    const link = fragment.querySelector(".result-link");
    const retailerBadge = fragment.querySelector(".retailer-badge");
    const scoreBadge = fragment.querySelector(".score-badge");
    const title = fragment.querySelector(".result-title");
    const price = fragment.querySelector(".result-price");
    const tagRow = fragment.querySelector(".tag-row");

    link.href = item.url;
    title.textContent = item.title;
    retailerBadge.textContent = item.retailer;
    scoreBadge.textContent = `${item.score} match`;
    price.textContent = `Estimated $${item.estimatedPrice}`;

    item.categoryTags.slice(0, 3).forEach((tag) => {
      const chip = document.createElement("span");
      chip.textContent = tag;
      tagRow.appendChild(chip);
    });

    const isSaved = state.favorites.some((favorite) => favorite.id === item.id);
    favoriteToggle.textContent = isSaved ? "♥" : "♡";
    favoriteToggle.classList.toggle("active", isSaved);
    favoriteToggle.addEventListener("click", () => toggleFavorite(item));

    card.dataset.id = item.id;
    elements.resultsGrid.appendChild(fragment);
  });
}

function renderInsights() {
  elements.insightsList.innerHTML = "";
  state.insights.forEach((insight) => {
    const listItem = document.createElement("li");
    listItem.textContent = insight;
    elements.insightsList.appendChild(listItem);
  });
}

function toggleFavorite(item) {
  const exists = state.favorites.some((favorite) => favorite.id === item.id);
  state.favorites = exists
    ? state.favorites.filter((favorite) => favorite.id !== item.id)
    : [item, ...state.favorites].slice(0, 24);

  writeJson(storageKeys.favorites, state.favorites);
  renderFavorites();
  renderResults();
}

function renderFavorites() {
  elements.favoritesList.innerHTML = "";
  elements.favoriteCount.textContent = `${state.favorites.length} saved`;

  if (!state.favorites.length) {
    elements.favoritesList.innerHTML = '<div class="empty-state">Save gift ideas here and generate a share link for friends or family.</div>';
    return;
  }

  state.favorites.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "favorite-item";
    wrapper.innerHTML = `
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.retailer)} · $${item.estimatedPrice}</span>
      <a href="${item.url}" target="_blank" rel="noreferrer noopener">Open retailer</a>
    `;
    elements.favoritesList.appendChild(wrapper);
  });
}

function shareFavorites() {
  if (!state.favorites.length) {
    setShareStatus("Save at least one gift before sharing.");
    return;
  }

  const shareUrl = buildShareUrl();
  if (navigator.share) {
    navigator
      .share({
        title: "Presii Gift List",
        text: "Check out this curated Presii gift list.",
        url: shareUrl
      })
      .then(() => setShareStatus("Share sheet opened."))
      .catch(() => setShareStatus("Share canceled."));
    return;
  }

  copyText(shareUrl)
    .then(() => setShareStatus("Share link copied to your clipboard."))
    .catch(() => setShareStatus(shareUrl));
}

function copyShareLink() {
  if (!state.favorites.length) {
    setShareStatus("Save at least one gift before copying a share link.");
    return;
  }

  const shareUrl = buildShareUrl();
  copyText(shareUrl)
    .then(() => setShareStatus("Share link copied to your clipboard."))
    .catch(() => setShareStatus(shareUrl));
}

function buildShareUrl() {
  const payload = {
    theme: state.theme,
    answers: state.answers,
    favorites: state.favorites.slice(0, 12)
  };
  const encoded = encodeShareState(payload);
  return `${window.location.origin}${window.location.pathname}?share=${encoded}`;
}

function loadSharedState() {
  const params = new URLSearchParams(window.location.search);
  const encoded = params.get("share");
  if (!encoded) {
    return false;
  }

  const shared = decodeShareState(encoded);
  if (!shared) {
    setShareStatus("The shared gift list could not be read.");
    return false;
  }

  state.theme = shared.theme || state.theme;
  state.answers = { ...state.answers, ...(shared.answers || {}) };
  state.favorites = Array.isArray(shared.favorites) ? shared.favorites : state.favorites;
  localStorage.setItem(storageKeys.theme, state.theme);
  writeJson(storageKeys.favorites, state.favorites);
  document.documentElement.setAttribute("data-theme", state.theme);
  hydrateForm();
  renderThemes();
  state.recommendations = generateRecommendations(state.answers);
  state.insights = buildInsights(state.answers, state.recommendations);
  renderResults();
  renderInsights();
  setShareStatus("Loaded a shared Presii list.");
  return true;
}

function encodeShareState(value) {
  return btoa(encodeURIComponent(JSON.stringify(value)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function decodeShareState(value) {
  try {
    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized + "===".slice((normalized.length + 3) % 4);
    return JSON.parse(decodeURIComponent(atob(padded)));
  } catch {
    return null;
  }
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function setShareStatus(message) {
  elements.shareStatus.textContent = message;
}

function setSearchFeedback(message, isActive = false) {
  elements.searchFeedback.textContent = message;
  elements.searchFeedback.classList.toggle("active", isActive);
}

function setSearchBusy(isBusy) {
  const label = isBusy ? "Matching gifts..." : "Find Gifts";
  elements.searchButton.textContent = label;
  elements.searchButton.classList.toggle("is-busy", isBusy);
  elements.heroSearchButton.classList.toggle("is-busy", isBusy);
}

function readJson(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function copyText(value) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value);
  }

  return new Promise((resolve, reject) => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
