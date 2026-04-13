function buildInsights(answers = {}, recommendations = []) {
  const topRetailers = recommendations
    .reduce((acc, item) => {
      acc[item.retailer] = (acc[item.retailer] || 0) + 1;
      return acc;
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

  const insights = [
    ageInsight[answers.ageRange] || "Your age profile unlocked a balanced recommendation mix.",
    relationshipInsight[(answers.relationship || "").toLowerCase()] || "Relationship context sharpened gift intent and relevance.",
    sortedRetailers.length
      ? `Best availability right now: ${sortedRetailers.join(", ")}.`
      : "Retailer coverage expands as you add specific keywords and interests."
  ];

  return insights;
}

module.exports = {
  buildInsights
};
