import React from 'react'
import './App.css'
import Products from './Products'

function App() {

  const productList = [
    {
      name: "Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description: "High-quality wireless headphones with clear sound."
    },
    {
      name: "Smart Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      description: "A stylish smartwatch with fitness tracking features."
    },
    {
      name: "Camera",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      description: "Capture beautiful moments with this digital camera."
    }
  ]

  return (
    <div className="app">
      <h1>Our Products</h1>

      <div className="product-container">
        {productList.map((product, index) => (
          <Products
            key={index}
            name={product.name}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
    </div>
  )
}

export default App