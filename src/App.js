import React from 'react';
import Product from './Product';

const products = 
  
  [
    {	 
      "title": "Carrots",
      "type": "dairy",
      "description": "Raw organic carrots",
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazifE2p99XALcxHc0l-uqZ8fu76EWoUmU3AhMlEw2x7PclcRi_bPtd8Q&s=10",
      "price": 28.1,
      "rating": 4
    },
    {	 
      "title": "Sweet fresh strawberry",
      "type": "fruit",
      "description": "Sweet fresh strawberry",
      "url": "https://cdn.mos.cms.futurecdn.net/r5ibnDz656ibgejAdjWHaj-768-80.jpg",
      "price": 29.45,
      "rating": 4
    },
    {	 
      "title": "Asparagus",
      "type": "vegetable",
      "description": "Asparagus",
      "url": "https://th.bing.com/th?id=OSK.HERO6km3yi6gPhai6BxAwE4ZpgNCs6mPFjGHx64swjPrYRA&w=312&h=200&c=15&rs=2&o=6&dpr=1.5&pid=SANGAM",
      "price": 18.00,
      "rating": 5
    },
    {	 
      "title": "Organic tomato",
      "type": "vegetable",
      "description": "Organic tomatoes",
      "url": "https://th.bing.com/th/id/OIP.7sXD1I8TuX9VresgBYIzGgHaE7?rs=1&pid=ImgDetMain",
      "price": 15.99,
      "rating": 5
    },
    {	 
      "title": "Pineapple",
      "type": "fruit",
      "description": "Fresh pineapple slices",
      "url": "https://thumbs.dreamstime.com/b/fresh-pineapple-slices-isolated-white-90404995.jpg",
      "price": 24.99,
      "rating": 4.5
    },
    {	 
      "title": "potato",
      "type": "dairy",
      "description": "Organic potatoes",
      "url": "https://th.bing.com/th/id/OIP.JDbMmx5n62pcbG8UPfiz1wHaHa?rs=1&pid=ImgDetMain",
      "price": 12.49,
      "rating": 4
    }
  ];
  
  


function App() {
  return (
    <div className="App">
      <h1>E-commerce Application</h1>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
