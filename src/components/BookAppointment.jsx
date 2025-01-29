import React from 'react'
import ViewAppointment from '../pages/ViewAppointment'

const BookAppointment = () => {
  return (
    <div  className='w-full h-full py-12 flex flex-col items-center justify-center gap-6'>
        
        <div className='w-[95%] pt-8'>
        <ViewAppointment />
        </div>
      
    </div>
  )
}

export default BookAppointment
