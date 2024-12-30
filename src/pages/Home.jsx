import React from 'react';
import Header from '../components/Header';
import Ourservices from '../components/Ourservices';
import Appointments from '../components/Appointments';
import ServiceSection from '../components/Service';
import Patient from '../components/Patient'
import DisplayDoctor from '../components/DisplayDoctor'



const Home = () => (
  <div className='px-4 py-4 w-full overflow-hidden'>
    <Header />
    <Ourservices/>
    <Appointments/>
    <ServiceSection/>
    <Patient/>
    <DisplayDoctor/>
    
  </div>
);

export default Home;
