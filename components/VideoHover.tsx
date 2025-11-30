import React, { useRef } from 'react';

interface VideoHoverProps {
  src: string;
  className?: string;
  onClick?: () => void;
}

export const VideoHover: React.FC<VideoHoverProps> = ({ src, className, onClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay blocked", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
       <video
        ref={videoRef}
        src={src}
        className={`${className} object-cover transition-transform duration-300 group-hover:scale-105 border border-gray-300 rounded-md`}
        muted
        loop
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 group-hover:opacity-0 transition-opacity">
        <div className="bg-black/30 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </div>
      </div>
    </div>
  );
};