import  { useState } from "react";
import Pane from "./Pane";

const panesData = [
  { color: "red", icon: "walking", title: "Imagine", subtitle: "Chase your dreams" },
  { color: "yellow", icon: "apple-alt", title: "Build", subtitle: "Realize your vision" },
  { color: "green", icon: "tree", title: "Explore", subtitle: "Discover the world" },
  { color: "blue", icon: "tint", title: "Adapt", subtitle: "Embrace the times" },
  { color: "purple", icon: "palette", title: "Inspire", subtitle: "Share your potential" },
];

const YourComponent = () => {
  const [activePaneIndex, setActivePaneIndex] = useState(0);

  const handlePaneClick = (index) => {
    setActivePaneIndex(index);
  };

  return (
    <div className="antialiased bg-gradient-to-b flex flex-col font-sans from-black items-stretch justify-center h-screen p-2 to-gray-900 sm:flex-row sm:items-center">
      <div className="flex flex-col flex-grow items-stretch max-w-2xl min-w-md w-full sm:flex-row sm:h-72 sm:overflow-hidden">
        {panesData.map((pane, index) => (
          <Pane
            key={index}
            color={pane.color}
            icon={pane.icon}
            title={pane.title}
            subtitle={pane.subtitle}
            active={activePaneIndex === index}
            onClick={() => handlePaneClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default YourComponent;
