// // import React, { useState } from 'react';
// // import {
// //   Box,
// //   Typography,
// //   Paper,
// //   Grid,
// //   TextField,
// //   Button,
// //   Select,
// //   MenuItem,
// //   Card,
// //   CardContent,
// //   Divider,
// //   styled
// // } from '@mui/material';
// // import { CalendarToday, Hotel, Star } from '@mui/icons-material';

// // // Styled components
// // const StyledBadge = styled(Box)(({ theme }) => ({
// //   backgroundColor: theme.palette.success.main,
// //   color: theme.palette.common.white,
// //   padding: '4px 8px',
// //   borderRadius: theme.shape.borderRadius,
// //   display: 'flex',
// //   alignItems: 'center',
// //   gap: '4px',
// // }));

// // const HotelBookingForm = () => {
// //   const [phoneCode, setPhoneCode] = useState('+91');

// //   return (
// //     <Box sx={{ p: 3, maxWidth: 'lg', mx: 'auto' }}>
// //       {/* Back button */}
// //       <Typography 
// //         sx={{ 
// //           mb: 2, 
// //           color: 'error.main', 
// //           cursor: 'pointer',
// //           display: 'flex',
// //           alignItems: 'center'
// //         }}
// //       >
// //         ← Modify your booking
// //       </Typography>

// //       {/* Success message */}
// //       <Paper 
// //         sx={{ 
// //           mb: 3, 
// //           p: 2, 
// //           bgcolor: 'warning.light',
// //           color: 'warning.dark'
// //         }}
// //       >
// //         🎉 Yay! you just saved ₹2356 on this booking!
// //       </Paper>

// //       <Grid container spacing={3}>
// //         {/* Left section - Form */}
// //         <Grid item xs={12} md={8}>
// //           <Paper sx={{ p: 3 }}>
// //             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
// //               <Box
// //                 sx={{
// //                   width: 24,
// //                   height: 24,
// //                   borderRadius: '50%',
// //                   bgcolor: 'common.black',
// //                   color: 'common.white',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center'
// //                 }}
// //               >
// //                 1
// //               </Box>
// //               <Typography variant="h6">Enter your details</Typography>
// //             </Box>

// //             <Typography 
// //               sx={{ mb: 3, color: 'text.secondary' }}
// //             >
// //               We will use these details to share your booking information
// //             </Typography>

// //             <Grid container spacing={2}>
// //               <Grid item xs={12} md={6}>
// //                 <TextField
// //                   fullWidth
// //                   label="Full Name"
// //                   placeholder="Enter first and last name"
// //                   variant="outlined"
// //                 />
// //               </Grid>
// //               <Grid item xs={12} md={6}>
// //                 <TextField
// //                   fullWidth
// //                   label="Email Address"
// //                   placeholder="name@abc.com"
// //                   variant="outlined"
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <Box sx={{ display: 'flex', gap: 1 }}>
// //                   <Select
// //                     value={phoneCode}
// //                     onChange={(e) => setPhoneCode(e.target.value)}
// //                     sx={{ width: 100 }}
// //                   >
// //                     <MenuItem value="+91">+91</MenuItem>
// //                     <MenuItem value="+1">+1</MenuItem>
// //                     <MenuItem value="+44">+44</MenuItem>
// //                   </Select>
// //                   <TextField
// //                     fullWidth
// //                     placeholder="e.g. 1234567890"
// //                     variant="outlined"
// //                   />
// //                   <Button 
// //                     variant="contained" 
// //                     sx={{ 
// //                       bgcolor: 'grey.100', 
// //                       color: 'text.secondary',
// //                       '&:hover': {
// //                         bgcolor: 'grey.200'
// //                       }
// //                     }}
// //                   >
// //                     Send passcode
// //                   </Button>
// //                 </Box>
// //               </Grid>
// //             </Grid>
// //           </Paper>
// //         </Grid>

// //         {/* Right section - Hotel details */}
// //         <Grid item xs={12} md={4}>
// //           <Card>
// //             <CardContent>
// //               <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
// //                 <Box>
// //                   <Typography variant="h6">Super Hotel O New Diamond</Typography>
// //                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
// //                     <StyledBadge>
// //                       4.6
// //                       <Star sx={{ width: 16, height: 16 }} />
// //                     </StyledBadge>
// //                     <Typography variant="body2" color="text.secondary">
// //                       (57 Ratings) · Excellent
// //                     </Typography>
// //                   </Box>
// //                   <Typography sx={{ mt: 1 }}>1 Night</Typography>
// //                 </Box>
// //                 <Box
// //                   component="img"
// //                   src="/api/placeholder/100/100"
// //                   alt="Hotel"
// //                   sx={{
// //                     width: 96,
// //                     height: 96,
// //                     borderRadius: 1,
// //                     objectFit: 'cover'
// //                   }}
// //                 />
// //               </Box>

