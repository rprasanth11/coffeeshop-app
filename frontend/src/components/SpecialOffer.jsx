import React, { useEffect, useState } from "react";
import offerData from "../data/special-offer.json";

export default function SpecialOffer() {
  const expiryDate = new Date(offerData.expiry);

  const [timeLeft, setTimeLeft] = useState({});
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = expiryDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setExpired(true);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryDate]);

  if (expired) {
    return null; // Hide section when expired
  }

  return (
    <section className="bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100 py-16 mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        {/* Offer Image */}
        <img
          src={offerData.image}
          alt="Special Coffee Offer"
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
        />

        {/* Offer Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-red-600">{offerData.title}</h2>
          <p className="mt-4 text-gray-700 text-lg">{offerData.description}</p>

          {/* Countdown Timer */}
          <div className="mt-4 flex justify-center md:justify-start gap-4 text-xl font-semibold text-red-700">
            <span>{timeLeft.days ?? 0}d</span> :
            <span>{timeLeft.hours ?? 0}h</span> :
            <span>{timeLeft.minutes ?? 0}m</span> :
            <span>{timeLeft.seconds ?? 0}s</span>
          </div>

          <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-medium shadow-md transition">
            {offerData.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
