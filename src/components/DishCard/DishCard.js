// src/components/DishCard/DishCard.js
import React from 'react';
import Image from 'next/image';
import './DishCard.css';

const DishCard = ({ dish }) => {
  // Use `dish-image` directly since it already includes `menu-images/`
  const imageUrl = `/${dish['dish-image']}`; // Prepend '/' to make it relative to `public/`

  return (
    <article className="dish-card">
      <div className="dish-card-image">
        <Image
          className="DishImage"
          src={imageUrl}
          alt={dish['dish-name']}
          width={400} // Adjust dimensions as needed
          height={300} // Adjust dimensions as needed
        />
      </div>
      <div className="dish-card-content">
        <h3 className="dish-card-title">{dish['dish-name']}</h3>
        <p className="dish-card-price">${dish['dish-price']}</p>
        <p className="dish-card-details">{dish['dish-details']}</p>
      </div>
    </article>
  );
};

export default DishCard;
