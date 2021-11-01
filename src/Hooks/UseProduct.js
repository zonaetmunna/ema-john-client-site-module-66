
import { useEffect } from 'react';
import { useState } from 'react';

const UseProduct = () => {
     const [products, setProducts] = useState([]);
     useEffect(() => {
          fetch('https://mighty-island-44981.herokuapp.com/products')
               .then(res => res.json())
               .then(data => setProducts(data.products))
     }, []);
     return [products, setProducts];
};

export default UseProduct;