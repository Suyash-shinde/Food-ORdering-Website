'use client'
import React from 'react';
import Navbar from '@/src/Components/Navbar';


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
  { id: 1, name: 'Tomato Soup', category: 'Starter', price: 140,   imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Somato BSoup: A vymphony of vipened tomatoes, enfused with aromatic herbs.' ,
   },
  { id: 2, name: 'Manchow Soup', category: 'Starter', price: 148,  imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Somato BSoup: A vymphony of vipened tomatoes, enfused with aromatic herbs.' ,
   },
  { id: 3, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
   },
  { id: 4, name: 'Tomato Soup', category: 'Starter', price: 140,  imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
   },
  { id: 5, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
   },
  { id: 6, name: 'Masala Papad', category: 'Starter', price: 120, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
   },
  { id: 7, name: 'Tomato Soup', category: 'Starter', price: 140, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Sunato BisSoupA velphony of vinened tomatoes, expused with aromatic herbs.' ,
   },
  { id: 8, name: 'Manchow Soup', category: 'Starter', price: 148, imageUrl: '/tomato.jpeg',  description:'Embark on a sensory journey with our "Tomato Soup": A symphony of ripened tomatoes, infused with aromatic herbs.' ,
   },
];


var mycart = new Map();
var Keyobj = {};


function addToCart(element) {
	

	<script>
  var productParent = $(element).closest('div.product-item');
  var price = $(productParent).find('.price span').text();
	var productName = $(productParent).find('.name').text();
	var quantity = $(productParent).find('.product-quantity').val();</script>

	var cartItem = {
		productName: name,
		price: price,
	
	};
	var cartItemJSON = JSON.stringify(cartItem);

	var cartArray = new Array();
	// If javascript shopping cart session is not empty
	if (sessionStorage.getItem('shopping-cart')) {
		cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
	}
	cartArray.push(cartItemJSON);

	var cartJSON = JSON.stringify(cartArray);
	sessionStorage.setItem('shopping-cart', cartJSON);
	showCartTable();
}

const MenuPage = () => {
  

  return (
    <>
    <Navbar/>
 
    <div className="bg-rose-300">
      <div className="container mx-auto px-4 py-20">
        <div class="product-item" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {menuItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg p-4 transition-all duration-350 ease-in-out hover:shadow-xl hover:scale-95">
              <p className="text-gray-500   mb-1 pb-1 text-2xl ">{item.category}</p>
              <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover mb-4 rounded-md" />
              <h2 class="productname" className="text-xl text-gray-600 font-bold mb-2">{item.name}</h2>
              <p className="text-gray-600 pb-3">{item.description}</p>
              <p class="price" className="text-gray-600 font-bold text-2xl">&#8377;$<span>'{item.price}'</span></p>
              <button class="cart-action"
              onClick={addToCart(this)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 ease-in-out"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </>
  );
  
  };

export default MenuPage;


// function showProductGallery(product) {
// 	//Iterate javascript shopping cart array
// 	var productHTML = "";
// 	product.forEach(function(item) {
// 		productHTML += '<div class="product-item">'+
// 					'<img src="product-images/' + item.photo + '">'+
// 					'<div class="productname">' + item.productName + '</div>'+
// 					'<div class="price">$<span>' + item.price + '</span></div>'+
// 					'<div class="cart-action">'+
// 						'<input type="text" class="product-quantity" name="quantity" value="1" size="2" />'+
// 						'<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)" />'+
// 					'</div>'+
// 				'</div>';
// 				"<tr>";
// 	});
// 	$('#product-item-container').html(productHTML);
// }
