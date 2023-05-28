import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
const Home = React.lazy(() => import('../../pages/index'));
const CartPage = React.lazy(() => import('../../pages/cartPage'));
const Checkout = React.lazy(() => import('../../pages/checkout'));
const Registration = React.lazy(() => import('../../pages/registration'));
const SearchPage = React.lazy(() => import('../../pages/SearchPage'));
const Signedout = React.lazy(() => import('../../pages/signedout'));
const SingleProduct = React.lazy(() => import('../../pages/singleProduct'));
const Thanks = React.lazy(() => import('../../pages/thanks'));
import Layout from '../../layouts';
const Routings = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback="Loading....">
                <Home />
              </React.Suspense>
            }></Route>
          <Route
            path="/search"
            element={
              <React.Suspense fallback="Loading....">
                <SearchPage />
              </React.Suspense>
            }></Route>
          <Route
            exact
            path="/product/:id"
            element={
              <React.Suspense fallback="Loading....">
                <SingleProduct />
              </React.Suspense>
            }></Route>
          <Route
            path="/cart"
            element={
              <React.Suspense fallback="Loading....">
                <CartPage />
              </React.Suspense>
            }></Route>
          <Route
            path="/checkout"
            element={
              <React.Suspense fallback="Loading....">
                <Checkout />{' '}
              </React.Suspense>
            }></Route>
          <Route
            path="/registration"
            element={
              <React.Suspense fallback="Loading....">
                <Registration />
              </React.Suspense>
            }></Route>
          <Route
            path="/signedout"
            element={
              <React.Suspense fallback="Loading....">
                <Signedout />
              </React.Suspense>
            }></Route>

          <Route
            path="/thankyou"
            element={
              <React.Suspense fallback="Loading....">
                <Thanks />{' '}
              </React.Suspense>
            }></Route>
        </Routes>
      </Layout>
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default Routings;

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import Home from '../../pages/index';
// import CartPage from '../../pages/cartPage';
// import Registration from '../../pages/registration';
// import Signedout from '../../pages/signedout';
// import SingleProduct from '../../pages/singleProduct';
// import Thanks from '../../pages/thanks';
// import Checkout from '../../pages/checkout';
// import SearchPage from '../../pages/SearchPage';
// const Routings = () => {
//   return (
//     <BrowserRouter>
//       <ToastContainer />
//       <Routes>
//         <Route path="/registration" element={<Registration />}></Route>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/signedout" element={<Signedout />}></Route>
//         <Route exact path="/product/:id" element={<SingleProduct />}></Route>
//         <Route path="/cart" element={<CartPage />}></Route>
//         <Route path="/thankyou" element={<Thanks />}></Route>
//         <Route path="/checkout" element={<Checkout />}></Route>
//         <Route path="/search" element={<SearchPage />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Routings;
