const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export async function fetchRecommendations(payload) {
  const response = await fetch(`${API_BASE}/api/recommendations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Failed to fetch recommendations");
  }

  return response.json();
}

export async function toggleFavorite(userId, gift) {
  const response = await fetch(`${API_BASE}/api/favorites`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, gift })
  });

  if (!response.ok) {
    throw new Error("Failed to save favorite");
  }

  return response.json();
}

export async function fetchFavorites(userId) {
  const response = await fetch(`${API_BASE}/api/favorites/${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch favorites");
  }

  return response.json();
}

export async function createShareList(payload) {
  const response = await fetch(`${API_BASE}/api/lists`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Failed to create shareable list");
  }

  return response.json();
}

export async function fetchShareList(id) {
  const response = await fetch(`${API_BASE}/api/lists/${id}`);
  if (!response.ok) {
    throw new Error("Shared list not found");
  }

  return response.json();
}
