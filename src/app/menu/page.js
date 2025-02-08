// src/app/menu/page.js
import React from 'react';
import Introduction from '../../components/Introduction/Introduction';
import DishCard from '../../components/DishCard/DishCard';
import SkeletonCard from '../../components/SkeletonCard/SkeletonCard';
import image from '../../../public/assets/Mario and Adrian A.jpg';
import './menu.css';

async function fetchMenuData() {
  try {
    const response = await fetch('https://little-lemon-restaurant-database.onrender.com/menu', {
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('Failed to fetch menu data:', response.status);
      return [];
    }

    // Read as text first to ensure we have a valid JSON payload.
    const text = await response.text();
    return text ? JSON.parse(text) : [];
  } catch (error) {
    console.error('Error fetching menu data:', error);
    return [];
  }
}

export default async function Menu() {
  const menuData = await fetchMenuData();

  const renderDish = (category) => (
    <div className="menuPart">
      <div className="menuPartTitle">
        <h2>{category}</h2>
      </div>
      <div className="menu-list">
        {menuData.length > 0
          ? menuData
            .filter((dish) => dish.category === category)
            .map((dish) => <DishCard key={dish.id} dish={dish} />)
          : // Fallback UI while data is not available
          Array.from({ length: 3 }).map((_, index) => <SkeletonCard key={index} />)}
      </div>
    </div>
  );

  return (
    <section>
      <div className="mainSection">
        <Introduction
          title="Welcome to Our Restaurant"
          subtitle="Best place to enjoy delicious meals."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna."
          image={image}
          type_for_description="h3"
          reverse
        />
        <div className="main-content container">
          <section className="menu-section mb-20">
            <h1>Our Menu</h1>
            <p>Explore our delicious meals.</p>
            {renderDish('Entrees')}
            {renderDish('Appetizers')}
            {renderDish('Desserts')}
          </section>
        </div>
      </div>
    </section>
  );
}