// //               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
// //                 <CalendarToday sx={{ color: 'text.secondary' }} />
// //                 <Typography>Tue, 22 Oct – Wed, 23 Oct</Typography>
// //               </Box>

// //               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
// //                 <Hotel sx={{ color: 'text.secondary' }} />
// //                 <Typography>Classic · 1 Room, 1 Guest</Typography>
// //               </Box>

// //               <Divider sx={{ mb: 2 }} />

// //               {/* Price breakdown */}
// //               <Box sx={{ '& > div': { mb: 1 } }}>
// //                 <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
// //                   <Typography>Room price for 1 Night × 1 Guest</Typography>
// //                   <Typography>₹5428</Typography>
// //                 </Box>
// //                 <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'success.main' }}>
// //                   <Typography>Instant discount</Typography>
// //                   <Typography>-₹1628</Typography>
// //                 </Box>
// //                 <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'success.main' }}>
// //                   <Typography>62% Coupon Discount</Typography>
// //                   <Typography>-₹2356</Typography>
// //                 </Box>
// //                 <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'success.main' }}>
// //                   <Typography>Wizard discount 5%</Typography>
// //                   <Typography>-₹72</Typography>
// //                 </Box>
// //                 <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
// //                   <Typography>Wizard Blue membership charge</Typography>
// //                   <Typography>₹72</Typography>
// //                 </Box>
// //               </Box>

// //               <Divider sx={{ my: 2 }} />

// //               <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
// //                 <Typography>Payable Amount</Typography>
// //                 <Typography>₹1444</Typography>
// //               </Box>
// //             </CardContent>
// //           </Card>
// //         </Grid>
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default HotelBookingForm;


// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom'; // Import useLocation
// import {
//   Box,
//   Typography,
//   Paper,
//   Grid,
//   TextField,
//   Button,
//   Select,
//   MenuItem,
//   Card,
//   CardContent,
//   Divider,
//   styled
// } from '@mui/material';
// import { CalendarToday, Hotel, Star } from '@mui/icons-material';

// // Styled components
// const StyledBadge = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.success.main,
//   color: theme.palette.common.white,
//   padding: '4px 8px',
//   borderRadius: theme.shape.borderRadius,
//   display: 'flex',
//   alignItems: 'center',
//   gap: '4px',
// }));

// const HotelBookingForm = () => {
//   const location = useLocation(); // Use the location hook to access passed data
//   const { name, location: hotelLocation, distance, rating, ratingCount, images, price, originalPrice, facilities } = location.state || {};

//   const [phoneCode, setPhoneCode] = useState('+91');

//   return (
//     <Box sx={{ p: 3, maxWidth: 'lg', mx: 'auto' }}>
//       {/* Back button */}
//       <Typography 
//         sx={{ 
//           mb: 2, 
//           color: 'error.main', 
//           cursor: 'pointer',
//           display: 'flex',
//           alignItems: 'center'
//         }}
//       >
//         ← Modify your booking
//       </Typography>

//       {/* Success message */}
//       <Paper 
//         sx={{ 
//           mb: 3, 
//           p: 2, 
//           bgcolor: 'warning.light',
//           color: 'warning.dark'
//         }}
//       >
//         🎉 Yay! you just saved ₹2356 on this booking!
//       </Paper>

//       <Grid container spacing={3}>
//         {/* Left section - Form */}
//         <Grid item xs={12} md={8}>
//           <Paper sx={{ p: 3 }}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
//               <Box
//                 sx={{
//                   width: 24,
//                   height: 24,
//                   borderRadius: '50%',
//                   bgcolor: 'common.black',
//                   color: 'common.white',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}
//               >
//                 1
//               </Box>
//               <Typography variant="h6">Enter your details</Typography>
//             </Box>

//             <Typography 
//               sx={{ mb: 3, color: 'text.secondary' }}
//             >
//               We will use these details to share your booking information
//             </Typography>

