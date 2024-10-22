import { DirectionsCar, Restaurant, CheckCircleOutline } from '@mui/icons-material';
import React from 'react';
import HotelCard from './HotelCard';
import { Grid, Container } from '@mui/material';

const HotelList = () => {
  const hotels = [
    {
      id: 1,
      name: 'Ocean View Paradise',
      location: 'Near Marina Beach, Chennai',
      distance: 2.5,
      rating: 4.8,
      ratingCount: 120,
      images: [
        'https://via.placeholder.com/150', // Main image
        'https://via.placeholder.com/50?text=Suite1',
        'https://via.placeholder.com/50?text=Suite2',
        'https://via.placeholder.com/50?text=Suite3',
        'https://via.placeholder.com/50?text=Suite4'
      ],
      price: 2100,
      originalPrice: 5500,
      facilities: [
        { icon: <DirectionsCar />, label: 'Parking facility' },
        { icon: <Restaurant />, label: 'Beachside dining' },
        { icon: <CheckCircleOutline />, label: '24/7 Reception' }
      ]
    },
    {
      id: 2,
      name: 'Mountain Bliss Resort',
      location: 'Near Valley View Point, Manali',
      distance: 3.2,
      rating: 4.7,
      ratingCount: 89,
      images: [
        'https://via.placeholder.com/150', // Main image
        'https://via.placeholder.com/50?text=Room1',
        'https://via.placeholder.com/50?text=Room2',
        'https://via.placeholder.com/50?text=Room3',
        'https://via.placeholder.com/50?text=Room4'
      ],
      price: 1800,
      originalPrice: 4500,
      facilities: [
        { icon: <DirectionsCar />, label: 'Free parking' },
        { icon: <Restaurant />, label: 'In-house restaurant' },
        { icon: <CheckCircleOutline />, label: 'Room service' }
      ]
    },
    {
      id: 3,
      name: 'Desert Oasis Hotel',
      location: 'Near Jaisalmer Fort, Rajasthan',
      distance: 1.8,
      rating: 4.5,
      ratingCount: 75,
      images: [
        'https://via.placeholder.com/150', // Main image
        'https://via.placeholder.com/50?text=Tent1',
        'https://via.placeholder.com/50?text=Tent2',
        'https://via.placeholder.com/50?text=Tent3',
        'https://via.placeholder.com/50?text=Tent4'
      ],
      price: 1200,
      originalPrice: 4000,
      facilities: [
        { icon: <DirectionsCar />, label: 'Desert Safari' },
        { icon: <Restaurant />, label: 'Open-air dining' },
        { icon: <CheckCircleOutline />, label: 'Reception' }
      ]
    },
    {
      id: 4,
      name: 'Cityscape Inn',
      location: 'Downtown Connaught Place, New Delhi',
      distance: 0.8,
      rating: 4.4,
      ratingCount: 110,
      images: [
        'https://via.placeholder.com/150', // Main image
        'https://via.placeholder.com/50?text=Room1',
        'https://via.placeholder.com/50?text=Room2',
        'https://via.placeholder.com/50?text=Room3',
        'https://via.placeholder.com/50?text=Room4'
      ],
      price: 1500,
      originalPrice: 4800,
      facilities: [
        { icon: <DirectionsCar />, label: 'Underground parking' },
        { icon: <Restaurant />, label: 'Rooftop restaurant' },
        { icon: <CheckCircleOutline />, label: '24/7 Reception' }
      ]
    },
    {
      id: 5,
      name: 'Lakeside Retreat',
      location: 'Near Naini Lake, Nainital',
      distance: 0.5,
      rating: 4.9,
      ratingCount: 145,
      images: [
        'https://via.placeholder.com/150', // Main image
        'https://via.placeholder.com/50?text=Cabin1',
        'https://via.placeholder.com/50?text=Cabin2',
        'https://via.placeholder.com/50?text=Cabin3',
        'https://via.placeholder.com/50?text=Cabin4'
      ],
      price: 2300,
      originalPrice: 6000,
      facilities: [
        { icon: <DirectionsCar />, label: 'Lake view parking' },
        { icon: <Restaurant />, label: 'Private dining' },
        { icon: <CheckCircleOutline />, label: 'Reception' }
      ]
    },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {hotels.map((hotel, idx) => (
          <Grid item xs={16} sm={10} md={4} lg={14} key={hotel.id}>
            <HotelCard
              id={hotel.id}
              name={hotel.name}
              location={hotel.location}
              distance={hotel.distance}
              rating={hotel.rating}
              ratingCount={hotel.ratingCount}
              images={hotel.images}
              price={hotel.price}
              originalPrice={hotel.originalPrice}
              facilities={hotel.facilities}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HotelList;
