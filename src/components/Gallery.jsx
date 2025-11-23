import React from "react";
import { motion } from "framer-motion";

// Paint palette with names
const paintColors = [
  { name: "Sunset Gold", hex: "#FFD700" },
  { name: "Orange Flame", hex: "#FFA500" },
  { name: "Tomato Red", hex: "#FF6347" },
  { name: "Firebrick Red", hex: "#FF4500" },
  { name: "Sky Blue", hex: "#1E90FF" },
  { name: "Deep Sky Blue", hex: "#00BFFF" },
  { name: "Steel Blue", hex: "#4682B4" },
  { name: "Cadet Blue", hex: "#5F9EA0" },
  { name: "Forest Green", hex: "#228B22" },
  { name: "Lime Green", hex: "#32CD32" },
  { name: "Green Yellow", hex: "#ADFF2F" },
  { name: "Dark Green", hex: "#006400" },
  { name: "Medium Purple", hex: "#9370DB" },
  { name: "Blue Violet", hex: "#8A2BE2" },
  { name: "Orchid", hex: "#DA70D6" },
  { name: "Lavender", hex: "#BA55D3" },
  { name: "Salmon", hex: "#FFA07A" },
  { name: "Coral", hex: "#FF7F50" },
  { name: "Hot Pink", hex: "#FF69B4" },
  { name: "Deep Pink", hex: "#FF1493" },
  { name: "Slate Gray", hex: "#708090" },
  { name: "Dark Slate Gray", hex: "#2F4F4F" },
  { name: "Light Slate Gray", hex: "#778899" },
  { name: "Light Steel Blue", hex: "#B0C4DE" },
];

export default function Gallery() {
  return (
    <section className="py-16 bg-white">
      {/* New Attractive Heading */}
<h2 className="md:text-5xl text-3xl font-extrabold text-center text-red-500 mb-4">
  Transform <span className="text-gray-800">Your</span> <span className="text-yellow-500">Wall</span> <br />
  <span className="text-gray-800">with</span> <span className="text-blue-500">Colors</span>
  <span className="text-gray-800"> & </span> <span className="text-gray-800">Shades</span>
</h2>




      {/* Subheading paragraph */}
      <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
        Few of our carefully curated paint shades that bring vibrancy and elegance
        to your spaces. Explore the colors that make your walls come alive.
      </p>

      {/* Color Palette Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 px-6">
        {paintColors.map((color, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div
              className="w-full h-24 rounded-lg shadow-md"
              style={{ backgroundColor: color.hex }}
            ></div>
            <div className="mt-2 text-sm text-gray-700 text-center">
              <span className="font-semibold">{color.name}</span>
              <div className="text-gray-500">{color.hex}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
