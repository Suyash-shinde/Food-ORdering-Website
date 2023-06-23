import React from 'react';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Tomato Soup', category: 'Starter', price: 140, imageUrl: '/tomato.jpeg' },
    { id: 2, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg' },
    { id: 3, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg' },
    { id: 4, name: 'Tomato Soup', category: 'Starter', price: 140, imageUrl: '/tomato.jpeg' },
    { id: 5, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg' },
    { id: 6, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg' },
    { id: 7, name: 'Tomato Soup', category: 'Starter', price: 140, imageUrl: '/tomato.jpeg' },
    { id: 8, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg' },
    { id: 9, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg' },
    { id: 10, name: 'Tomato Soup', category: 'Starter', price: 140, imageUrl: '/tomato.jpeg' },
    { id: 11, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg' },
    { id: 12, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg' },
    { id: 13, name: 'Tomato Soup', category: 'Starter', price: 140, imageUrl: '/tomato.jpeg' },
    { id: 14, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg' },
    { id: 15, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg' },
    { id: 16, name: 'Tomato Soup', category: 'Starter', price: 140, imageUrl: '/tomato.jpeg' },
    { id: 17, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg' },
    { id: 18, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg' },
    { id: 19, name: 'Tomato Soup', category: 'Starter', price: 140, imageUrl: '/tomato.jpeg' },
    { id: 20, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg' },
  ];

  return (
    <div className="bg-rose-300">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-black mb-4">Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {menuItems.map(item => (
            <div key={item.id} className="bg-white shadow rounded-lg p-4">
              <p className="text-gray-600 font-bold  mb-1">{item.category}</p>
              <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover mb-4 rounded-md" />
              <h2 className="text-xl text-gray-600 font-bold mb-2">{item.name}</h2>
              <p className="text-gray-600">&#8377;{item.price}</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
