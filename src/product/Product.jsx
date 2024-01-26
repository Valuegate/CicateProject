import React from 'react'
import './style.css'

const Product = (props) => {

const {id, name, description,price} = props.data

  return (
    <div>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{description}</h1>
      <h1>{price}</h1>
    </div>
  )
}

export default Product
