
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import ProductListing from './Pages/ProductListing';
import ProductDetails  from './Pages/ProductDetails';
import { createContext } from 'react';

import { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const MyContext = createContext();

function App() {

  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(true);

  const handleClickOpenProductDetailsModal = () => {
    setOpenProductDetailsModal(true);
  };

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const values = {

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
            </Routes>
            <Footer />
          </MyContext.Provider>
      </BrowserRouter>

      <Dialog
        open={openProductDetailsModal}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseProductDetailsModal}>Disagree</Button>
          <Button onClick={handleCloseProductDetailsModal} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
 