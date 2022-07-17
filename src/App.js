// import './App.css';
import { Route, Routes } from 'react-router-dom';
import './assets/css/reset.css';
import './assets/css/base.css';
import './assets/css/grid.css';
import Header from './components/header/Header';
import ProductFeature from './features';
import ListProduct from './features/product/pages/ListProduct';
import ProductDetail from './features/product/pages/ProductDetail';
function App() {
  return (
    <div className='App'>
      <Header />

      <Routes path='/*' element={<ProductFeature />}>
        <Route path='' element={<ListProduct />} />
        <Route path={`:productId`} element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
