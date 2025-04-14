'use client'; 

// components/TawkToChat.js
import { useEffect } from 'react';

export default function TawkToChat() {
  useEffect(() => {
    if (window.Tawk_API) return; // Prevent multiple injections

    const s1 = document.createElement("script");
    s1.src = "https://embed.tawk.to/67ee49dbb6b565190a1dbffa/1intd11mp"; // Replace with your ID
    s1.async = true;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  return null;
}









// import { useEffect } from 'react';

// const TawkToChat = () => {
//   useEffect(() => {
//     var Tawk_API = window.Tawk_API || {};
//     var Tawk_LoadStart = new Date();
//     const s1 = document.createElement('script');
//     s1.src = 'https://embed.tawk.to/67ee49dbb6b565190a1dbffa/1intd11mp';
//     s1.async = true;
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     document.body.appendChild(s1);
//   }, []);

//   return null; // No UI
// };

// export default TawkToChat;
