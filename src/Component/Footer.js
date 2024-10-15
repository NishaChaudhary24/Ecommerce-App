import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f55fe1',
        color: '#333',
        padding: '10px',
        position: 'fixed', // Fixes footer at the bottom
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%', // Makes footer stretch across the screen width
      }}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        Follow us on
      </Typography>
      <Box>
        <IconButton
          component="a"
          href="https://www.instagram.com"
          target="_blank"
          sx={{ color: '#333' }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.whatsapp.com"
          target="_blank"
          sx={{ color: '#333' }}
        >
          <WhatsAppIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.telegram.org"
          target="_blank"
          sx={{ color: '#333' }}
        >
          <TelegramIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ mt: 1 }}>
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
    </Box>
  );
}
