import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel';

import "../styles/sell.css"
import { useState } from 'react';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateOrder() {
  const [open, setOpen] = useState(false);

  const [quantity, setQuantity] = useState(0);
  const [pricePer, setPricePer] = useState(0);
  const [isOnline, setIsOnline] = useState(false)
  const [product, setProduct] = useState("")

  const [order, setOrder] = useState(null)

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // do sth here

    if(!product || !quantity || !pricePer){
      setQuantity(0)
      setPricePer(0)
      toast.error("All fields are required!")
      return
    }
    
    const order = {
      product_id: 1,
      created_date: new Date(),
      created_by: "",
      product: product,
      quantity: quantity,
      price_per: pricePer,
      total_amount: String(quantity*pricePer),
      isOnline: isOnline
    };

    setOrder(order)
    console.log(order)

    setQuantity(0)
    setPricePer(0)
    toast.success("Created new order")
    setOpen(false);
  }

  return (
    <>
    <div className='create-order'>
      <Button variant="outlined filled bg-dark text-white" onClick={handleClickOpen}>
        Create Order
      </Button>
      
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}>
        <DialogTitle id="responsive-dialog-title">
          {"Create a new Order"}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
        <DialogContent>
        <div className="create-order-modal">
            <div className="d-row">
              <small>Product Details</small>
              
              <div className="pos-abs">
                <FormControlLabel
                  value="start"
                  control={
                    <Switch
                    onClick={() => setIsOnline(!isOnline)}
                    color="primary" />}
                    label="Online"
                    labelPlacement="start"
                />
                <button className="total-amount">Rs {quantity * pricePer}</button>
              </div>
            </div>

            <TextField
            onChange={e => setProduct(e.target.value)}
            label="Product"
            variant="outlined" />

            <div className="d-row">
              <TextField
              onChange={e => setQuantity(e.target.value)}
              type="number"
              label="Available Quantity"
              variant="outlined" />
              <TextField
              onChange={e => setPricePer(e.target.value)}
              type="number"
              label="Price per"
              variant="outlined" />
            </div>

          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          <Button
          className='bg-dark text-white px-4'
          type="submit"
          autoFocus>
            Create
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
    <ToastContainer />
    </>
  );
}
