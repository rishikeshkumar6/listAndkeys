import React from 'react'
import logo from './logo.svg';
import './App.css';
import { ListItem } from './components/listAndkeys/listandkeys';


function App() {
  const productDetails = [
    {
      id: 1,
      name: "Product One",
      price: 10.99,
      description: "This is product one"
    },
    {
      id: 2,
      name: "Product Two",
      price: 20.99,
      description: "This is product two"
    },
    {
      id: 3,
      name: "Product Three",
      price: 30.99,
      description: "This is product three"
    }
  ];

  return (
    <div className="App">
      {productDetails.map((productDetail) => (
        <ListItem key={productDetail.id} productDetail={productDetail} />
      ))}
    </div>
  );
  return (
    <div>
   
  return (
    <div className="App">
      {productDetails.map((productDetail) => (
        <ListItem key={productDetail.id} productDetail={productDetail} />
      ))}
    </div>
  );

     


    </div>
  );
}

export default App;
