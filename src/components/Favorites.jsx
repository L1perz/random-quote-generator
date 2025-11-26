import React from 'react';

export default function Favorites({ favorites, onSelect }) {
  return (
    <div className="favorites">
      <h3>Избранное</h3>

      {favorites.length === 0 && <p className="empty">Нет сохранённых цитат</p>}

      <ul className="fav-list">
        {favorites.map(f => (
          <li key={f.id} className="fav-item" onClick={() => onSelect(f)}>
            <p className="fav-text">“{f.text}”</p>
            <span className="fav-author">— {f.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
