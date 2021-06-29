import React, { useState, useEffect } from 'react';

const Home = () => {
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setProductDetails(data);
      });
  });
  return <div>{productDetails.length}</div>;
};

export default Home;
