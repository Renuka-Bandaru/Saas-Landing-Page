// src/components/FAQ.jsx
import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: 'What is ADmyBRAND AI Suite?',
    answer: 'ADmyBRAND AI Suite is an AI-powered marketing automation platform that helps you plan, run, and optimize multi-channel campaigns with ease.',
  },
  {
    question: 'Is it suitable for startups and small businesses?',
    answer: 'Yes! Our pricing tiers and modular features make it ideal for businesses of all sizes – from solo founders to enterprises.',
  },
  {
    question: 'Does it integrate with other tools?',
    answer: 'Absolutely. We support integrations with CRM tools, Google Ads, Meta, analytics platforms, and more.',
  },
  {
    question: 'Can I try it before buying?',
    answer: 'Yes, we offer a free 14-day trial. No credit card required!',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. We follow enterprise-grade encryption and comply with GDPR and other major privacy standards.',
  },
];

const FAQ = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        maxWidth: '900px',
        mx: 'auto',
        background: 'linear-gradient(135deg, rgba(224,231,255,0.7) 0%, rgba(249,250,251,0.6) 100%)',
        borderRadius: '28px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.25)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" align="center" fontWeight={600} mb={4}>
          Frequently Asked Questions
        </Typography>
      </motion.div>

      {faqData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          style={{ marginBottom: 16 }}
        >
          <Accordion
            sx={{
              background: 'rgba(255,255,255,0.35)',
              borderRadius: '16px',
              boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.10)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.18)',
              mb: 2,
              '&:before': { display: 'none' },
              transition: 'box-shadow 0.3s',
              '&:hover': {
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={500}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </Box>
  );
};

export default FAQ;
