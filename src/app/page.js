import React from 'react';
import Introduction from '../components/Introduction/Introduction.js';
import DishCard from '../components/DishCard/DishCard';
import SkeletonCard from '../components/SkeletonCard/SkeletonCard';
import image from '../../public/assets/restauranfood.jpg';
import Button from '@/components/Button/Button.js';

export default async function Home() {
  let menuData = [];
  let error = null;

  try {
    const response = await fetch('https://little-lemon-restaurant-database.onrender.com/menu', {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 60 } // Revalidate every minute as a fallback
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    if (!text) {
      throw new Error('Empty response received');
    }

    try {
      menuData = JSON.parse(text);
    } catch (e) {
      throw new Error(`JSON parsing failed: ${e.message}\nReceived: ${text}`);
    }
  } catch (err) {
    console.error('Error fetching menu data:', err);
    error = err.message;
  }

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
          {error ? (
            <div className="error-message">
              Unable to load menu items. Please try again later.
            </div>
          ) : menuData.length > 0 ? (
            menuData.map((dish) => <DishCard key={dish.id} dish={dish} />)
          ) : (
            // Show skeleton loading state
            Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
