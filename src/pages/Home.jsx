import React from 'react';
import Header from '../components/Header';
import Ourservices from '../components/Ourservices';
import Appointments from '../components/Appointments';

const Home = () => (
  <div className='px-4 py-4'>
    <Header />
    <Ourservices/>
    <Appointments/>
  </div>
);

export default Home;
