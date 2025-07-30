// src/components/Testimonials.jsx
import React from 'react';
import { Typography, Avatar, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Lee',
    role: 'Marketing Manager, FinTechPro',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'ADmyBRAND AI Suite transformed the way we handle marketing analytics. Everything’s automated.',
  },
  {
    name: 'Ravi Kumar',
    role: 'Founder, StartIQ',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
    quote: 'We grew our campaigns 3x faster using ADmyBRAND’s AI tools. It’s a must-have for any modern business.',
  },
  {
    name: 'Sarah Lee',
    role: 'Marketing Manager, FinTechPro',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'ADmyBRAND AI Suite transformed the way we handle marketing analytics. Everything’s automated.',
  },
  {
    name: 'Ravi Kumar',
    role: 'Founder, StartIQ',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
    quote: 'We grew our campaigns 3x faster using ADmyBRAND’s AI tools. It’s a must-have for any modern business.',
  },
  {
    name: 'Emma Watson',
    role: 'Product Lead, HealthHive',
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
    quote: 'The simplicity and intelligence of this platform make our marketing team more efficient and data-driven.',
  },
  
  {
    name: 'Emma Watson',
    role: 'Product Lead, HealthHive',
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
    quote: 'The simplicity and intelligence of this platform make our marketing team more efficient and data-driven.',
  },
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f9fafb 100%)',
        // glassmorphism background
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <Typography variant="h4" fontWeight={600} align="center" mb={4}>
          What Our Users Say
        </Typography>
      </motion.div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: '40px', cursor: 'grab' }}
        grabCursor={true}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ height: '100%' }}
            >
              <Box
                sx={{
                  background: 'rgba(255, 255, 255, 0.35)',
                  borderRadius: '20px',
                  p: 4,
                  mx: 1,
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.25)',
                  },
                }}
              >
                <Typography variant="body1" color="text.secondary" mb={3}>
                  “{t.quote}”
                </Typography>
                <Box display="flex" alignItems="center" gap={2} mt="auto">
                  <Avatar src={t.image} alt={t.name} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {t.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t.role}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
