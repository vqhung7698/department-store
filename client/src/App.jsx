import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import Button  from '@mui/material/Button';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import ProductListing from './Pages/ProductListing';
import ProductDetails  from './Pages/ProductDetails';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductsZoom from './components/ProductsZoom';
import ProductDetailsComponent from './components/ProductDetailsComponent';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CartPage from './Pages/Cart';
import Verify from './Pages/Verify';
import ForgotPass from './Pages/ForgotPass';
import Checkout from './Pages/Checkout';


const MyContext = createContext();

function App() {

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth] = useState('lg');
  const [fullWidth] = useState(true);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const openAlerBox = (status, msg) =>{
    if(status==="success"){
      toast.success(msg);
    }
    if(status==="error"){
      toast.error(msg);
    }
  }

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    openCartPanel,
    toggleCartPanel,
    openAlerBox
  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
            <Header />
            <Routes>
              <Route path={"/"} exact={true} element={<Home/>}/>
              <Route path={"/productListing"} exact={true} element={<ProductListing/>}/>
              <Route path={"/productDetails/:id"} exact={true} element={<ProductDetails/>}/>
              <Route path={"/login"} exact={true} element={<Login/>}/>
              <Route path={"/register"} exact={true} element={<Register/>}/>
              <Route path={"/cart"} exact={true} element={<CartPage/>}/>
              <Route path={"/verify"} exact={true} element={<Verify/>}/>
              <Route path={"/forgot-password"} exact={true} element={<ForgotPass/>}/>
              <Route path={"/checkout"} exact={true} element={<Checkout/>}/>
            </Routes>
            <Footer />
          </MyContext.Provider>
      </BrowserRouter>

      <Toaster />

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetailsModal}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productDetailsModal'
      >
        <DialogContent>
          <div className='flex items-center w-full h-[500px] productDetailsModalContainer relative'>
            <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]
            !absolute top-[15px] right-[15px] !bg-[#f1f1f1]'
            onClick={handleCloseProductDetailsModal}>
              <IoClose className='text-[20px]'/>
            </Button>
            <div className='col1 w-[38%] px-3'>
              <ProductsZoom/>
            </div>
            <div className='col2 w-[72%] py-8 px-8 pr-16 productContent'>
              <ProductDetailsComponent/>
            </div>
          </div>
        </DialogContent>
      </Dialog>

    </>
  );
}

export default App;

export {MyContext}
 