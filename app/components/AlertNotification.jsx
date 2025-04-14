// components/AlertNotification.js

'use client'
import { useState, useEffect } from 'react';
import TawkToChat from '../TawkToChat';

export default function AlertNotification() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        seconds--;
        
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        
        if (hours < 0) {
          hours = 23;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(countdownTimer);
  }, []);

  const handleRegisterClick = () => {
    window.location.href = 'tel:1-800-123-4567';
  };
  
  const handleInfoClick = () => {
    if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
      window.Tawk_API.maximize(); // Open the chat widget
    } else {
      alert("Chat is still loading. Please wait a moment...");
    }
  };
  

  return (
    // Mobile: Compact container, Desktop: Fullscreen
    <div className="w-full max-w-md md:max-w-none md:h-screen md:w-screen flex flex-col bg-white shadow-lg overflow-hidden rounded-lg md:rounded-none">
      {/* Alert Header */}
      <div className="bg-blue-600 text-white text-xl p-2 md:p-6 text-center">
        <div className="text-2xl md:text-5xl animate-pulse inline-block md:block md:mb-3">⚠️</div>
        <h1 className="text-lg md:text-4xl font-bold inline-block md:block">Warning</h1>
        <p className="hidden md:block md:text-xl mt-2">Your service requires immediate attention</p>
      </div>  
      {/* Main Content - Compact for mobile, expanded for desktop */}
      <div className="p-3 md:p-8 text-gray-800 flex-grow md:flex md:flex-col md:justify-center">
        <div className="md:max-w-4xl md:mx-auto md:w-full">
          {/* Alert Message */}
          <div className="bg-red-50 border-l-8 border-blue-600 p-2 md:p-6 rounded text-sm md:text-xl mb-2 md:mb-8 font-bold">
            <p className="md:leading-relaxed">
              Your Facebook account has been accessed from Pakistan. To avoid permanent lockout,call the number below now to logout and secure your account:
            </p>
          </div>
          {/* Timer & Progress */}
          {/* <div className="flex justify-between items-center mb-2 md:mb-8 md:flex-col md:space-y-4">
            <p className="text-xs md:text-2xl font-medium md:text-center md:w-full">
              Limited time offer expires in: <span className="text-red-600 font-bold">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </p>
            <div className="w-1/2 md:w-3/4 md:mx-auto bg-gray-200 rounded-full h-1.5 md:h-3">
              <div className="bg-red-600 h-1.5 md:h-3 rounded-full w-3/4"></div>
            </div>
          </div> */}
          {/* Benefits */}
          {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-1 md:gap-6 mb-2 md:mb-8 md:max-w-3xl md:mx-auto">
            <div className="flex items-center text-xs md:text-xl">
              <span className="text-red-600 mr-1 md:mr-3 md:text-2xl">✓</span>
              <span>Lifetime access to all premium features</span>
            </div>
            <div className="flex items-center text-xs md:text-xl">
              <span className="text-red-600 mr-1 md:mr-3 md:text-2xl">✓</span>
              <span>24/7 priority customer support</span>
            </div>
            <div className="flex items-center text-xs md:text-xl">
              <span className="text-red-600 mr-1 md:mr-3 md:text-2xl">✓</span>
              <span>No monthly fees or hidden charges</span>
            </div>
            <div className="flex items-center text-xs md:text-xl">
              <span className="text-red-600 mr-1 md:mr-3 md:text-2xl">✓</span>
              <span>Access to exclusive content and updates</span>
            </div>
          </div> */}
          {/* Contact Info */}
          <div className="bg-gray-50 p-2 md:p-6 rounded text-center mb-2 md:mb-8 md:max-w-3xl md:mx-auto">
            <p className="text-lg md:text-xl mb-4 md:mb-3 font-bold">For immediate assistance,call now:</p>
            <a href="tel:1-800-123-4567" className="text-base md:text-5xl font-bold text-blue-600 block md:my-1 text-xl underline cursor-pointer">
              1-800-123-4567
            </a>
            <p className="hidden md:block md:text-lg text-gray-600">Our representatives are available 24/7 to help you</p>
          </div>
          {/* Action Buttons */}
          <div className="flex justify-between md:justify-center gap-2 md:gap-8 md:mt-8">
            <button 
              onClick={handleRegisterClick}
              className="flex-1 md:flex-none md:px-16 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 md:py-6 px-3 rounded-full text-sm md:text-2xl transition transform hover:-translate-y-1 hover:shadow-lg  cursor-pointer"
            >
              Call now
            </button>
            <button 
              onClick={handleInfoClick}
              className="flex-1 md:flex-none md:px-16 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-large py-2 md:py-6 px-3 rounded-full text-sm md:text-2xl transition cursor-pointer"
            >
              Chat With Us
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      {/* <div className="bg-gray-50 p-1 md:p-4 text-center border-t border-gray-200">
        <p className="text-xs md:text-base text-gray-500">
          This is an important notification about your account status. Please respond promptly to avoid service interruption.
        </p>
      </div> */}
    </div>
  );
}