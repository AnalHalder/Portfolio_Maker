import React, { useState } from 'react';

const BackgroundImage = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Loader */}
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20 bg-black bg-opacity-70 text-white text-xl">
          Loading...
        </div>
      )}

      {/* Background image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/10016491_27230.svg" 
        alt="Decorative background"
        onLoad={() => setLoading(false)}
        aria-hidden="true"
        style={{ display: loading ? 'none' : 'block' }}
      />

      {/* Foreground content */}
      <div className="relative z-10 h-full w-full overflow-y-auto flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
