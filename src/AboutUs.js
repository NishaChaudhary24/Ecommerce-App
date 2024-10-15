import React from 'react';
import { Container, Typography, Box, Button, Card, CardContent, CardMedia } from '@mui/material';

import imgl from './Babytable.png';
import backgroundImage from './Backg.png';  
import Layout from './Component/Layout'

export default function AboutUs() {
   

  return (
    <Layout>
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',  
        padding: 4
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', marginTop: 5 }}>
          <Typography variant="h2" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Welcome to our online shopping platform! We are committed to providing the best products with exceptional customer service. 
            Our mission is to bring a wide range of products to your doorstep with just a few clicks. Whether you are looking for the latest 
            trends or reliable everyday items, we have something for everyone. Thank you for choosing us as your preferred shopping destination.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              component="img"
              image={imgl} // You can use your own image here
              sx={{ 
                height: 400, 
                objectFit: 'cover' // Ensures the image fills the card without cropping
              }}
            />
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Our Story
              </Typography>
              <Typography variant="body1">
                Our journey began in 2024 with a small team of passionate individuals who wanted to revolutionize the online shopping experience.
                Today, we are proud to serve thousands of customers across the globe with a seamless and personalized shopping experience.
              </Typography>
            </CardContent>
          </Card>
        </Box>

         
      </Container>
    </Box>
    </Layout>
  );
}
