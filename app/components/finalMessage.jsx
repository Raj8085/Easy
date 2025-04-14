// pages/index.js
'use client'


// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function FinalNotification() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
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
    
    return () => clearInterval(timer);
  }, []);

  const handleRegisterClick = () => {
    window.location.href = 'tel:1-800-123-4567';
  };
  
  const handleInfoClick = () => {
    alert('Our premium plan includes lifetime access to all features with no recurring payments. Call now to speak with a representative.');
  };
  return (
    <div className="bg-gray-100 h-screen w-screen flex justify-center items-center p-2">
      <Head>
        <title>Important Alert</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="max-w w-full h-auto max-h-screen bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        {/* Alert Header - Compact */}
        <div className="bg-red-600 text-white p-2 text-center">
          <div className="text-2xl animate-pulse inline-block mr-2">⚠️</div>
          <h1 className="text-lg font-bold inline-block">ACCOUNT NOTICE</h1>
        </div>
        {/* Main Content - Optimized for single viewport */}
        <div className="p-3 text-gray-800 flex-grow overflow-auto">
          {/* Concise Alert Message */}
          <div className="bg-red-50 border-l-4 border-red-600 p-2 rounded text-sm mb-2">
            Your account requires registration. Complete now to continue service.
          </div>
          {/* Compact Timer & Progress */}
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-medium">
              Expires: <span className="text-red-600 font-bold">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </p>
            <div className="w-1/2 bg-gray-200 rounded-full h-1.5">
              <div className="bg-red-600 h-1.5 rounded-full w-3/4"></div>
            </div>
          </div>
          
          {/* Condensed Benefits Grid */}
          <div className="grid grid-cols-2 gap-1 mb-2">
            <div className="flex items-center text-xs">
              <span className="text-red-600 mr-1">✓</span>
              <span>Lifetime access</span>
            </div>
            <div className="flex items-center text-xs">
              <span className="text-red-600 mr-1">✓</span>
              <span>24/7 support</span>
            </div>
            <div className="flex items-center text-xs">
              <span className="text-red-600 mr-1">✓</span>
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center text-xs">
              <span className="text-red-600 mr-1">✓</span>
              <span>Exclusive updates</span>
            </div>
          </div>
          
          {/* Contact Info - Compact */}
          <div className="bg-gray-50 p-2 rounded text-center mb-2">
            <p className="text-xs mb-1">Call now to register your plan:</p>
            <a href="tel:1-800-123-4567" className="text-base font-bold text-red-600 block">
              1-800-123-4567
            </a>
          </div>
          
          {/* Action Buttons - Side by Side */}
          <div className="flex justify-between gap-2">
            <button 
              onClick={handleRegisterClick}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-3 rounded-full text-sm"
            >
              Register Now
            </button>
            <button 
              onClick={handleInfoClick}
              className="flex-1 border border-red-600 text-red-600 hover:bg-red-50 font-medium py-2 px-3 rounded-full text-sm"
            >
              Learn More
            </button>
          </div>
        </div>
        
        {/* Footer - Minimal */}
        <div className="bg-gray-50 p-1 text-center border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Respond promptly to avoid service interruption.
          </p>
        </div>
      </div>
    </div>
  );
}













// import { useState, useEffect } from 'react';
// import Head from 'next/head';

// export default function FinalMessage() {
//   const [timeLeft, setTimeLeft] = useState({
//     hours: 23,
//     minutes: 59,
//     seconds: 59
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prevTime => {
//         let { hours, minutes, seconds } = prevTime;
        
//         seconds--;
        
//         if (seconds < 0) {
//           seconds = 59;
//           minutes--;
//         }
        
//         if (minutes < 0) {
//           minutes = 59;
//           hours--;
//         }
        
//         if (hours < 0) {
//           hours = 23;
//         }
        
//         return { hours, minutes, seconds };
//       });
//     }, 1000);
    
//     return () => clearInterval(timer);
//   }, []);

//   const handleRegisterClick = () => {
//     window.location.href = 'tel:1-800-123-4567';
//   };
  
//   const handleInfoClick = () => {
//     alert('Our premium plan includes lifetime access to all features with no recurring payments. Call now to speak with a representative who can explain all benefits in detail.');
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
//       <Head>
//         <title>Important Alert</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
//         {/* Alert Header */}
//         <div className="bg-red-600 text-white p-5 text-center">
//           <div className="text-4xl mb-2 animate-pulse">⚠️</div>
//           <h1 className="text-xl md:text-2xl font-bold mb-1">IMPORTANT ACCOUNT NOTICE</h1>
//           <p className="text-sm md:text-base opacity-90">Your service requires immediate attention</p>
//         </div>
        
//         {/* Alert Content */}
//         <div className="p-5 md:p-6 text-gray-800">
//           {/* Alert Box */}
//           <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-md mb-6">
//             <p className="text-sm md:text-base leading-relaxed">
//               Your account has not been properly registered. To continue enjoying our premium services without interruption, please complete your registration now.
//             </p>
//           </div>
          
//           {/* Timer */}
//           <div className="text-center my-5">
//             <p className="text-sm md:text-base font-semibold">
//               Limited time offer expires in: {' '}
//               <span className="text-lg md:text-xl text-red-600 font-bold">
//                 {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
//               </span>
//             </p>
//           </div>
          
//           {/* Progress Bar */}
//           <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
//             <div 
//               className="bg-red-600 h-2 rounded-full"
//               style={{ width: '75%', transition: 'width 2s ease-in-out' }}
//             ></div>
//           </div>
          
//           {/* Benefits */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-3">Benefits of registering your plan:</h3>
//             <div className="space-y-2">
//               <div className="flex items-start">
//                 <span className="text-red-600 mr-2">✓</span>
//                 <span className="text-sm md:text-base">Lifetime access to all premium features</span>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-red-600 mr-2">✓</span>
//                 <span className="text-sm md:text-base">24/7 priority customer support</span>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-red-600 mr-2">✓</span>
//                 <span className="text-sm md:text-base">No monthly fees or hidden charges</span>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-red-600 mr-2">✓</span>
//                 <span className="text-sm md:text-base">Access to exclusive content and updates</span>
//               </div>
//             </div>
//           </div>
          
//           {/* Contact Info */}
//           <div className="bg-gray-50 p-4 rounded-lg text-center mb-6">
//             <p className="text-sm md:text-base mb-2">For immediate assistance and to register your plan, call now:</p>
//             <a 
//               href="tel:1-800-123-4567" 
//               className="text-xl md:text-2xl font-bold text-red-600 block my-2"
//             >
//               1-800-123-4567
//             </a>
//             <p className="text-xs md:text-sm text-gray-600">Our representatives are available 24/7 to help you</p>
//           </div>
          
//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row justify-center gap-3">
//             <button 
//               onClick={handleRegisterClick}
//               className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition transform hover:-translate-y-0.5 hover:shadow-md"
//             >
//               Register My Plan Now
//             </button>
//             <button 
//               onClick={handleInfoClick}
//               className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-6 rounded-full transition"
//             >
//               Learn More
//             </button>
//           </div>
//         </div>
        
//         {/* Alert Footer */}
//         <div className="bg-gray-50 p-4 text-center border-t border-gray-200">
//           <p className="text-xs md:text-sm text-gray-600">
//             This is an important notification about your account status. Please respond promptly to avoid service interruption.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }