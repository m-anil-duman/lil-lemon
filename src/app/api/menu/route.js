// app/api/menu/route.js
export async function GET() {
  const response = await fetch('https://little-lemon-restaurant-database.onrender.com/menu');
  if (!response.ok) {
    return new Response('Failed to fetch menu data', { status: 500 });
  }

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
