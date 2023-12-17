import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SessionProvider } from './context/auth/auth'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { Toaster } from 'react-hot-toast';
import ValidateEmail from './pages/auth/ValidateEmail';
import Home from './pages/Home';

import Kawazaki from './pages/templates/kawazaki/Kawazaki';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Rayban from './pages/templates/rayban/Rayban';
import ProductDetails from './pages/templates/rayban/ProductDetails';

import StoreLayout from './pages/templates/Index';
import ProductPage from './pages/templates/Product';
import CheckoutPage from './pages/templates/rayban/section-rayban/CheckoutPage';
import LoginRayban from './pages/templates/rayban/LoginRayban';
import SignUpForm from './pages/templates/rayban/components/SignUpForm';
import OrdersCustomer from './pages/templates/rayban/OrdersCustomer';
import ScrollToTop from './pages/templates/rayban/components/ScrollToTop';




function App() {
  const queryClient = new QueryClient()

  return (

    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SessionProvider>
        <BrowserRouter>
          <Toaster />
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:storeSlug" element={<StoreLayout />} />
            <Route path="/:storeSlug/:productSlug" element={<ProductDetails />} />
            <Route path="/:storeSlug/:productSlug" element={<ProductPage />} />

            <Route path='/:storeSlug/checkout' element={<CheckoutPage />} />
            <Route path='/:storeSlug/wallet' element={<OrdersCustomer />} />
            <Route path='/:storeSlug/login' element={<LoginRayban />} />
            <Route path='/:storeSlug/register' element={<SignUpForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/validate-email" element={<ValidateEmail />} />
            <Route path="/kawazaki" element={<Kawazaki />} />
            {/* <Route path="/homeRayban/rayban" element={<Rayban />} />
            <Route path="/homeRayban/productdetails" element={<ProductDetails />} /> */}
          </Routes>
        </BrowserRouter>

      </SessionProvider>
    </QueryClientProvider>
  )
}

export default App
