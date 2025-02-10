// src/app/page.js
import React from 'react';
import Introduction from '../components/Introduction/Introduction.js';
import DishCard from '../components/DishCard/DishCard';
import SkeletonCard from '../components/SkeletonCard/SkeletonCard';
import image from '../../public/assets/restauranfood.jpg';
import Button from '@/components/Button/Button.js';

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

export default async function Home() {
  const menuData = await getMenuData();

  return (
    <div>
      <Introduction
        title="Welcome to Our Restaurant"
        description="Your gateway to the rich flavors of Italy, Greece, and Turkey. Savor authentic Mediterranean dishes, from Greek souvlaki and Italian pasta to Turkish kebabs, all crafted with the freshest ingredients."
        image={image}
        reverse={false}
      />
      <div className='container content-wrapper'>
        <header className='space-between flex-row'>
          <h2>This Week&apos;s Specials</h2>
          <Button to={'/reservation'}>Reserve a Table</Button>
        </header>
        <div className="menu-list">
          {menuData.length > 0 ? (
            menuData.map((dish) => <DishCard key={dish.id} dish={dish} />)
          ) : (
            Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}