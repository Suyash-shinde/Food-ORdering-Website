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
    { id: 1, name: 'Tomato Soup', category: 'Starter Veg', quantity: 1,  price: 60,  imageUrl: '/tomato.jpeg',  description:'olive oil,onion,carrot,cloves garlic,ripened tomatos',
        },
    { id: 2, name: 'Manchow Soup', category: 'Starter Veg', quantity: 1,  price: 70, imageUrl: '/chicken manchaw soup.jpg',  description:'boiled noodles,salt,corn starch,oil,cabbage' ,
     },
    { id: 3, name: 'Fry Papad', category: 'Starter Veg', quantity: 1,  price: 60, imageUrl: '/fry papad.jpg',  description:'shallow fry papad,chopped onion,chopped tomato,coriander leaves,chat masala.',
    },
    { id: 4, name: 'Chicken Lolipop', category: 'Starter NonVeg', quantity: 1,  price: 220,  imageUrl: '/chicken lollypop.jpg',  description:'lemon juice,black pepper,chilli powder,ginger garlic paste,soy sauce,ketchup,minced chickeen',
     },
    { id: 5, name: 'Chicken 65', category: 'Starter NonVeg', quantity: 1,  price:200, imageUrl: '/chicken65.jpg',  description:'chicken thighs,curd,black peppercorns,cumin,ginger garlic passte',
     },
    { id: 6, name: 'Mix Veg', category: 'Main Course Veg', quantity: 1,  price: 160, imageUrl: '/mix veg.jpg',  description:'cashew nuts,ginger,onion,french beans,carrot,floret',
     },
    { id: 7, name: 'Panner Handi', category: 'Main Course Veg', quantity: 1,  price: 260,  imageUrl: '/paneer handi.jpg',  description:'paneer,onion,ginger,chillli poewder',
     },
    { id: 8, name: 'Kaju Curry', category: 'Main Course Veg', quantity: 1,  price: 210, imageUrl: '/kaju curry.jpg',  description:'roasted cashew,cashew,tomato,ginger',
     },
    { id: 9, name: 'Dal Fry', category: 'Main Course Veg', quantity: 1,  price: 160, imageUrl: '/dal fry.jpg',  description:'toor dal,salt,mustard seeds.' ,
     },
    { id: 10, name: 'Chicken Tikka Masala', category: 'Main Course NonVeg', quantity: 1,  price: 350, imageUrl: '/chicken tikka masala.jpg',  description:'bone in chicken piece, toasted cumin, toasted paprika,coriander seeds,turmeric.' ,
     },
    { id: 11, name: 'Butter Chicken', category: 'Main Course NonVeg', quantity: 1,  price: 349,imageUrl: '/butter chicken.jpg', description:'chicken,butter,refined oil,ginger garlic paste'},

    { id: 12, name: 'Chicken Tawa', category: 'Main Course NonVeg', quantity: 1,  price: 400, imageUrl: '/chicken tawa.jpg',  description:'Chicken,onion,ginger garlic paste,tomato,cashews' ,
     },
     { id: 13, name: 'Jeera Rice', category: 'Rice and Biryani', quantity: 1,  price: 100, imageUrl: '/jeera rice.jpg',  description:'basmati rice, ghee,cumin seeds,bay leaf,elaichi' ,
    },
    { id: 14, name: 'Veg Pulav', category: 'Rice and Biryani', quantity: 1,  price: 120, imageUrl: '/green peas pulav.jpg',  description:'oil.onion,ginger garlic paste,green chillies,mint,peas,' ,
     },
     { id: 15, name: 'Dal Khichdi', category: 'Rice and Biryani', quantity: 1,  price: 150, imageUrl: '/daal khichdi.jpg',  description:'rice,dal(tur,moong,chana,masoor,) garlic, tomato ,chilly' ,
     },
     { id: 16, name: 'Chicken Biryani', category: 'Rice and Biryani', quantity: 1,  price: 250, imageUrl: '/chicken dum biryani.jpg',  description:'chicken,boiled rice,water,oil,ginger garlic pate' ,
     },
     { id: 17, name: 'Mutton Biryani', category: 'Rice and Biryani', quantity: 1,  price: 390, imageUrl: '/mutton biryani.jpg',  description:'mutton,rice,ginger,garlic clove,green chilli,coriander leaves' ,
     },
     { id: 18, name: 'Egg Biryani', category: 'Rice and Biryani', quantity: 1,  price: 150, imageUrl: '/egg biryani.jpg',  description:'basmati rice,green cardamom,cinnamom,bay leaf,egg' ,
     },
     { id: 19, name: 'Naan plain', category: 'Breads', quantity: 1,  price: 20, imageUrl: '/naan.jpg',  description:'all purpose flour,refined oil,butter,curd,salt' ,
     },
     { id: 20, name: 'Butter Garlic Naan', category: 'Breads', quantity: 1,  price: 25, imageUrl: '/butter garlic naan.jpg',  description:'wheat flour,salt,baking powder,curd water' ,
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