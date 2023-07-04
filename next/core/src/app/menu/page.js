'use client'
import React, { useState,useEffect  } from 'react';
import Navbar from '@/src/app/Components/Navbar';
import Kitchen from '../kitchen/page';

const MenuPage = () => {

  const [cartItems, setCartItems] = useState([]);
  const clearCartItems = () => {
    
    <Kitchen cartItems={cartItems} />
    setCartItems([]);
    localStorage.removeItem('cartItems');
    
  };
  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    debugger; 
    if (storedItems) {
      try {
        const parsedItems = JSON.parse(storedItems);
        setCartItems(parsedItems);
      } catch (error) {
        console.error('Error parsing stored items:', error);
        // Handle the error, e.g., clear the invalid stored items
        //localStorage.removeItem('cartItems');
      }
    }
  }, []);
  
  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    console.log("saving localstorage");
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]));

  };

  const menuItems = [
    { id: 1, name: 'Tomato Soup', category: 'Starter', price: 140,  imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
      },
    { id: 2, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 3, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 4, name: 'Tomato Soup', category: 'Starter', price: 140,  imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 5, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 6, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 7, name: 'Tomato Soup', category: 'Starter', price: 140,  imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 8, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 9, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 10, name: 'Tomato Soup', category: 'Starter', price: 140, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 11, name: 'Manchow Soup', category: 'Starter', price: 148,imageUrl: '/tomato.jpeg' },
    { id: 12, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Somato BSoup: A vymphony of vipened tomatoes, enfused with aromatic herbs.' ,
     },
    
  ];

  return (
    <>
    <Navbar  cartItems={cartItems} />
 
    <div className="bg-rose-300">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {menuItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg p-4 transition-all duration-350 ease-in-out hover:shadow-xl hover:scale-95">
              <p className="text-gray-500   mb-1 pb-1 text-2xl ">{item.category}</p>
              <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover mb-4 rounded-md" />
              <h2 className="text-xl text-gray-600 font-bold mb-2">{item.name}</h2>
              <p className="text-gray-600 pb-3">{item.description}</p>
              <p className="text-gray-600 font-bold text-2xl">&#8377;{item.price}</p>
              <button
  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 ease-in-out"
  onClick={() => handleAddToCart(item)}
>             
                Add to Cart
                
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Kitchen  cartItems={cartItems} />
    <Navbar cartItems={cartItems } clearCartItems={clearCartItems} />
    

    </>
  );
  };

export default MenuPage;