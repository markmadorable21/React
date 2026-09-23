import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage.jsx';
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx';
import { OrdersPage } from './pages/OrdersPage.jsx';
import './App.css';

function App() {
  // <Routes> = tells React all the pages in our website
  // <Route> = to add a page to our website
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default App;
