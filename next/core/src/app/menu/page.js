'use client'
import React, { useState,useEffect  } from 'react';
import Navbar from '@/src/app/Components/Navbar';
import Kitchen from '../kitchen/page';
import Order from '../order/page'

const MenuPage = () => {

  const [cartItems, setCartItems] = useState([]);
  const [kitchenItems, setKitchenItems] = useState([]);
  const [OrderItems, setOrderItems] = useState([]);
  const clearCartItems = () => {
    //<Kitchen cartItems={cartItems} />        
    //const storedItems = localStorage.getItem('cartItems');
    //localStorage.setItem('kitchenItems', localStorage.getItem('cartItems'));
   // localStorage.setItem('OrderItems', localStorage.getItem('cartItems'));
   let updatedCartItems = kitchenItems;
   cartItems.forEach(item => {
    let matchingKItem = kitchenItems.find((curitem) => item.id == curitem.id);
    console.log("adding item to Kitchen Item: " + matchingKItem);
    if (matchingKItem == undefined || matchingKItem == null || matchingKItem.length == 0)
    {
      //setCartItems((prevCartItems) => [...prevCartItems, item]);
      //updatedCartItems = [...kitchenItems, item];    
      updatedCartItems.push(item); // Add the item to updatedCartItems if it doesn't exist
  
      console.log("adding item to Kitchen Item: " + updatedCartItems.length);
    }
    else {
      updatedCartItems = kitchenItems.map((curitem) =>
        curitem.id === item.id ? { ...curitem, quantity: curitem.quantity + 1 } : curitem
      );
      //setKitchenItems(updatedCartItems);
      console.log("updating item to Kitchen Item: " + updatedCartItems.length);
    }
  });
  setKitchenItems(updatedCartItems);
  
  let updatedCartItemsOrder = OrderItems;
  cartItems.forEach(item => {
   let matchingOItem = OrderItems.find((curitem) => item.id == curitem.id);
   if (matchingOItem == undefined || matchingOItem == null || matchingOItem.length == 0)
   {
    updatedCartItemsOrder.push(item);
   }
   else {
    updatedCartItemsOrder =  OrderItems.map((curitem) =>
       curitem.id === item.id ? { ...curitem, quantity: curitem.quantity + 1 } : curitem
     );
   }
  });
   setOrderItems(updatedCartItemsOrder);
    localStorage.removeItem('cartItems');    
    setCartItems([]);
  };
  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    //debugger; 
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

    const kitchenItemsO = localStorage.getItem('KitchenItems');
    //debugger; 
    if (kitchenItemsO) {
      try {
        const parsedKitchenItems = JSON.parse(kitchenItemsO);
        setKitchenItems(parsedKitchenItems);
      } catch (error) {
        console.error('Error parsing stored items:', error);
        // Handle the error, e.g., clear the invalid stored items
        //localStorage.removeItem('cartItems');
      }
    }
  }, []);
  
  const handleAddToCart = (item) => {
    let matchingItem = cartItems.find((curitem) => item.id == curitem.id);
    if (matchingItem == undefined || matchingItem == null || matchingItem.length == 0)
    {
      //setCartItems((prevCartItems) => [...prevCartItems, item]);
      const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    //setKitchenItems(updatedCartItems);
  // setOrderItems(updatedCartItems);
    }
    else {
      const updatedCartItems = cartItems.map((curitem) =>
        curitem.id === item.id ? { ...curitem, quantity: curitem.quantity + 1 } : curitem
      );
      setCartItems(updatedCartItems);
     // setKitchenItems(updatedCartItems);
     // setOrderItems(updatedCartItems);
    }
    
  };
  
  useEffect(() => {
    console.log("saving localStorage");
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    //debugger;
    if (kitchenItems && kitchenItems.length > 0) {
      localStorage.setItem('KitchenItems', JSON.stringify(kitchenItems));
    }
    localStorage.setItem('OrderItems', JSON.stringify(OrderItems)); 
  }, [cartItems]);
  const increase = (item) => {
    const updatedItems = cartItems.map((curitem) => {
      if (curitem.id === item.id) {
        return {
          ...curitem,
          quantity: curitem.quantity + 1
        };
      }
      return curitem;
    });
  
    setCartItems(updatedItems);
  };
  const decrease = (item) => {
    const updatedItems = cartItems.map((curitem) => {
      if (curitem.id === item.id) {
        const updatedQuantity = curitem.quantity - 1;
        if (updatedQuantity < 1) {
          // Quantity becomes less than 1, remove the item from the cart
          return null;
        }
        return {
          ...curitem,
          quantity: updatedQuantity
        };
      }
      return curitem;
    });
  
    // Filter out the null values to remove the item from the cart
    const filteredItems = updatedItems.filter((item) => item !== null);
  
    setCartItems(filteredItems);
  };
  
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'KitchenItems') {
        const kitchenItemsO = localStorage.getItem('KitchenItems');
        //debugger; 
        if (kitchenItemsO) {
          try {
            const parsedKitchenItems = JSON.parse(kitchenItemsO);
            setKitchenItems(parsedKitchenItems);
          } catch (error) {
            console.error('Error parsing stored items:', error);
            // Handle the error, e.g., clear the invalid stored items
            //localStorage.removeItem('cartItems');
          }
        }
      }
    };
  
    window.addEventListener('storage', handleStorageChange);
  
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  const menuItems = [
    { id: 1, name: 'Tomato Soup', category: 'Starter', quantity: 1,  price: 140,  imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
      },
    { id: 2, name: 'Manchow Soup', category: 'Starter', quantity: 1,  price: 148, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 3, name: 'Masala Papad', category: 'Starter', quantity: 1,  price: 120, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 4, name: 'Tomato Soup', category: 'Starter', quantity: 1,  price: 140,  imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 5, name: 'Manchow Soup', category: 'Starter', quantity: 1,  price: 148, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 6, name: 'Masala Papad', category: 'Starter', quantity: 1,  price: 120, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 7, name: 'Tomato Soup', category: 'Starter', quantity: 1,  price: 140,  imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 8, name: 'Manchow Soup', category: 'Starter', quantity: 1,  price: 148, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 9, name: 'Masala Papad', category: 'Starter', quantity: 1,  price: 120, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 10, name: 'Tomato Soup', category: 'Starter', quantity: 1,  price: 140, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
     },
    { id: 11, name: 'Manchow Soup', category: 'Starter', quantity: 1,  price: 148,imageUrl: '/tomato.jpeg' },
    { id: 12, name: 'Masala Papad', category: 'Starter', quantity: 1,  price: 120, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Somato BSoup: A vymphony of vipened tomatoes, enfused with aromatic herbs.' ,
     },
    
  ];

  return (
    <>
    <Navbar  />
 
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
    <order  cartItems={cartItems} />

    <Navbar cartItems={cartItems} clearCartItems={clearCartItems} decrease={decrease} increase={increase} />
    

    </>
  );
  };

export default MenuPage;