// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      sx={{
        mt: 10,
        py: 6,
        px: { xs: 3, md: 8 },
        background: 'linear-gradient(135deg, rgba(30,41,59,0.65) 0%, rgba(17,24,39,0.55) 100%)',
        color: 'white',
        borderTop: '1px solid rgba(255,255,255,0.13)',
        borderRadius: { xs: '20px 20px 0 0', md: '32px 32px 0 0' },
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        overflow: 'hidden',
      }}
    >
      <Grid container spacing={5}>
        {/* Branding */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight={600}>
            ADmyBRAND AI Suite
          </Typography>
          <Typography variant="body2" mt={1} color="rgba(255,255,255,0.8)">
            Revolutionizing marketing with AI-powered automation. 
            Scale smarter, faster, and better.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Company
          </Typography>
          <Link href="#" underline="hover" color="inherit" display="block" sx={{ opacity: 0.85, mb: 0.5 }}>About</Link>
          <Link href="#" underline="hover" color="inherit" display="block" sx={{ opacity: 0.85, mb: 0.5 }}>Careers</Link>
          <Link href="#" underline="hover" color="inherit" display="block" sx={{ opacity: 0.85 }}>Blog</Link>
        </Grid>

        {/* Features */}
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Features
          </Typography>
          <Link href="#" underline="hover" color="inherit" display="block" sx={{ opacity: 0.85, mb: 0.5 }}>Campaigns</Link>
          <Link href="#" underline="hover" color="inherit" display="block" sx={{ opacity: 0.85, mb: 0.5 }}>Analytics</Link>
          <Link href="#" underline="hover" color="inherit" display="block" sx={{ opacity: 0.85 }}>AI Tools</Link>
        </Grid>

        {/* Contact & Social */}
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2" color="rgba(255,255,255,0.8)">Email: support@admybrand.ai</Typography>
          <Typography variant="body2" color="rgba(255,255,255,0.8)">Phone: +91 98765 43210</Typography>

          <Box mt={2}>
            <IconButton href="#" target="_blank" color="inherit" sx={{
              background: 'rgba(255,255,255,0.08)',
              mr: 1,
              '&:hover': { background: 'rgba(255,255,255,0.18)' }
            }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" target="_blank" color="inherit" sx={{
              background: 'rgba(255,255,255,0.08)',
              mr: 1,
              '&:hover': { background: 'rgba(255,255,255,0.18)' }
            }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" target="_blank" color="inherit" sx={{
              background: 'rgba(255,255,255,0.08)',
              mr: 1,
              '&:hover': { background: 'rgba(255,255,255,0.18)' }
            }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href="#" target="_blank" color="inherit" sx={{
              background: 'rgba(255,255,255,0.08)',
              '&:hover': { background: 'rgba(255,255,255,0.18)' }
            }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box
        mt={6}
        textAlign="center"
        fontSize="0.85rem"
        color="rgba(255,255,255,0.7)"
        sx={{
          background: 'rgba(255,255,255,0.07)',
          borderRadius: '12px',
          py: 1.5,
          mt: { xs: 4, md: 6 },
          mx: { xs: -3, md: -8 },
        }}
      >
        © {new Date().getFullYear()} ADmyBRAND. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
