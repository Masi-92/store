import React from "react";
import { Icon } from "iconsax-react";

const Pane = ({ color, icon, title, subtitle, active, onClick }) => {
  // Combine background layers for improved performance and clarity
  const backgroundStyle = {
    backgroundColor: `var(--color-${color}-500)`, // Use CSS variables if available
    backgroundImage: `url("images/${color}-bg.jpg")`, // Replace with actual image paths
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 10,
  };

  return (
    <div
      className={`cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all ${
        active ? 'active' : ''
      }`}
      onClick={onClick}
      style={backgroundStyle}
    >
      <div className="absolute background bg-center bg-cover bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10" />
      <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 transform transition-all translate-y-1/2 z-20">
        <linearGradient id={`gradient-${color}`} to="bottom" from="transparent" to="black" />
      </div>
      <div className="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30">
        <div className={`bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-${color}-500 w-10`}>
          <Icon name={icon} size="24" />
        </div>
        <div className="content flex flex-col justify-center leading-tight text-white whitespace-pre">
          <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">{title}</div>
          <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Pane;
