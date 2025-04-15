// // "use client"
// // import { Button } from '@/components/ui/button';
// // import React from 'react';

// // const FullscreenNotificationTemplate = () => {
// //    const handleRegisterClick = () => {
// //         window.location.href = 'tel:1-800-123-4567';
// //       };
// //   return (
// //     <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
// //       <div className="w-full max-w-7xl mx-auto h-screen flex flex-col bg-white overflow-hidden px-3 sm:px-6 md:px-8 lg:px-12">
// //         {/* Header - reduced padding and size on mobile */}
// //         <div className="py-2 md:py-4 flex justify-between items-center border-b border-gray-200">
// //           <img 
// //             src='/facebook.svg' 
// //             alt='Facebook' 
// //             className='w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain'
// //           />
// //         </div>
        
// //         {/* Content - optimized spacing for mobile */}
// //         <div className="flex-1 py-2 sm:py-6 md:py-8 overflow-y-auto">
// //           <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-2 md:mb-6">
// //             Security alert: login near Pakistan on a new device
// //           </h1>
          
// //           <div className="flex flex-col lg:flex-row gap-3 md:gap-8">
// //             {/* Left side - message content */}
// //             <div className="flex-1 flex flex-col">
// //               <div className="space-y-2 sm:space-y-4">
// //                 <p className="text-sm sm:text-lg">Hi,</p>
                
// //                 <p className="text-xs sm:text-base text-gray-700">
// //                   Someone just logged in to your Facebook account near PAKISTAN, PAKISTAN on Chrome. 
// //                   If this wasn't you, we're here to help you take some simple steps to secure your account.
// //                 </p>
                
// //                 <Button onClick={handleRegisterClick} className="bg-blue-600 hover:bg-blue-700">This wasn't me</Button>
                
// //                 <div className="space-y-2 sm:space-y-3 text-xs sm:text-base text-gray-700 mt-2 sm:mt-6">
// //                   <p>
// //                     If this was you, you can ignore this notification.
// //                   </p>
                  
// //                   <p>
// //                     Wondering if this notification is really from us? Visit the help Center to confirm:
// //                     <br />
// //                     <a href="facebook-support" className="text-blue-600 hover:text-blue-700 hover:underline">
// //                       www.facebook.com/help/verify
// //                     </a>
// //                   </p>
                  
// //                   <p>
// //                     To improve your account security, we've enabled login alerts. 
// //                     We'll continue to notify you whenever your username and password 
// //                     are used to log in from a new browser or device.
// //                   </p>

// //                   {/* <div className="flex flex-col sm:flex-row gap-2 sm:gap-12">
// //                   <button
// //                     className="w-full sm:w-auto px-6 sm:px-8 bg-blue-600 hover:bg-blue-700 
// //                               text-white py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base 
// //                               transition-colors duration-200 flex items-center justify-center md:mx-10"
// //                     onClick={() => window.open('tel:+1234567890')}
// //                   >
// //                     Call Now
// //                   </button>

// //                   <button
// //                     className="w-full sm:w-auto px-4 sm:px-6 bg-blue-600 hover:bg-blue-700 
// //                               text-white py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base 
// //                               transition-colors duration-200"
// //                     onClick={handleRegisterClick}
// //                   >
// //                     Chat With Us
// //                   </button>
// //                 </div> */}
                  
// //                   <p>
// //                     Thanks,
// //                     <br />
// //                     Facebook security
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Right side - notification box */}
// //             <div className="lg:w-[400px] border border-gray-300 rounded-xl p-3 sm:p-5">
// //               <div className="bg-teal-900 rounded-lg overflow-hidden h-32 sm:h-auto sm:aspect-video mb-2 sm:mb-4">
// //                 <img 
// //                   src="/pakimage.webp" 
// //                   alt="Map of Pakistan" 
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>
              
// //               <div className="space-y-1 sm:space-y-3">
// //                 <div className="flex items-center gap-2 sm:gap-3">
// //                   <span className="w-4 sm:w-5 flex justify-center">📍</span>
// //                   <span className="text-xs sm:text-base">PAKISTAN</span>
// //                 </div>
                
// //                 <div className="flex items-center gap-2 sm:gap-3">
// //                   <span className="w-4 sm:w-5 flex justify-center">💻</span>
// //                   <span className="text-xs sm:text-base">Chrome on Windows</span>
// //                 </div>
                
// //                 <div className="flex items-center gap-2 sm:gap-3">
// //                   <span className="w-4 sm:w-5 flex justify-center">🕒</span>
// //                   <span className="text-xs sm:text-base">April 11, 2025</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FullscreenNotificationTemplate;




// import React from 'react';

// const FullscreenNotificationTemplate = () => {
//   const handleRegisterClick = () => {
//     window.location.href = 'tel:1-800-123-4567';
//   };
  
//   return (
//     <div className="w-full h-full  bg-gray-100">
//       <div className="w-full max-w-7xl mx-auto bg-white p-2 sm:p-6 rounded-lg">
//         {/* Header */}
//         <div className="py-1 flex justify-between items-center border-b border-gray-200">
//           <img 
//             src='/facebook.svg' 
//             alt='Facebook' 
//             className='w-20 h-20 sm:w-16 sm:h-16 object-contain+'
//           />
//         </div>
//         {/* Content */}
//         <div className="py-2">
//           <h1 className="text-base sm:text-2xl font-semibold mb-2">
//             Security alert: login near Pakistan
//           </h1>
          
//           <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
//             {/* Left side - message content */}
//             <div className="flex-1">
//               <div className="space-y-1.5 sm:space-y-3">
//                 <p className="text-xs sm:text-base">Hi,</p>
                
