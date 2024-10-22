import React from 'react';
import { Box, Button, Typography, Grid, Chip } from '@mui/material';
import { LocationOn, Star } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HotelCard = ({
  id,
  name,
  location,
  distance,
  rating,
  ratingCount,
  images,
  price,
  originalPrice,
  facilities,
}) => {
  const navigate = useNavigate();
    console.log(id);
  const handleBookNow = () => {
    // Navigate to booking form with hotelId in the URL params

    navigate(`/hotelbookingform/${id}`);
  };

  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        borderRadius: 2,
        padding: 2,
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
      }}
    >
      {/* Left section: Image gallery */}
      <Box sx={{ flex: '1 1 40%', position: 'relative' }}>
        <img
          src={images[0]} // Main image
          alt="Hotel Room"
          style={{ width: '100%', borderRadius: 8 }}
        />
        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
          {/* Additional images */}
          {images.slice(1).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Room view ${idx}`}
              style={{ width: 50, height: 50, borderRadius: 4 }}
            />
          ))}
        </Box>
        <Chip
          label="Mid range"
          color="secondary"
          size="small"
          sx={{ position: 'absolute', top: 10, left: 10 }}
        />
      </Box>

      {/* Right section: Hotel details */}
      <Box sx={{ flex: '1 1 120%' }}>
        <Typography variant="h6" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {location}
        </Typography>

        {/* Rating, Distance, and Review */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Chip
            icon={<Star sx={{ color: '#fff' }} />}
            label={`${rating} (${ratingCount} Ratings)`}
            sx={{ backgroundColor: '#4caf50', color: '#fff' }}
            size="small"
          />
          <Typography variant="body2" color="textSecondary">
            Excellent
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocationOn sx={{ fontSize: 16, color: 'red' }} />
            <Typography variant="body2" color="textSecondary">
              {distance} km
            </Typography>
          </Box>
        </Box>

        {/* Facilities */}
        <Grid container spacing={1} sx={{ mt: 2 }}>
          {facilities.map((facility, idx) => (
            <Grid item key={idx}>
              <Box display="flex" alignItems="center" gap={0.5}>
                {facility.icon}
                <Typography variant="body2">{facility.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Pricing and Booking */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 2,
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="h6" component="p" sx={{ color: '#007BFF' }}>
              ₹{price}{' '}
              <Typography component="span" sx={{ textDecoration: 'line-through', color: '#888', ml: 1 }}>
                ₹{originalPrice}
              </Typography>
            </Typography>
            <Typography variant="caption" color="textSecondary">
              + ₹210 taxes & fees · per room per night
            </Typography>
          </Box>
          <Box>
            <Button variant="outlined" color="primary" sx={{ mr: 1 }}>
              View Details
            </Button>
            <Button variant="contained" color="success" onClick={handleBookNow}>
              Book Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HotelCard;
