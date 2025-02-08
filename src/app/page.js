// src/app/page.js
import React from 'react';
import Introduction from '../components/Introduction/Introduction.js';
import DishCard from '../components/DishCard/DishCard';
import image from '../../public/assets/restauranfood.jpg';
import Button from '@/components/Button/Button.js';

export default async function Home() {
  let menuData = [];

  try {
    const response = await fetch('https://little-lemon-restaurant-database.onrender.com/menu', {
      cache: 'no-store', // Disable caching for dynamic data
    });

    if (!response.ok) {
      console.error(`Failed to fetch menu data: ${response.status}`);
    } else {
      // Read the response as text first so we can safely check for empty content.
      const text = await response.text();
      menuData = text ? JSON.parse(text) : [];
    }
  } catch (error) {
    console.error('Error fetching menu data:', error);
  }

  return (
    <div>
      <Introduction
        title="Welcome to Our Restaurant"
        description="Your gateway to the rich flavors of Italy, Greece, and Turkey. Savor authentic Mediterranean dishes, from Greek souvlaki and Italian pasta to Turkish kebabs, all crafted with the freshest ingredients. Enjoy our warm ambiance and let us take you on a culinary journey. Experience the essence of the Mediterranean at The Little Lemon Restaurant!"
        image={image}
        reverse={false}
      />
      <div className='container content-wrapper'>
        <header className='space-between flex-row'>
          <h2>This Week&apos;s Specials</h2>
          <Button to={'/reservation'}>Reserve a Table</Button>
        </header>
        <div className="menu-list">
          {menuData.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </div>
  );
}
