import React, { useState } from 'react';

const FeatureCard = ({ icon, title, colorClass }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center transition-all duration-300 h-48 w-full transform hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className={`text-lg font-medium text-center transition-colors duration-300 ${isHovered ? colorClass : 'text-gray-800'}`}>
        {title}
      </h3>
    </div>
  );
};

const UPSBFeatures = () => {
  const features = [
    { 
      icon: <div className="text-purple-600 text-5xl font-bold bg-purple-100 w-12 h-12 flex items-center justify-center rounded">B</div>,
      title: "Bootstrap V5", 
      colorClass: "text-purple-600" 
    },
    { 
      icon: <div className="text-orange-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#E34F26">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
              </svg>
            </div>,
      title: "HTML 5", 
      colorClass: "text-orange-600" 
    },
    { 
      icon: <div className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#1572B6">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"></path>
              </svg>
            </div>,
      title: "CSS 3", 
      colorClass: "text-blue-500" 
    },
    { 
      icon: <div className="text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 512 384" fill="#CD6799">
                <path d="M440.6 220.6c-17.9.1-33.4 4.4-46.4 10.8-4.8-9.5-9.6-17.8-10.4-24-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.1-17.6-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3c-2.1 6.2-27.1 61.8-33.6 76.3-3.3 7.4-6.2 13.3-8.3 17.3s-.1.3-.3.7c-1.8 3.4-2.8 5.3-2.8 5.3v.1c-1.4 2.5-2.9 4.9-3.6 4.9-.5 0-1.5-6.7.2-15.9 3.7-19.3 12.7-49.4 12.6-50.5 0-.5 1.7-5.8-5.8-8.5-7.3-2.7-9.9 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.9-15.5-33.9c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.9-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1l-1.1-1.2c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.6-101.8 78.3-39 141-28.3 151.9-4.5 15.5 34-33.5 97.2-114.9 106.3-31 3.5-47.3-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.9 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8-42.1 15-87.7 38.4-120.5 69.1-39 36.4-45.2 68.2-42.6 81.4 9.1 47.1 74 77.8 100 100.5-1.3.7-2.5 1.4-3.6 2-13 6.4-62.5 32.3-74.9 59.7-14 31 2.2 53.3 13 56.3 33.4 9.3 67.6-7.4 86.1-34.9 18.4-27.5 16.2-63.2 7.7-79.5l-.3-.6 10.2-6c6.6-3.9 13.1-7.5 18.8-10.6-3.2 8.7-5.5 19-6.7 34-1.4 17.6 5.8 40.4 15.3 49.4 4.2 3.9 9.2 4 12.3 4 11 0 16-9.1 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1c.8-1.2 1.2-1.9 1.2-1.9v-.2c3-5.2 9.7-17.1 19.7-36.8 12.9-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.2 7.6 7 15.9 10.7 24-3 4.2-4.8 6.6-4.8 6.6l.1.1c-2.4 3.2-5.1 6.6-7.9 10-10.2 12.2-22.4 26.1-24 30.1-1.9 4.7-1.5 8.2 2.2 11 2.7 2 7.5 2.4 12.6 2 9.2-.6 15.6-2.9 18.8-4.3 5-1.8 10.7-4.5 16.2-8.5 10-7.4 16.1-17.9 15.5-31.9-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.8-2.6 2.7-4 15.8-23.1 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.9 6.5 5.7 13.6 9.1 20.6-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.9.8 9.5-1 13.7-2.8 5.2-1.7 11.5-4.6 17.3-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.9-8.2 49.6-5.7 44.5 5.2 53.3 33 51.6 44.6-1.7 11.6-11 18-14.1 20-3.1 1.9-4.1 2.6-3.8 4 .4 2.1 1.8 2 4.5 1.6 3.7-.6 23.4-9.5 24.2-30.9 1.2-27.5-24.9-57.5-71.2-57.2zm-343.2 115.7c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.8-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.2 9.1-5.5.6-.4 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.6-1.5-9-25.8-1.1-49.8 4-12.1 12.5-26.5 17.5-32.1 8.1-9 16.9-12 19.1-8.3 2.6 4.8-9.9 39.6-13.1 47.4zm88.7 42.4c-2.2 1.1-4.2 1.9-5.1 1.3-.7-.4.9-1.9.9-1.9s11.1-11.9 15.5-17.4c2.5-3.2 5.5-6.9 8.7-11.1v1.2c0 14.4-13.8 24-20 27.9zm68.4-15.6c-1.6-1.2-1.4-4.9 4-16.5 2.1-4.6 6.9-12.3 15.2-19.6 1 3 1.6 5.9 1.5 8.6-.1 18-12.9 24.7-20.7 27.5z"/>
              </svg>
            </div>,
      title: "SASS", 
      colorClass: "text-pink-500" 
    },
    { 
      icon: <div className="text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0769AD">
                <path d="M1.625 0c-1.069 0-1.625 1.024-1.625 2.033 0 1.009 1.069 2.024 1.625 2.024 0-.012 3.446.004 3.446.004l-3.798 3.826c-.331.32-.604.98-.604 1.594 0 .614.398 1.175.731 1.507.332.332 3.082 3.037 3.082 3.037s-.06-3.485-.06-3.485c0-.573-1.006-1.631-1.006-2.248s.934-1.738 1.516-2.321l3.795-3.795c-.011 0-.001-2.177-.001-2.177-1.011 0-2.027-.557-3.027-.557l-4.074.001zm14.563 0c.578 0 1.063.202 1.592.607s2.883 2.757 2.883 2.757c.578.577 1.055 1.053 1.055 1.631s-1.055 1.052-1.055 1.631v4.910c0 .578.479 1.055 1.057 1.055h2.609c0 .577-.48 1.055-1.057 1.055h-4.877c-.578 0-1.057-.48-1.057-1.055v-4.912c0-.578-.48-1.055-1.057-1.055h-4.877c-.578 0-1.058-.479-1.058-1.056v-2.611c0-.577.482-1.055 1.059-1.055h4.877c.577 0 1.056-.479 1.056-1.055v-1.055c-.578 0-1.057-.479-1.057-1.055h1.873zm5.273 15.602c-.578 0-1.057.48-1.057 1.056v2.609c.578 0 1.057.48 1.057 1.057h1.893c0-.578.479-1.057 1.057-1.057v-2.609c-.578 0-1.057-.48-1.057-1.056h-1.893z"></path>
              </svg>
            </div>,
      title: "jQuery", 
      colorClass: "text-blue-400" 
    },
    { 
      icon: <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3" fill="#FF3D00"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3" fill="#FFCC80"/>
                <path d="M5.5 10.5h2v1h-2v-1zM15 11.5h1v2h-1z" fill="#1976D2"/>
                <path d="M18 11c-1.49 0-2.7 1.21-2.7 2.7s1.21 2.7 2.7 2.7 2.7-1.21 2.7-2.7S19.49 11 18 11zm0 4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="#1976D2"/>
              </svg>
            </div>,
      title: "Browser Compatibility", 
      colorClass: "text-blue-600" 
    },
    { 
      icon: <div className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 448 512" fill="#0e76e8">
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-82.4 204.8L218.8 348l-56.3-56.3-24.5 24.5 80.8 80.8 122.8-122.8-24.5-24.5z"></path>
              </svg>
            </div>,
      title: "Font Awesome Pro", 
      colorClass: "text-blue-500" 
    },
    { 
      icon: <div className="text-green-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#2e7d32">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM8 11h3v3H8zm4-4h3v7h-3z"></path>
              </svg>
            </div>,
      title: "Magnific Popup", 
      colorClass: "text-green-700" 
    },
    { 
      icon: <div className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#1E88E5">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
              </svg>
            </div>,
      title: "Clean Code", 
      colorClass: "text-blue-500" 
    },
    { 
      icon: <div className="text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#e53935">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
              </svg>
            </div>,
      title: "Google Map", 
      colorClass: "text-red-500" 
    },
        { 
          icon: <div className="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0284c7">
                    <path d="M19.8 18.4l-14-13.9C4.4 5.8 4.4 4.3 5.8 3c1.3-1.3 2.8-1.3 4.1 0l10.9 10.9 1.4-1.4L11.3 1.6C9.1-.6 5.6-.6 3.4 1.6 1.1 3.9 1.1 7.4 3.3 9.6L18 24c.4.4 1 .4 1.4 0l1.4-1.4c.3-.5-.6-3.7-1-4.2z"/>
                    <path d="M19.8 16l-1.9-1.9c-.3-.3-.9-.3-1.2 0-.3.3-.3.9 0 1.2l1.9 1.9c.3.3.9.3 1.2 0 .3-.3.3-.9 0-1.2z"/>
                  </svg>
                </div>,
          title: "Swiper Slider", 
          colorClass: "text-blue-500" 
        },
        { 
          icon: <div className="text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#9333ea">
                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                  </svg>
                </div>,
          title: "Easy to Customize", 
          colorClass: "text-purple-500" 
        },
        { 
          icon: <div className="text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#38bdf8">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                  </svg>
                </div>,
          title: "Well Documented", 
          colorClass: "text-blue-400" 
        },
        { 
          icon: <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <path d="M12 3c-1.3 0-2.4.84-2.82 2H3v3h2.18C5.6 9.16 6.7 10 8 10c1.3 0 2.4-.84 2.82-2h10V5h-10C10.4 3.84 9.3 3 8 3zm0 5c-1.3 0-2.4.84-2.82 2H3v3h2.18C5.6 14.16 6.7 15 8 15c1.3 0 2.4-.84 2.82-2h10v-3h-10C10.4 8.84 9.3 8 8 8zm8 7c-1.3 0-2.4.84-2.82 2H3v3h10.18c.42 1.16 1.52 2 2.82 2 1.3 0 2.4-.84 2.82-2H21v-3h-2.18c-.42-1.16-1.52-2-2.82-2z" fill="#4285F4"/>
                    <path d="M8 3c-1.3 0-2.4.84-2.82 2H3v3h2.18C5.6 9.16 6.7 10 8 10c1.3 0 2.4-.84 2.82-2h10V5h-10C10.4 3.84 9.3 3 8 3z" fill="#EA4335"/>
                    <path d="M8 8c-1.3 0-2.4.84-2.82 2H3v3h2.18C5.6 14.16 6.7 15 8 15c1.3 0 2.4-.84 2.82-2h10v-3h-10C10.4 8.84 9.3 8 8 8z" fill="#FBBC05"/>
                    <path d="M16 15c-1.3 0-2.4.84-2.82 2H3v3h10.18c.42 1.16 1.52 2 2.82 2 1.3 0 2.4-.84 2.82-2H21v-3h-2.18c-.42-1.16-1.52-2-2.82-2z" fill="#34A853"/>
                  </svg>
                </div>,
          title: "Google Font", 
          colorClass: "text-blue-600" 
        },
        { 
          icon: <div className="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0ea5e9">
                    <path d="M3 17h18v2H3zm0-7h18v2H3zm0-7h18v2H3z"/>
                    <circle cx="15" cy="10" r="1.5" fill="#0ea5e9"/>
                    <circle cx="9" cy="10" r="1.5" fill="#0ea5e9"/>
                    <path d="M4.5 15.5L9 13l4.5 2.5L18 13"/>
                  </svg>
                </div>,
          title: "Typography", 
          colorClass: "text-blue-500" 
        },
        { 
          icon: <div className="text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#60a5fa">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
                    <path d="M18 14.97V19h-4.03c.29-.4.54-.84.74-1.29.94-.06 1.79-.41 2.44-1.03.39-.36 1.12-1.35.85-1.71z"/>
                    <path d="M6 19v-4.03c.4.29.84.54 1.29.74.06.94.41 1.79 1.03 2.44.36.39 1.35 1.12 1.71.85H6z"/>
                    <path d="M6 5.03V10h4.03c-.29-.4-.54-.84-.74-1.29-.94-.06-1.79-.41-2.44-1.03-.39-.36-1.12-1.35-.85-1.71z"/>
                    <path d="M18 10V5.03c-.4.29-.84.54-1.29.74-.06.94-.41 1.79-1.03 2.44-.36.39-1.35 1.12-1.71.85H18z"/>
                  </svg>
                </div>,
          title: "Friendly Support", 
          colorClass: "text-blue-400" 
        },
        { 
          icon: <div className="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#f472b6"/>
                    <circle cx="12" cy="12" r="8" fill="#ec4899"/>
                    <circle cx="12" cy="12" r="6" fill="#db2777"/>
                    <circle cx="12" cy="12" r="4" fill="#be185d"/>
                    <circle cx="12" cy="12" r="2" fill="#9d174d"/>
                  </svg>
                </div>,
          title: "Unlimited Color", 
          colorClass: "text-pink-600" 
        },
        { 
          icon: <div className="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#3b82f6">
                    <path d="M19.67 2H4.33C3.6 2 3 2.6 3 3.33v17.33C3 21.4 3.6 22 4.33 22h15.33c.74 0 1.34-.6 1.34-1.33V3.33C21 2.6 20.4 2 19.67 2zM9 19H5v-1h4v1zm0-2H5v-1h4v1zm0-2H5v-1h4v1zm10 4h-8v-1h8v1zm0-2h-8v-1h8v1zm0-2h-8v-1h8v1zm0-3H5V5h14v7z"/>
                  </svg>
                </div>,
          title: "Fast Loading", 
          colorClass: "text-blue-500" 
        },
        { 
          icon: <div className="text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#22c55e">
                    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
                  </svg>
                </div>,
          title: " Lifetime Updates", 
          colorClass: "text-green-500" 
        },
        { 
          icon: <div className="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0ea5e9">
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9.41 15.95L12 13.36l2.59 2.59L16 14.54l-4-4-4 4 1.41 1.41z"/>
                    <path d="M7 13.5h10v1H7z"/>
                    <path d="M7 15.5h10v1H7z"/>
                    <path d="M7 17.5h10v1H7z"/>
                  </svg>
                </div>,
          title: "Fully Responsive", 
          colorClass: "text-blue-500" 
        },
    
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Buy Upsb & Enjoy Some
        </h1>
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">
          Exclusive Features
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              colorClass={feature.colorClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UPSBFeatures;