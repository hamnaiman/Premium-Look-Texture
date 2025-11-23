import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="relative bg-gray-50 py-20 flex justify-center items-center overflow-hidden">

      {/* 🎨 YELLOW PAINT BEHIND FORM */}
      <div className="absolute right-0 top-0 h-full w-[60%] md:w-[50%] bg-gradient-to-l from-yellow-400 to-transparent opacity-70"></div>

      {/* 🎨 PAINT STROKE BEHIND ROLLER */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] h-[300px] md:h-[350px] bg-gradient-to-l from-yellow-400 to-transparent blur-2xl opacity-60 rounded-xl"></div>

      {/* 🎨 ROLLER IMAGE */}
      <div className="absolute right-[-80px] md:right-[-120px] top-1/2 -translate-y-1/2 rotate-12 pointer-events-none">
        <img
          src="https://www.linkedin.com/dms/prv/image/v2/D4D06AQHb411xzFAxbw/messaging-image-720/B4DZqyZNZ_JEAY-/0/1763929544878?m=AQJlDpr-tZUCsgAAAZqyZOM-tFFX19H00iKT7bdogpWcDFMoKgDcjaKVZcg&ne=1&v=beta&t=mWAGiXUfVnw_2MFJUVyfu0WVbNcdARsdu4O6ZsZW_PQ"
          className="w-[350px] md:w-[500px] opacity-100 drop-shadow-2xl"
          alt="roller"
        />
      </div>

      {/* 📩 CONTACT FORM */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white bg-opacity-95 p-10 md:p-16 rounded-2xl shadow-2xl max-w-2xl w-full"
      >
{/* HEADING */}
<h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
  <span className="text-blue-600">We’re</span>{" "}
  <span className="text-red-500">Here</span>{" "}
  <span className="text-gray-800">for You</span>
</h2>

<p className="text-center text-gray-700 text-lg font-medium tracking-wide mb-10">
  Let's turn your ideas into reality — message us and we'll respond quickly!
</p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          </div>

          <div className="md:col-span-2 mt-6">
            <label className="block text-gray-700 font-semibold mb-2">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          </div>

          <div className="md:col-span-2 mt-6">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition resize-none"
            ></textarea>
          </div>

          <div className="md:col-span-2 mt-6 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
