
import { NavLink, Route ,Routes} from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import toast ,{Toaster} from 'react-hot-toast'
import ProductForm from './Components/ProductForm';
import ProductList from './Components/ProductList';
import SupplierList from './Components/SupplierList'
import Dashboard from './Components/Dashoboard';
function App() {



  return (
    <div className="App">
 <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>






<Routes>
  <Route path='/' Component={Login}></Route>
  <Route path='/register' Component={Register}></Route>
  <Route path='/dashboard' Component={Dashboard} />
  <Route path='/product' Component={ProductForm}></Route>
  <Route path='/productList' Component={ProductList}></Route>
<Route path='/supplierList' Component={SupplierList}></Route>
</Routes>
{/* <SupplierList/> */}
{/* <ProductList/> */}

      {/* <Login/> */}
    </div>
  );
}

export default App;
