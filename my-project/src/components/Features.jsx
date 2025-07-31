// src/components/Features.jsx
import React from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ShieldIcon from '@mui/icons-material/Shield';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const features = [
  {
    icon: <SmartToyIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'AI Campaigns',
    description: 'Launch intelligent, automated campaigns that perform better.',
  },
  {
    icon: <InsightsIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Marketing Insights',
    description: 'Get real-time data and predictive marketing analytics.',
  },
  {
    icon: <SettingsSuggestIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Workflow Automation',
    description: 'Streamline tasks with our no-code automation builder.',
  },
  {
    icon: <AutoGraphIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Performance Boost',
    description: 'Optimize campaigns and improve ROI with AI suggestions.',
  },
  {
    icon: <ShieldIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Enterprise Security',
    description: 'End-to-end encryption, GDPR compliance, and more.',
  },
  {
    icon: <SupportAgentIcon color="primary" sx={{ fontSize: 40 }} />,
    title: '24/7 Smart Support',
    description: 'Always-on AI + expert human support, anytime you need.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <Box
      sx={{
        px: { xs: 1, sm: 2, md: 4 },
        py: { xs: 4, sm: 6, md: 8 },
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f9fafb 100%)',
        minHeight: { xs: 'unset', md: '100vh' },
        width: '100%',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        fontWeight={600}
        sx={{
          fontSize: { xs: '2rem', sm: '2.5rem', md: '2.75rem' },
        }}
      >
        Powerful Features to Supercharge Your Marketing
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        mb={{ xs: 3, sm: 4, md: 5 }}
        sx={{
          fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
        }}
      >
        Everything you need to scale and automate your marketing.
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {features.map((feature, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              // Ensure full height for flex children
              height: '100%',
            }}
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ flex: 1, display: 'flex' }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 3 },
                  textAlign: 'center',
                  borderRadius: { xs: '16px', sm: '20px' },
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.25)',
                    background: 'rgba(255,255,255,0.35)',
                  },
                  minHeight: { xs: 180, sm: 220, md: 240 },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: { xs: 1, sm: 2 },
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  mt={{ xs: 1, sm: 2 }}
                  sx={{
                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mt={1}
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
