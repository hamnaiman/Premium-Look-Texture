import React from "react";
import { motion } from "framer-motion";
// import aboutImage from "../assets/about-image.jpg";

export default function About() {
  return (
    <section id="about" className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-10">

        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          About <span className="text-yellow-500">Premium Look Texture</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 w-full">

          {/* Left Image (commented for now) */}
          {/* <div className="w-full md:w-1/2">
            <img
              src={aboutImage}
              alt="About Premium Look Texture"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div> */}

          {/* Right Text Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/3 bg-white rounded-xl shadow-lg p-8 md:p-12 text-gray-700 border-t-4 border-yellow-500 hover:shadow-2xl transition-shadow duration-300"
          >
            <p className="text-lg mb-4">
              We have been <span className="font-bold text-blue-600">providing premium colors for years</span>, 
              transforming <span className="font-bold text-red-500">simple, plain projects</span> into masterpieces.
            </p>
            <p className="text-lg mb-4">
              Our expertise includes working with renowned brands like <span className="font-bold text-purple-600">Almirah, Manto</span>, 
              and many more, bringing life and vibrancy to every wall and surface.
            </p>
            <p className="text-lg">
              At <span className="font-bold text-yellow-500">Premium Look Texture</span>, we combine <span className="font-bold text-blue-500">experience</span>, 
              <span className="font-bold text-red-500"> quality</span>, and <span className="font-bold text-purple-500">artistry</span> 
              to give your space a luxurious and long-lasting finish.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
