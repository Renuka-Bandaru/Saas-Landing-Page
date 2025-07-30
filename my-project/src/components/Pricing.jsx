// src/components/Pricing.jsx
import React from 'react';
import { Box, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '$29/mo',
    features: ['AI Campaign Builder', 'Basic Analytics', 'Email Support'],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$79/mo',
    features: ['Everything in Starter', 'Advanced Insights', 'Automation Tools', 'Live Chat Support'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['All Pro Features', 'Dedicated Account Manager', 'Custom Integrations', 'Priority Support'],
    highlighted: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Pricing = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f9fafb 100%)',
        // subtle background for glassmorphism
      }}
    >
      <Typography variant="h4" align="center" fontWeight={600} mb={2}>
        Flexible Pricing for Every Team
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" mb={5}>
        Choose the plan that fits your business needs
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ height: '100%' }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: '20px',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  background: plan.highlighted
                    ? 'rgba(240, 244, 255, 0.55)'
                    : 'rgba(255, 255, 255, 0.35)',
                  boxShadow: plan.highlighted
                    ? '0 8px 32px 0 rgba(25, 118, 210, 0.18)'
                    : '0 4px 24px 0 rgba(31, 38, 135, 0.10)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: plan.highlighted
                    ? '2px solid #1976d2'
                    : '1px solid rgba(255,255,255,0.25)',
                  transition: 'box-shadow 0.3s, border 0.3s',
                  '&:hover': {
                    boxShadow: plan.highlighted
                      ? '0 12px 40px 0 rgba(25, 118, 210, 0.25)'
                      : '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
                    border: plan.highlighted
                      ? '2.5px solid #1565c0'
                      : '1.5px solid rgba(25, 118, 210, 0.15)',
                  },
                }}
              >
                <Typography variant="h6" fontWeight={700} color="primary" gutterBottom>
                  {plan.name}
                </Typography>
                <Typography variant="h4" fontWeight={700} mb={2}>
                  {plan.price}
                </Typography>
                <List dense>
                  {plan.features.map((feature, i) => (
                    <ListItem key={i}>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant={plan.highlighted ? 'contained' : 'outlined'}
                  fullWidth
                  sx={{
                    mt: 3,
                    borderRadius: '8px',
                    fontWeight: 600,
                    backdropFilter: 'blur(2px)',
                    background: plan.highlighted
                      ? 'linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)'
                      : 'rgba(255,255,255,0.15)',
                    color: plan.highlighted ? '#fff' : '#1976d2',
                    boxShadow: plan.highlighted
                      ? '0 2px 8px 0 rgba(25, 118, 210, 0.18)'
                      : 'none',
                    border: plan.highlighted
                      ? 'none'
                      : '1.5px solid #1976d2',
                    '&:hover': {
                      background: plan.highlighted
                        ? 'linear-gradient(90deg, #1565c0 60%, #1976d2 100%)'
                        : 'rgba(25, 118, 210, 0.08)',
                      color: plan.highlighted ? '#fff' : '#1565c0',
                    },
                  }}
                >
                  {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                </Button>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
