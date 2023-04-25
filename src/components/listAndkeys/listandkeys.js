import React from 'react'
export function ListItem(props){
    
    const { name, price, description } = props.productDetail;

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
}