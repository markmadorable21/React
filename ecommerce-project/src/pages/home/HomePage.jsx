import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      // using axios instead of fetch to make API requests to the backend server. 
      // This is because axios automatically handles JSON parsing and provides a simpler API 
      // for making HTTP requests.
      const response = await axios.get('/api/products');
      setProducts(response.data);
    };

    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}