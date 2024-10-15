import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useNavigate } from 'react-router-dom';
import { Data } from './Pjson';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  const [cartQuantities, setCartQuantities] = React.useState(Data.map(() => 0));
  const [totalPrice, setTotalPrice] = React.useState(0); // State for total price
  const [totalItems, setTotalItems] = React.useState(0); // State for total items

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

  // Function for adding item to the cart and updating the totals
  const handleAddToCart = (index) => {
    const updatedQuantities = [...cartQuantities];

    // if (updatedQuantities[index] < 3) { // Limit the quantity to 3

    if (updatedQuantities[index] < Data[index].limit && updatedQuantities[index] < Data[index].stock) { 
      // Limit and stock check
      updatedQuantities[index] += 1;
      setCartQuantities(updatedQuantities); // Update cart quantities

      // Update the total price and total items
      updateCartTotals(updatedQuantities);
    }else {
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
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={4} columnSpacing={3}>
          {Data.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ width: 300, height: 400, display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  sx={{ height: 180 }}
                  image={item.img}
                  title={item.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.tital}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.discription}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {item.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                  {/* Add to Cart Button */}
                  <Box sx={{ textAlign: 'center' }}>
                    <IconButton
                      color="secondary"
                      onClick={() => handleAddToCart(index)}
                     // disabled={cartQuantities[index] === 3}
                     disabled={cartQuantities[index] >= item.limit || cartQuantities[index] >= item.stock} // disable button if the stock limit rech
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                      {cartQuantities[index]}
                    </Typography>
                  </Box>

                  {/* Remove from Cart Button */}
                  <Box sx={{ textAlign: 'center' }}>
                    <IconButton
                      color="secondary"
                      onClick={() => handleRemoveFromCart(index)}
                      disabled={cartQuantities[index] === 0}
                    >
                      <RemoveShoppingCartIcon />
                    </IconButton>
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                      {cartQuantities[index]}
                    </Typography>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Display total items and total price */}
      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="h6">
          Total Items: {totalItems} {/* Showing total items */}
        </Typography>
        <Typography variant="h6">
          Total Price: {totalPrice.toFixed(2)} {/* Showing total price */}
        </Typography>
      </Box>

      {/* Button to navigate to table view */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 4,
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/tableview')}
          color="secondary"
        >
          TABLE VIEW
        </Button>
      </Box>
    </>
  );
}
