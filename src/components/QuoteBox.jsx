import React from 'react';

export default function QuoteBox({ quote, onNew, onToggleFavorite, isFavorite }) {
  if (!quote) return null;
  return (
    <div className="quote-box">
      <div className="quote-text">“{quote.text}”</div>
      <div className="quote-author">— {quote.author}</div>
      <div className="controls">
        <button onClick={onNew}>Новая цитата</button>
        <button onClick={() => onToggleFavorite(quote)}>
          {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        </button>
      </div>
    </div>
  );
}