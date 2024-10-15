import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import imgb from './Backg.png'; 
import Layout from './Component/Layout' 

function Contact() {
  return (
    <Layout> 
    <Box
      sx={{
        backgroundImage: `url(${imgb})`,  
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',  
        padding: 4
      }}
    >
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <Box
          sx={{
            maxWidth: '600px',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',  
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We'd love to hear from you! Please fill out the form below and we'll get in touch with you as soon as possible.
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              fullWidth
              required
              label="Name"
              variant="outlined"
              sx={{ mb: 3, backgroundColor: 'white', borderRadius: '4px' }}
            />
            <TextField
              fullWidth
              required
              label="Email"
              variant="outlined"
              sx={{ mb: 3, backgroundColor: 'white', borderRadius: '4px' }}
            />
            <TextField
              fullWidth
              required
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              sx={{ mb: 3, backgroundColor: 'white', borderRadius: '4px' }}
            />
            <Button variant="contained" color="secondary" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
    </Layout>
  );
}

export default Contact;
