import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useEffect } from 'react';
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
import MyAccount from './Pages/MyAccount';
import MyList from './Pages/MyList';
import Orders from './Pages/Orders';
import { fetchDataFromApi } from './utils/api';


const MyContext = createContext();

function App() {

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth] = useState('lg');
  const [fullWidth] = useState(true);

  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("accesstoken");

    if(token!==undefined && token!==null && token!=="") {
      setIsLogin(true);

      fetchDataFromApi(`/api/user/userDetails?token=${token}`).then((res) => {
        console.log(res)
        setUserData(res.data);
      })

    }else {
      setIsLogin(false);
    }
  }, [isLogin])

  const alerBox = (type, msg) =>{
    if(type==="success"){
      toast.success(msg);
    }
    if(type==="error"){
      toast.error(msg);
    }
  }

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    openCartPanel,
    toggleCartPanel,
    alerBox,
    isLogin,
    setIsLogin,
    userData,
    setUserData
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
              <Route path={"/my-account"} exact={true} element={<MyAccount/>}/>
              <Route path={"/my-list"} exact={true} element={<MyList/>}/>
              <Route path={"/my-order"} exact={true} element={<Orders/>}/>
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
 