import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // ✅ Animation library
import offerImage from "../assets/images/offer.jpg";

export default function SpecialOffer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = endDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="bg-gradient-to-r from-orange-100 via-yellow-100 to-orange-50 py-10 px-6 text-center rounded-lg shadow-lg mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* ✅ Animated Image */}
        <motion.img
          src={offerImage}
          alt="Special Coffee Offer"
          className="w-64 rounded-xl shadow-md border-4 border-white"
          initial={{ scale: 0.8, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
          whileHover={{ scale: 1.1, rotate: 3 }}
        />

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-orange-700 mb-2">
            🎉 Special Offer This Week!
          </h2>
          <p className="text-lg text-gray-700 mb-4">Buy 1 Coffee and Get 1 Free ☕</p>

          {/* ✅ Animated Countdown */}
          <motion.div
            className="text-xl font-mono text-gray-900 mb-4 bg-yellow-200 px-4 py-2 rounded-lg shadow"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
          </motion.div>

          {/* ✅ Button bounce */}
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Grab This Deal
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
