import { Link } from 'react-router';
import { Header } from '../../components/Header.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './TrackingPage.css';

export function TrackingPage({ cart }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCartItems(response.data);
      console.log('Fetched cart items:', response.data);
    };
    fetchCartItems();
  }, []);

  
  return (
    <>
      <Header cart={cart} />
      
      <div className="tracking-page">
        <div className="order-tracking">
          <Link  className="back-to-orders-link link-primary" href="/orders">
            View all orders
          </Link>

          <div className="delivery-date">Arriving on Monday, June 13</div>

          <div className="product-info">
            {cartItems.map((cartItem) => (
              <div key={cartItem.id}>
                <div className="product-name">{cartItem.product.name}</div>
    
              </div>
            ))}
          </div>

          <div className="product-info"></div>

          <img
            className="product-image"
            src="images/products/athletic-cotton-socks-6-pairs.jpg"
          />

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
