const lists = new Map();
const favorites = new Map();

function createList(payload) {
  const id = Math.random().toString(36).slice(2, 10);
  const record = {
    id,
    title: payload.title || "Shared Gift List",
    createdAt: new Date().toISOString(),
    items: payload.items || [],
    answers: payload.answers || {}
  };

  lists.set(id, record);
  return record;
}

function getList(id) {
  return lists.get(id) || null;
}

function saveFavorite(userId, gift) {
  const existing = favorites.get(userId) || [];
  const hasGift = existing.some((item) => item.id === gift.id);
  const updated = hasGift
    ? existing.filter((item) => item.id !== gift.id)
    : [gift, ...existing].slice(0, 100);

  favorites.set(userId, updated);
  return updated;
}

function getFavorites(userId) {
  return favorites.get(userId) || [];
}

module.exports = {
  createList,
  getList,
  saveFavorite,
  getFavorites
};
