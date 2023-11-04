import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.css';
import Product from './pages/Product/Product';
import Connect from './components/Connect/Connect';
import Contact from './components/Contact/Contact';
import Login from "./components/Header/CheckoutForm";
import LoginPage from './components/Footer/LoginPage';
import SignUpPage from './components/Footer/SignupPage';
import PaymentPage from './components/Header/PaymentPage';
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/PaymentPage"element={<PaymentPage/>}/>

        </Routes>
      </main>
      <Connect />
      <Contact />
      <Footer />
    </>
  );
}

export default App;