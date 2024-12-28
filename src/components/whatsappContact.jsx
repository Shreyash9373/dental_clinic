import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const WhatsappContact = () => {
    const [showContact, setShowContact] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
  
    useEffect(() => {
      AOS.init({ duration: 900 }); // Initialize AOS with optional settings
    }, []);
  
    const handleToggle = () => {
      if (showContact) {
        // Trigger the exit animation for WhatsApp
        setIsExiting(true);
        setTimeout(() => {
          setShowContact(false); // Hide WhatsApp after animation completes
          setIsExiting(false);
        }, 500); // Match the animation duration
      } else {
        setShowContact(true); // Show WhatsApp again
      }
    };
  
    return (
      <div className='w-full h-auto overflow-hidden'> 
        <div>
          {/* Comment Icon */}
          <div
            onClick={handleToggle}
            className={`bottom-4 md:bottom-8  right-4 md:right-8  fixed bg-blue-500 text-white size-14 flex items-center justify-center z-10 p-2 rounded-full transition-transform duration-500 ${
              showContact ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <FontAwesomeIcon className="size-8 text-gray-300" icon={faComments} />
          </div>
  
          {/* WhatsApp Icon */}
          {showContact && (
            <a
              data-aos="fade-up"
              href="https://wa.me/9373180080" // Replace with the actual phone number
              target="_blank"
              rel="noopener noreferrer"
              className={`bottom-24 right-8 fixed bg-green-500 text-white size-14 flex items-center justify-center z-10 p-2 rounded-full transition-all duration-500 ${
                isExiting ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              <FontAwesomeIcon
                className="size-8 text-gray-300"
                icon={faWhatsapp}
              />
            </a>
          )}
  
          {/* Contact Icon */}
          {showContact && ( 
          <a
            data-aos="fade-up"
            href="tel:+9373180080" // Same phone number, format as per international dialing
            target="_blank"
            rel="noopener noreferrer"
            className={`bottom-40 right-8 fixed bg-teal-500 text-white size-14 flex items-center justify-center z-10 p-2 rounded-full transition-all duration-500 ${
              isExiting ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <FontAwesomeIcon
              className="size-8 text-gray-300"
              icon={faPhone} // Using the phone icon
            />
          </a>
          )}
        </div>
      </div>
    );
  };
  
  export default WhatsappContact;