import { useEffect, useMemo, useState } from "react";
import {
  Compass,
  Heart,
  Link2,
  Search,
  Sparkles,
  Share2
} from "lucide-react";
import {
  createShareList,
  fetchFavorites,
  fetchRecommendations,
  fetchShareList,
  toggleFavorite
} from "./api";
import "./App.css";

const themeGroups = {
  light: [
    { id: "solid-white", label: "Solid White" },
    { id: "solid-light-grey", label: "Solid Light Grey" },
    { id: "chastity", label: "Chastity (Lavender to Gold)" },
    { id: "water", label: "Water (Blue to Ice)" },
    { id: "wind", label: "Wind (Grey to Light Blue)" }
  ],
  dark: [
    { id: "solid-black", label: "Solid Black" },
    { id: "solid-dark-grey", label: "Solid Dark Grey" },
    { id: "earth", label: "Earth (Green to Blue)" },
    { id: "lust", label: "Lust (Red to Black)" },
    { id: "fire", label: "Fire (Red to Yellow)" }
  ]
};

const initialAnswers = {
  ageRange: "18-25",
  budget: "mid",
  relationship: "friend",
  occasion: "birthday",
  interests: "tech, music",
  hobbies: "gaming, travel",
  style: "minimal"
};

function App() {
  const [theme, setTheme] = useState("water");
  const [answers, setAnswers] = useState(initialAnswers);
  const [keywords, setKeywords] = useState("wireless, creative, premium");
  const [recommendations, setRecommendations] = useState([]);
  const [insights, setInsights] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const userId = "guest-user";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const readSharedList = async () => {
      const listId = new URLSearchParams(window.location.search).get("list");
      if (!listId) return;

      try {
        const list = await fetchShareList(listId);
        setRecommendations(list.items || []);
      } catch {
        setShareUrl("Shared list is not available anymore.");
      }
    };

    readSharedList();
  }, []);

  useEffect(() => {
    fetchFavorites(userId)
      .then((data) => setFavorites(data.favorites || []))
      .catch(() => setFavorites([]));
  }, []);

  const favoriteIds = useMemo(() => new Set(favorites.map((item) => item.id)), [favorites]);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setShareUrl("");

    try {
      const data = await fetchRecommendations({ answers, keywords });
      setRecommendations(data.recommendations || []);
      setInsights(data.insights || []);
    } catch {
      setInsights(["Recommendation service is temporarily unavailable."]);
    } finally {
      setLoading(false);
    }
  };

  const handleFavorite = async (gift) => {
    try {
      const result = await toggleFavorite(userId, gift);
      setFavorites(result.favorites || []);
    } catch {
      setShareUrl("Could not update favorites right now.");
    }
  };

  const generateShare = async () => {
    if (!favorites.length) {
      setShareUrl("Save at least one gift to create a shareable list.");
      return;
    }

    try {
      const list = await createShareList({
        title: "My Presii Favorites",
        items: favorites,
        answers
      });
      setShareUrl(list.shareUrl);
    } catch {
      setShareUrl("Unable to generate a share link.");
    }
  };

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Presii Gift Studio</p>
          <h1>The Netflix of Presents</h1>
          <p>
            Answer a quick personality questionnaire, add keywords, and instantly get
            hundreds of curated, shoppable gift links across top retailers.
          </p>
        </div>
        <div className="hero-controls">
          <label htmlFor="themePicker">Theme</label>
          <select
            id="themePicker"
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
          >
            <optgroup label="Light Themes">
              {themeGroups.light.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </optgroup>
            <optgroup label="Dark Themes">
              {themeGroups.dark.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </header>

      <main className="content-grid">
        <section className="panel form-panel">
          <h2>
            <Compass size={18} /> Smart Gift Questionnaire
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="field-grid">
              <label>
                Age Range
                <select name="ageRange" value={answers.ageRange} onChange={onInputChange}>
                  <option value="13-17">13-17</option>
                  <option value="18-25">18-25</option>
                  <option value="26-35">26-35</option>
                  <option value="36-50">36-50</option>
                  <option value="50+">50+</option>
                </select>
              </label>

              <label>
                Budget
                <select name="budget" value={answers.budget} onChange={onInputChange}>
                  <option value="low">Under $40</option>
                  <option value="mid">$40-$120</option>
                  <option value="high">$120-$220</option>
                  <option value="luxury">$220+</option>
                </select>
              </label>

              <label>
                Relationship
                <select name="relationship" value={answers.relationship} onChange={onInputChange}>
                  <option value="partner">Partner</option>
                  <option value="parent">Parent</option>
                  <option value="friend">Friend</option>
                  <option value="coworker">Coworker</option>
                  <option value="sibling">Sibling</option>
                  <option value="child">Child</option>
                </select>
              </label>

              <label>
                Occasion
                <select name="occasion" value={answers.occasion} onChange={onInputChange}>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="holiday">Holiday</option>
                  <option value="graduation">Graduation</option>
                  <option value="thankyou">Thank You</option>
                  <option value="justbecause">Just Because</option>
                </select>
              </label>

              <label>
                Interests (comma-separated)
                <input name="interests" value={answers.interests} onChange={onInputChange} />
              </label>

              <label>
                Hobbies (comma-separated)
                <input name="hobbies" value={answers.hobbies} onChange={onInputChange} />
              </label>

              <label>
                Style
                <input name="style" value={answers.style} onChange={onInputChange} />
              </label>

              <label>
                Keywords for gift search
                <input
                  value={keywords}
                  onChange={(event) => setKeywords(event.target.value)}
                  placeholder="dog owner, productivity, adventure"
                />
              </label>
            </div>

            <button className="primary-btn" type="submit" disabled={loading}>
              <Search size={16} /> {loading ? "Searching gifts..." : "Find Perfect Gifts"}
            </button>
          </form>
        </section>

        <section className="panel insight-panel">
          <h2>
            <Sparkles size={18} /> AI Gift Insights
          </h2>
          {insights.length ? (
            <ul className="insight-list">
              {insights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>Run a recommendation search to unlock trend and audience insights.</p>
          )}

          <div className="share-actions">
            <button className="secondary-btn" onClick={generateShare}>
              <Share2 size={16} /> Share Favorite List
            </button>
            {shareUrl ? (
              <a href={shareUrl.startsWith("http") ? shareUrl : "#"} target="_blank" rel="noreferrer">
                <Link2 size={16} /> {shareUrl}
              </a>
            ) : null}
          </div>
        </section>
      </main>

      <section className="results panel">
        <div className="results-head">
          <h2>Shoppable Gift Matches ({recommendations.length})</h2>
          <p>Click any card to jump directly to retailer search pages.</p>
        </div>

        <div className="gift-grid">
          {recommendations.map((item) => (
            <article key={item.id} className="gift-card">
              <a href={item.url} target="_blank" rel="noreferrer">
                <h3>{item.title}</h3>
                <p>{item.retailer}</p>
                <p className="price">Est. ${item.estimatedPrice}</p>
                <div className="tags">
                  {item.categoryTags?.slice(0, 3).map((tag) => (
                    <span key={`${item.id}-${tag}`}>{tag}</span>
                  ))}
                </div>
              </a>
              <button
                type="button"
                className={favoriteIds.has(item.id) ? "favorite active" : "favorite"}
                onClick={() => handleFavorite(item)}
              >
                <Heart size={16} />
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
