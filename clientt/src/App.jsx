// // import HotelCard from './components/HotelCard'
// // import HotelList from './components/HotelList'
// // import Header from './pages/Header'
// // // import HotelBookingForm from './pages/HotelBookingForm'

// // function App() {

// //   return (
// //     <>
// //       <Header></Header>
// //       <HotelList></HotelList>
// //       {/* <HotelBookingForm></HotelBookingForm> */}
// //       {/* <HotelCard></HotelCard> */}
// //     </>
// //   )
// // }

// // export default App
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './pages/Header';
// import HotelList from './components/HotelList';
// import HotelBookingForm from './pages/HotelBookingForm';


// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HotelList />} />
//         <Route path="/hotelbookingform" element={<HotelBookingForm />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import HotelList from './components/HotelList';
import HotelBookingForm from './pages/HotelBookingForm';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HotelList />} />
        {/* Use :hotelId as a route parameter */}
        <Route path="/hotelbookingform/:id" element={<HotelBookingForm />} />
      </Routes>
    </Router>
  );
};

export default App;
