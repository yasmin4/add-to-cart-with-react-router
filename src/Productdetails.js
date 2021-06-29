import React from 'react';
import { useParams } from 'react-router-dom';
const Productdetails = () => {
  const { id } = useParams();
  console.log('Product id is: ', id);
  return <h1>hello, i am in product details</h1>;
};

export default Productdetails;
