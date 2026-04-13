require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { generateRecommendations } = require("./services/recommendationService");
const { buildInsights } = require("./services/insightService");
const { createList, getList, saveFavorite, getFavorites } = require("./store/dataStore");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "presii-gift-engine" });
});

app.post("/api/recommendations", (req, res) => {
  const recommendations = generateRecommendations(req.body || {});
  const insights = buildInsights(req.body?.answers || {}, recommendations);

  res.json({
    total: recommendations.length,
    recommendations,
    insights
  });
});

app.post("/api/lists", (req, res) => {
  const list = createList(req.body || {});
  const baseUrl = process.env.PUBLIC_URL || "http://localhost:5173";
  res.status(201).json({
    ...list,
    shareUrl: `${baseUrl}?list=${list.id}`
  });
});

app.get("/api/lists/:id", (req, res) => {
  const list = getList(req.params.id);
  if (!list) {
    return res.status(404).json({ message: "List not found" });
  }
  return res.json(list);
});

app.post("/api/favorites", (req, res) => {
  const { userId, gift } = req.body || {};
  if (!userId || !gift) {
    return res.status(400).json({ message: "userId and gift are required" });
  }

  const updated = saveFavorite(userId, gift);
  return res.json({ userId, favorites: updated });
});

app.get("/api/favorites/:userId", (req, res) => {
  const userFavorites = getFavorites(req.params.userId);
  res.json({ userId: req.params.userId, favorites: userFavorites });
});

app.listen(port, () => {
  console.log(`Presii API listening on http://localhost:${port}`);
});
