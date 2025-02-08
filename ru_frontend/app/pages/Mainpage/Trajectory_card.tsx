import React from "react";

type Props = {
  title: string;
  description: string;
  side: string;
};

function Trajectory_card({ title, description, side }: Props) {
  return (
    <div className="relative flex items-start group">
      <div className="absolute left-8 md:left-1/2 -translate-x-4 md:-translate-x-1/2 w-8 h-8 bg-pink-500 rounded-full border-4 border-gray-800 z-10 group-hover:scale-110 transition-transform"></div>

      <div className={`ml-20 md:ml-0 md:w-full md:flex ${side}`}>
        <div className="w-full md:w-full md:pr-12 md:pl-12">
          <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl glass-effect glass-effect-hover hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm md:text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trajectory_card;
