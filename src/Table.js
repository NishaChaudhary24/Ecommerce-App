//  // Function for adding item to the cart and updating the totals
//  const handleAddToCart = (index) => {
//   const updatedQuantities = [...cartQuantities];

//   if (updatedQuantities[index] < 3) { // Limit the quantity to 3
//     updatedQuantities[index] += 1;
//     setCartQuantities(updatedQuantities); // Update cart quantities

//     // Update the total price and total items
//     updateCartTotals(updatedQuantities);
//   } else {
//     alert('You can only add this product up to 3 times.');
//   }
// };



import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Data } from "./Pjson";  
import { useNavigate } from 'react-router-dom';
import './Stylecss/Table.css';

export default function BasicTable() {
  const [cartQuantities, setCartQuantities] = useState(Data.map(() => 0));
  const [totalPrice, setTotalPrice] = useState(0); // State for total price
  const [totalItems, setTotalItems] = useState(0); // State for total items

  const navigate = useNavigate();

  // Function to update total items and total price
  const updateCartTotals = (updatedQuantities) => {
    const totalPrice = updatedQuantities.reduce((acc, quantity, index) => {
      return acc + quantity * Data[index].price;
    }, 0);

    const totalItems = updatedQuantities.reduce((acc, quantity) => acc + quantity, 0);

    setTotalPrice(totalPrice);
    setTotalItems(totalItems);
  };

  // Function for add item to the cart and updat the total price 
  const handleAddToCart = (index) => {
    const updatedQuantities = [...cartQuantities];

    if (updatedQuantities[index] < Data[index].limit && updatedQuantities[index] < Data[index].stock) { 
      // Limit and stock check
      updatedQuantities[index] += 1;
      setCartQuantities(updatedQuantities); // Update cart quantities

      // Update the total price and total items
      updateCartTotals(updatedQuantities);
    } else {
      alert(`You can only add this product up to ${Data[index].limit} times or based on the available stock.`);
    }
  };

  // Function for removing item from the cart and updating the totals
  const handleRemoveFromCart = (index) => {
    const updatedQuantities = [...cartQuantities];

    if (updatedQuantities[index] > 0) { // Only remove if quantity is greater than 0
      updatedQuantities[index] -= 1;
      setCartQuantities(updatedQuantities); // Update cart quantities

      // Update the total price and total items
      updateCartTotals(updatedQuantities);
    }
  };

  return (
    <> 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Price</TableCell>
            {/* <TableCell align="center">Stock</TableCell>  {/* Stock column */}
            {/* <TableCell align="center">Limit </TableCell>  Limit column */} 
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Add to Cart</TableCell>  
            <TableCell align="center">Remove from Cart</TableCell>  
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((item, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {item.tital}
              </TableCell>
              
              <TableCell align="left">
                <img
                  src={item.img}
                  alt={item.tital}
                  style={{ width: 100, height: 100, objectFit: 'cover' }}
                />
              </TableCell>

              <TableCell align="left">{item.price}</TableCell>

              {/* <TableCell align="center">{item.stock}</TableCell>  {/* Display stock */}

              {/* <TableCell align="center">{item.limit}</TableCell>  Display limit */} 

              <TableCell align="left">{item.discription}</TableCell>

              {/* Add to Cart Icon */}
              <TableCell align="center">
                <IconButton
                  color="secondary"
                  onClick={() => handleAddToCart(index)}
                  aria-label="add to cart"
                  disabled={cartQuantities[index] >= item.limit || cartQuantities[index] >= item.stock} // Disable button if limit or stock is reached
                >
                  <ShoppingCartIcon />
                </IconButton>
                {/* Display the quantity below the Add to Cart icon */}
                <Box sx={{ textAlign: 'center', marginTop: 1 }}>
                  {cartQuantities[index] > 0 && <span>{cartQuantities[index]}</span>}
                </Box>
              </TableCell>

              {/* Remove from Cart Icon */}
              <TableCell align="center">
                <IconButton
                  color="secondary"
                  onClick={() => handleRemoveFromCart(index)}
                  aria-label="remove from cart"
                  disabled={cartQuantities[index] === 0}
                >
                  <RemoveShoppingCartIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Display total items and total price */}
      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="h6">
          Total Items: {totalItems} {/* Showing total items */}
        </Typography>
        <Typography variant="h6">
          Total Price: {totalPrice.toFixed(2)} {/* Showing total price */}
        </Typography>
      </Box>
    </TableContainer>
     
    {/* CARD VIEW BUTTON */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
      }}
    >
      <Button variant="contained" size="large" onClick={() => navigate('/gridcard')}  color="secondary">CARD VIEW</Button>
    </Box>
    </>
  );
}
