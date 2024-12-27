import React from 'react';
import Patient from './components/Patient';
import DisplayDoctor from './components/DisplayDoctor';
import WhatsappContact from './components/whatsappContact';

const App = () => {
 

  return (
    
    <div className='w-full h-auto overflow-hidden'>
      <div>
        <WhatsappContact />
      </div>
      <Patient />
      <div className="mt-8 mx-2">
        <DisplayDoctor />
      </div>
    </div>
  );
};

export default App;
