// import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import './assets/css/base.css';
import './assets/css/grid.css';
import './assets/css/reset.css';
import Header from './components/header/Header';
import ProductFeature from './features';
import CheckOutFeature from './features/checkout/CheckOutFeature';
import ShoppingCartFeature from './features/product/components/shoppingCart/ShoppingCartFeature';
import ListProduct from './features/product/pages/ListProduct';
import ProductDetail from './features/product/pages/ProductDetail';
import Address from './features/user/component/Address';
import EditInfo from './features/user/component/EditInfo';
import Purchase from './features/user/component/Purchase';
import UserFeature from './features/user/UserFeature';
// import CheckOutFeature from './features/checkout/CheckOutFeature';
function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        {/* <Route path='/*' element={<ProductFeature />}>
          <Route path='' element={<ListProduct />} />
        </Route>
        <Route path={`/:productId`} element={<ProductDetail />} />
        <Route path={`/cart`} element={<ShoppingCartFeature />} /> */}

        <Route path='/home' element={<Navigate replace to='/products' />} />
        <Route path='/' element={<Navigate replace to='/products' />} />
        <Route path='products/*' element={<ProductFeature />}>
          <Route path='' element={<ListProduct />} />
          <Route path=':productId/*' element={<ProductDetail />}></Route>
        </Route>
        <Route path={`/cart`} element={<ShoppingCartFeature />} />
        {/* <Route path={`/comment`} element={<Comment />} /> */}
        <Route path={`/checkout`} element={<CheckOutFeature />} />
        <Route path={`/user/*`} element={<UserFeature />}>
          <Route path='' element={<EditInfo />} />
          <Route path='address' element={<Address />} />
          <Route path='purchase' element={<Purchase />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