//             <Grid container spacing={2}>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="Full Name"
//                   placeholder="Enter first and last name"
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="Email Address"
//                   placeholder="name@abc.com"
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Box sx={{ display: 'flex', gap: 1 }}>
//                   <Select
//                     value={phoneCode}
//                     onChange={(e) => setPhoneCode(e.target.value)}
//                     sx={{ width: 100 }}
//                   >
//                     <MenuItem value="+91">+91</MenuItem>
//                     <MenuItem value="+1">+1</MenuItem>
//                     <MenuItem value="+44">+44</MenuItem>
//                   </Select>
//                   <TextField
//                     fullWidth
//                     placeholder="e.g. 1234567890"
//                     variant="outlined"
//                   />
//                   <Button 
//                     variant="contained" 
//                     sx={{ 
//                       bgcolor: 'grey.100', 
//                       color: 'text.secondary',
//                       '&:hover': {
//                         bgcolor: 'grey.200'
//                       }
//                     }}
//                   >
//                     Send passcode
//                   </Button>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Paper>
//         </Grid>

//         {/* Right section - Hotel details */}
//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//                 <Box>
//                   <Typography variant="h6">{name}</Typography>
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
//                     <StyledBadge>
//                       {rating}
//                       <Star sx={{ width: 16, height: 16 }} />
//                     </StyledBadge>
//                     <Typography variant="body2" color="text.secondary">
//                       ({ratingCount} Ratings) · Excellent
//                     </Typography>
//                   </Box>
//                   <Typography sx={{ mt: 1 }}>1 Night</Typography>
//                 </Box>
//                 <Box
//                   component="img"
//                   src={images[0]}
//                   alt="Hotel"
//                   sx={{
//                     width: 96,
//                     height: 96,
//                     borderRadius: 1,
//                     objectFit: 'cover'
//                   }}
//                 />
//               </Box>

//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//                 <CalendarToday sx={{ color: 'text.secondary' }} />
//                 <Typography>Tue, 22 Oct – Wed, 23 Oct</Typography>
//               </Box>

//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
//                 <Hotel sx={{ color: 'text.secondary' }} />
//                 <Typography>Classic · 1 Room, 1 Guest</Typography>
//               </Box>

//               <Divider sx={{ mb: 2 }} />

//               {/* Price breakdown */}
//               <Box sx={{ '& > div': { mb: 1 } }}>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                   <Typography>Room price for 1 Night × 1 Guest</Typography>
//                   <Typography>₹{price}</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'success.main' }}>
//                   <Typography>Instant discount</Typography>
//                   <Typography>-₹1628</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'success.main' }}>
//                   <Typography>62% Coupon Discount</Typography>
//                   <Typography>-₹2356</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'success.main' }}>
//                   <Typography>Wizard discount 5%</Typography>
//                   <Typography>-₹72</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                   <Typography>Wizard Blue membership charge</Typography>
//                   <Typography>₹72</Typography>
//                 </Box>
//               </Box>

//               <Divider sx={{ my: 2 }} />

//               <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
//                 <Typography>Payable Amount</Typography>
//                 <Typography>₹{price}</Typography>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default HotelBookingForm;
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom'; // Import useLocation

// import {
//   Box,
//   Typography,
//   Paper,
//   Grid,
//   TextField,
//   Button,
//   Select,
//   MenuItem,
//   Card,
//   CardContent,
//   Divider,
//   styled
// } from '@mui/material';
// import { CalendarToday, Hotel, Star } from '@mui/icons-material';

// // Styled components
// const StyledBadge = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.success.main,
//   color: theme.palette.common.white,
//   padding: '4px 8px',
//   borderRadius: theme.shape.borderRadius,
//   display: 'flex',
//   alignItems: 'center',
//   gap: '4px',
// }));



// const HotelBookingForm = () => {
//   const location = useLocation(); // Use the location hook to access passed data
//   const hotelDetails = location.state;
  
//     // Check if hotelDetails is available
//     if (!hotelDetails) {
//       return <div>No hotel details provided!</div>;
//     }
//   // Destructure with default values to avoid errors
//   const {
//     name,
//     location: hotelLocation,
//     distance,
//     rating,
//     ratingCount,
//     images = [], // Default to an empty array
//     price,
//     originalPrice,
//     facilities = [], // Default to an empty array
//   } = location.state || {};

//   // Handle missing data
//   if (!location.state) {
//     return <Typography>Error: Hotel details not found.</Typography>;
//   }

//   const [phoneCode, setPhoneCode] = useState('+91');

