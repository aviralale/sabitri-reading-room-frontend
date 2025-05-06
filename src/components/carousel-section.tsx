"use client";
import { Star } from "lucide-react";
import Carousel from "./shared/Carousel";
import TestimonialBadge from "./testimonial-badge";

export default function CarouselSection() {
  return (
    <div className="w-full md:w-1/2 mt-12 md:mt-0">
      <div className="relative">
        {/* Enhanced glow effect */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/40 via-pink-500/30 to-purple-600/40 blur-xl opacity-80 animate-pulse"></div>

        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 bg-red-500/80 rounded-full w-12 h-12 backdrop-blur-sm shadow-lg flex items-center justify-center z-10">
          <Star className="h-6 w-6 text-white" fill="white" />
        </div>

        {/* Responsive carousel */}
        <div className="relative rounded-2xl shadow-xl overflow-hidden border border-white/10">
          <Carousel
            baseWidth="100%"
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
            className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm"
          />
        </div>

        {/* Testimonial badge */}
        <TestimonialBadge />
      </div>
    </div>
  );
}
