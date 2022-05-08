import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import ProductAdd from './Pages/ProductAdd/ProductAdd';
import ProductList from './Pages/ProductList/ProductList';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
// import Signin from './Pages/Signin/Signin';
// import Signup from './Pages/Signup/Signup'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './Pages/NotFound/NotFound';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Blog from './Pages/Blog/Blog';
import EditProduct from './Pages/EditProduct/EditProduct';
import Quantity from './Pages/Quantity/Quantity';
import ViewProduct from './Pages/ViewProduct/ViewProduct';
import AddedItems from './Pages/AddedItems/AddedItems';

import About from './Pages/About/About';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup.js'
toast.configure()

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Signin />} />
        {/* <Route path='/register' element={<Sign} /> */}
        <Route path='/register' element={<Signup/>} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/productAdd' element={<RequireAuth>
          <ProductAdd />
        </RequireAuth>} />
        <Route path='/productDetail/:id' element={<RequireAuth>
          <ProductDetail />
        </RequireAuth>} />
        <Route path='/editProduct/:id' element={<RequireAuth>
          <EditProduct />
        </RequireAuth>} />
        <Route path='/productList' element={<RequireAuth>
          <ProductList />
        </RequireAuth>} />
        <Route path='/quantity/:id' element={<RequireAuth>
          <Quantity />
        </RequireAuth>} />
        <Route path='/view/:id' element={<RequireAuth>
          <ViewProduct />
        </RequireAuth>} />
        <Route path='/items' element={<RequireAuth>
          <AddedItems />
        </RequireAuth>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