//   return (
//     <Box sx={{ p: 3, maxWidth: 'lg', mx: 'auto' }}>
//       {/* Back button */}
//       <Typography 
//         sx={{ 
//           mb: 2, 
//           color: 'error.main', 
//           cursor: 'pointer',
//           display: 'flex',
//           alignItems: 'center'
//         }}
//       >
//         ← Modify your booking
//       </Typography>

//       {/* Success message */}
//       <Paper 
//         sx={{ 
//           mb: 3, 
//           p: 2, 
//           bgcolor: 'warning.light',
//           color: 'warning.dark'
//         }}
//       >
//         🎉 Yay! you just saved ₹2356 on this booking!
//       </Paper>

//       <Grid container spacing={3}>
//         {/* Left section - Form */}
//         <Grid item xs={12} md={8}>
//           <Paper sx={{ p: 3 }}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
//               <Box
//                 sx={{
//                   width: 24,
//                   height: 24,
//                   borderRadius: '50%',
//                   bgcolor: 'common.black',
//                   color: 'common.white',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}
//               >
//                 1
//               </Box>
//               <Typography variant="h6">Enter your details</Typography>
//             </Box>

//             <Typography 
//               sx={{ mb: 3, color: 'text.secondary' }}
//             >
//               We will use these details to share your booking information
//             </Typography>

//             <Grid container spacing={2}>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="Full Name"
//                   placeholder="Enter first and last name"
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="Email Address"
//                   placeholder="name@abc.com"
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Box sx={{ display: 'flex', gap: 1 }}>
//                   <Select
//                     value={phoneCode}
//                     onChange={(e) => setPhoneCode(e.target.value)}
//                     sx={{ width: 100 }}
//                   >
//                     <MenuItem value="+91">+91</MenuItem>
//                     <MenuItem value="+1">+1</MenuItem>
//                     <MenuItem value="+44">+44</MenuItem>
//                   </Select>
//                   <TextField
//                     fullWidth
//                     placeholder="e.g. 1234567890"
//                     variant="outlined"
//                   />
//                   <Button 
//                     variant="contained" 
//                     sx={{ 
//                       bgcolor: 'grey.100', 
//                       color: 'text.secondary',
//                       '&:hover': {
//                         bgcolor: 'grey.200'
//                       }
//                     }}
//                   >
//                     Send passcode
//                   </Button>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Paper>
//         </Grid>

//         {/* Right section - Hotel details */}
//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//                 <Box>
//                   <Typography variant="h6">{name}</Typography>
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
//                     <StyledBadge>
//                       {rating}
//                       <Star sx={{ width: 16, height: 16 }} />
//                     </StyledBadge>
//                     <Typography variant="body2" color="text.secondary">
//                       ({ratingCount} Ratings) · Excellent
//                     </Typography>
//                   </Box>
//                   <Typography sx={{ mt: 1 }}>1 Night</Typography>
//                 </Box>
//                 {images.length > 0 && (
//                   <Box
//                     component="img"
//                     src={images[0]}
//                     alt="Hotel"
//                     sx={{
//                       width: 96,
//                       height: 96,
//                       borderRadius: 1,
//                       objectFit: 'cover'
//                     }}
//                   />
//                 )}
//               </Box>

//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//                 <CalendarToday sx={{ color: 'text.secondary' }} />
//                 <Typography>Tue, 22 Oct – Wed, 23 Oct</Typography>
//               </Box>

//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
//                 <Hotel sx={{ color: 'text.secondary' }} />
//                 <Typography>Classic · 1 Room, 1 Guest</Typography>
//               </Box>

//               <Divider sx={{ mb: 2 }} />

//               {/* Price breakdown */}
//               <Box sx={{ '& > div': { mb: 1 } }}>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                   <Typography>Room price for 1 Night × 1 Guest</Typography>
//                   <Typography>₹{price}</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'success.main' }}>
//                   <Typography>Instant discount</Typography>
//                   <Typography>-₹1628</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'success.main' }}>
//                   <Typography>62% Coupon Discount</Typography>
//                   <Typography>-₹2356</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'success.main' }}>
//                   <Typography>Wizard discount 5%</Typography>
//                   <Typography>-₹72</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                   <Typography>Wizard Blue membership charge</Typography>
//                   <Typography>₹72</Typography>
//                 </Box>
//               </Box>

//               <Divider sx={{ my: 2 }} />

