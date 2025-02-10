// src/app/menu/page.js
import React from 'react';
import Introduction from '@/components/Introduction/Introduction';
import DishCard from '../../components/DishCard/DishCard';
import SkeletonCard from '../../components/SkeletonCard/SkeletonCard';
import image from '../../../public/assets/Mario and Adrian A.jpg';
import './menu.css';
// Mark the page as static
export const dynamic = 'force-static';

async function getMenuData() {
  try {
    const response = await fetch('https://little-lemon-restaurant-database.onrender.com/menu');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching menu data:', error);
    return [];
  }
}

export default async function Menu() {
  const menuData = await getMenuData();

  const renderDish = (category) => (
    <div className="menuPart" key={category}>
      <div className="menuPartTitle">
        <h2>{category}</h2>
      </div>
      <div className="menu-list">
        {menuData.length > 0 ? (
          menuData
            .filter((dish) => dish.category === category)
            .map((dish) => <DishCard key={dish.id} dish={dish} />)
        ) : (
          Array.from({ length: 3 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        )}
      </div>
    </div>
  );

  return (
    <section>
      <div className="mainSection">
        <Introduction
          title="Welcome to Our Restaurant"
          subtitle="Best place to enjoy delicious meals."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={image}
          type_for_description="h3"
          reverse
        />
        <div className="main-content container">
          <section className="menu-section mb-20">
            <h1>Our Menu</h1>
            <p>Explore our delicious meals.</p>
            {menuData.length === 0 ? (
              <div className="error-message">
                Unable to load menu items. Please try again later.
              </div>
            ) : (
              <>
                {renderDish('Entrees')}
                {renderDish('Appetizers')}
                {renderDish('Desserts')}
              </>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}