//                 <p className="text-xs sm:text-base text-gray-700">
//                   Someone logged in to your Facebook account near PAKISTAN on Chrome. 
//                   If this wasn't you, secure your account now.
//                 </p>
                
//                 <button
//                   onClick={handleRegisterClick}
//                   className="w-full sm:w-auto px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs sm:text-base cursor-pointer"
//                 >
//                   This wasn't me
//                 </button>
                
//                 <div className="space-y-1.5 sm:space-y-3 text-xs sm:text-base text-gray-700">
//                   <p>
//                     If this was you, ignore this notification.
//                   </p>
                  
//                   <p className="text-xs">
//                     Verify this notification:
//                     <a href="facebook-support" className="text-blue-600 hover:text-blue-700 hover:underline ml-1">
//                       facebook.com/help/verify
//                     </a>
//                   </p>
                  
//                   <p className="text-xs sm:text-sm">
//                     We've enabled login alerts for your security.
//                   </p>
                  
//                   <p className="text-xs">
//                     Thanks,
//                     <br />
//                     Facebook security
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right side - notification box */}
//             <div className="lg:w-[300px] border border-gray-300 rounded-lg p-2 sm:p-4">
//               <div className="bg-teal-900 rounded overflow-hidden h-20 sm:h-auto sm:aspect-video mb-2">
//                 <img 
//                   src="/pakimage.webp" 
//                   alt="Map of Pakistan" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               <div className="space-y-1 sm:space-y-2">
//                 <div className="flex items-center gap-1.5">
//                   <span className="w-3 flex justify-center text-xs">📍</span>
//                   <span className="text-xs">PAKISTAN</span>
//                 </div>
                
//                 <div className="flex items-center gap-1.5">
//                   <span className="w-3 flex justify-center text-xs">💻</span>
//                   <span className="text-xs">Chrome on Windows</span>
//                 </div>
                
//                 <div className="flex items-center gap-1.5">
//                   <span className="w-3 flex justify-center text-xs">🕒</span>
//                   <span className="text-xs">April 11, 2025</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FullscreenNotificationTemplate;


import React from 'react';

const FullscreenNotificationTemplate = () => {
  const handleRegisterClick = () => {
    window.location.href = 'tel:1-800-123-4567';
  };
  
  return (
    <div className="fixed w-full min-h-screen bg-gray-100 flex items-center justify-center p-2 sm:p-4 lg:p-8">
      <div className="w-full max-w-7xl mx-auto bg-white p-4 sm:p-6 lg:p-10 rounded-lg shadow-lg">
        {/* Header */}
        <div className="py-1 sm:py-3 lg:py-4 flex justify-center items-center border-b border-gray-200">
          <img 
            src='/facebook.svg' 
            alt='Facebook' 
            className='w-32  h-20 sm:w-12 md:w-36 md:h-20  sm:h-12 lg:w-40 lg:h-16 object-contain'
          />
        </div>
        
        {/* Content */}
        <div className="py-2 sm:py-4 lg:py-6">
          <h1 className="text-base sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4 lg:mb-6">
            Security alert: login near Pakistan
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
            {/* Left side - message content */}
            <div className="flex-1">
              <div className="space-y-1.5 sm:space-y-3 lg:space-y-4">
                <p className="text-xs sm:text-base lg:text-lg">Hi,</p>
                
                <p className="text-xs sm:text-base lg:text-lg text-gray-700">
                  Someone logged in to your Facebook account near PAKISTAN on Chrome. 
                  If this wasn't you, secure your account now.
                </p>
                
                <button
                  onClick={handleRegisterClick}
                  className="w-full sm:w-auto px-4 sm:px-6 py-1.5 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-base lg:text-lg transition-colors"
                >
                  This wasn't me
                </button>
                
                <div className="space-y-1.5 sm:space-y-3 lg:space-y-4 text-xs sm:text-base lg:text-lg text-gray-700">
                  <p>
                    If this was you, ignore this notification.
                  </p>
                
                  <p className="text-xs sm:text-base lg:text-lg">
                    Verify this notification:
                    <a href="facebook-support" className="text-blue-600 hover:text-blue-700 hover:underline ml-1">
                      facebook.com/help/verify
                    </a>
                  </p>
                  
                  <p className="text-xs sm:text-base lg:text-lg">
                    We've enabled login alerts for your security.
                  </p>
                  
                  <p className="text-xs sm:text-base lg:text-lg">
                    Thanks,
                    <br />
                    Facebook security
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side - notification box */}
            <div className="lg:w-[400px] border border-gray-300 rounded-lg p-2 sm:p-4 lg:p-6">
              <div className="bg-teal-900 rounded-lg overflow-hidden h-32 sm:h-32 lg:h-48 mb-2 sm:mb-4">
                <img 
                  src="/pakimage.webp" 
                  alt="Map of Pakistan" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-1 sm:space-y-2 lg:space-y-3">
                <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                  <span className="w-3 sm:w-4 lg:w-5 flex justify-center text-xs sm:text-base lg:text-lg">📍</span>
                  <span className="text-xs sm:text-base lg:text-lg">PAKISTAN</span>
                </div>
                
                <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                  <span className="w-3 sm:w-4 lg:w-5 flex justify-center text-xs sm:text-base lg:text-lg">💻</span>
                  <span className="text-xs sm:text-base lg:text-lg">Chrome on Windows</span>
                </div>
                
                <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                  <span className="w-3 sm:w-4 lg:w-5 flex justify-center text-xs sm:text-base lg:text-lg">🕒</span>
                  <span className="text-xs sm:text-base lg:text-lg">April 11, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FullscreenNotificationTemplate;