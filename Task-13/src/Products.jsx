import React from 'react'

function Products(props) {
  return (
    <div className="product-card">

      <img src={props.image} alt={props.name} />

      <h2>{props.name}</h2>

      <p>{props.description}</p>

    </div>
  )
}

export default Products