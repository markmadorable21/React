import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage.jsx';
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx';
import { OrdersPage } from './pages/OrdersPage.jsx';
import './App.css';
import { TrackingPage } from './pages/checkout/TrackingPage.jsx';
import { PageNotFoundPage } from './pages/checkout/PageNotFoundPage.jsx';

function App() {
  // <Routes> = tells React all the pages in our website
  // <Route> = to add a page to our website
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<PageNotFoundPage />} />
    </Routes>
  );
}

export default App;
