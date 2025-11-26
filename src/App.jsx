import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import QuoteBox from './components/QuoteBox';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import { getRandomQuote, getAllQuotes } from './services/quotes';
import './styles.css';

const LS_KEY = 'rqg_favorites';

function loadFavorites() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [quote, setQuote] = useState(null);
  const [favorites, setFavorites] = useState(loadFavorites());

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(favorites));
  }, [favorites]);

  function handleNew() {
    setQuote(getRandomQuote());
  }

  function handleToggleFavorite(q) {
    setFavorites(prev => {
      const exists = prev.find(x => x.id === q.id);
      if (exists) return prev.filter(x => x.id !== q.id);
      return [...prev, q];
    });
  }

  function handleSelectFavorite(q) {
    setQuote(q);
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <QuoteBox
          quote={quote}
          onNew={handleNew}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={!!favorites.find(f => quote && f.id === quote.id)}
        />
        <Favorites favorites={favorites} onSelect={handleSelectFavorite} />
      </main>
      <Footer />
    </div>
  );
}