//               <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
//                 <Typography>Payable Amount</Typography>
//                 <Typography>₹{price}</Typography>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default HotelBookingForm;


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box, Typography, Paper, Grid, TextField, Button, Select, MenuItem, Card, CardContent, Divider, styled
} from '@mui/material';
import { CalendarToday, Hotel, Star } from '@mui/icons-material';

// Styled components
const StyledBadge = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: theme.palette.common.white,
  padding: '4px 8px',
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
}));

const HotelBookingForm = () => {
  const location = useLocation();
  const { id } = useParams();
  console.log("akfj" + id);

  const [hotelDetails, setHotelDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch hotel details by hotelId
  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(`/api/hotels/${id}`); // Assuming you have an endpoint to fetch the hotel details by ID
        setHotelDetails(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load hotel details');
        setLoading(false);
      }
    };

    if (id) {
      fetchHotelDetails();
    }
  }, [id]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  if (!hotelDetails) {
    return <Typography>No hotel details available!</Typography>;
  }

  const {
    name,
    location: hotelLocation,
    distance,
    rating,
    ratingCount,
    images = [],
    price,
    originalPrice,
    facilities = [],
  } = hotelDetails;

  return (
    <Box sx={{ p: 3, maxWidth: 'lg', mx: 'auto' }}>
      {/* Back button */}
      <Typography 
        sx={{ 
          mb: 2, 
          color: 'error.main', 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        ← Modify your booking
      </Typography>

      {/* Success message */}
      <Paper 
        sx={{ 
          mb: 3, 
          p: 2, 
          bgcolor: 'warning.light',
          color: 'warning.dark'
        }}
      >
        🎉 Yay! you just saved ₹2356 on this booking!
      </Paper>

      <Grid container spacing={3}>
        {/* Left section - Form */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  bgcolor: 'common.black',
                  color: 'common.white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                1
              </Box>
              <Typography variant="h6">Enter your details</Typography>
            </Box>

            <Typography 
              sx={{ mb: 3, color: 'text.secondary' }}
            >
              We will use these details to share your booking information
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  placeholder="Enter first and last name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  placeholder="name@abc.com"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Select
                    value={phoneCode}
                    onChange={(e) => setPhoneCode(e.target.value)}
                    sx={{ width: 100 }}
                  >
                    <MenuItem value="+91">+91</MenuItem>
                    <MenuItem value="+1">+1</MenuItem>
                    <MenuItem value="+44">+44</MenuItem>
                  </Select>
                  <TextField
                    fullWidth
                    placeholder="e.g. 1234567890"
                    variant="outlined"
                  />
                  <Button 
                    variant="contained" 
                    sx={{ 
                      bgcolor: 'grey.100', 
                      color: 'text.secondary',
                      '&:hover': {
                        bgcolor: 'grey.200'
                      }
                    }}
                  >
                    Send passcode
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Right section - Hotel details */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Box>
                  <Typography variant="h6">{name}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                    <StyledBadge>
                      {rating}
                      <Star sx={{ width: 16, height: 16 }} />
                    </StyledBadge>
                    <Typography variant="body2" color="text.secondary">
                      ({ratingCount} Ratings) · Excellent
                    </Typography>
                  </Box>
                  <Typography sx={{ mt: 1 }}>1 Night</Typography>
                </Box>
                {images.length > 0 && (
                  <Box
                    component="img"
                    src={images[0]}
                    alt="Hotel"
                    sx={{
                      width: 96,
                      height: 96,
                      borderRadius: 1,
                      objectFit: 'cover'
                    }}
                  />
                )}
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <CalendarToday sx={{ color: 'text.secondary' }} />
                <Typography>Tue, 22 Oct – Wed, 23 Oct</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Hotel sx={{ color: 'text.secondary' }} />
                <Typography>Classic · 1 Room, 1 Guest</Typography>
              </Box>

              <Divider sx={{ mb: 2 }} />

              {/* Price breakdown */}
              <Box sx={{ '& > div': { mb: 1 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>Room price for 1 Night × 1 Guest</Typography>
                  <Typography>₹{price}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'success.main' }}>
                  <Typography>Instant discount</Typography>
                  <Typography>-₹1628</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'success.main' }}>
                  <Typography>62% Coupon Discount</Typography>
                  <Typography>-₹2356</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'success.main' }}>
                  <Typography>Wizard discount 5%</Typography>
                  <Typography>-₹72</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>Wizard Blue membership charge</Typography>
                  <Typography>₹72</Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <Typography>Payable Amount</Typography>
                <Typography>₹{price}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HotelBookingForm;
