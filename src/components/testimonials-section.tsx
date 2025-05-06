"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Fake testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "MBBS Aspirant",
      content:
        "Sabitri Reading Room transformed my preparation journey. The distraction-free environment and comfortable seating helped me maintain focus for hours. I credit a significant part of my success to the productive atmosphere here.",
      avatarUrl: "https://randomuser.me/api/portraits/women/37.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Ankit Patel",
      role: "Medical Student",
      content:
        "As a medical student, I need a quiet place with long hours. The flexible timings and personal desks are perfect for my intensive study sessions. The high-speed WiFi and power backup ensure I'm never interrupted.",
      avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Meera Joshi",
      role: "PhD Researcher",
      content:
        "Finding a consistent study space was challenging until I discovered Sabitri. The professional atmosphere and amenities create the ideal environment for deep work and research. It's become my second home.",
      avatarUrl: "https://randomuser.me/api/portraits/women/18.jpg",
      rating: 5,
    },
    {
      id: 4,
      name: "Raj Kapoor",
      role: "Banking Exam Candidate",
      content:
        "The peaceful environment at Sabitri helped me crack my banking exams. I could study without distractions for hours, and the amenities made the experience comfortable. Highly recommend for serious students!",
      avatarUrl: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: 4,
    },
    {
      id: 5,
      name: "Sneha Gupta",
      role: "Law Student",
      content:
        "As someone preparing for competitive law exams, I needed a space that facilitated long hours of focused reading. Sabitri provides exactly that, along with a supportive community of like-minded individuals.",
      avatarUrl: "https://randomuser.me/api/portraits/women/88.jpg",
      rating: 5,
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Handlers for next/prev
  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleAvatarClick = (index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // Generate star ratings
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ));
  };

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-red-500/90 to-blue-500 bg-clip-text text-transparent">
              What Our Members Say
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied students who have transformed their study
            experience with Sabitri Reading Room.
          </p>
        </div>

        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 -bottom-20 -left-20 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>

          {/* Main testimonial display area */}
          <div className="relative bg-background/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-lg overflow-hidden">
            {/* Decorative quote icon */}
            <div className="absolute top-6 right-6 text-primary/10">
              <Quote className="h-24 w-24" />
            </div>

            {/* Testimonial carousel */}
            <div className="relative h-full">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="px-4 md:px-12 py-8"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Avatar section - larger displays */}
                    <div className="hidden md:block relative">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/60 via-pink-500/60 to-purple-600/60 blur-md opacity-70 animate-pulse"></div>
                      <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                        <img
                          src={testimonials[activeIndex].avatarUrl}
                          alt={testimonials[activeIndex].name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="flex-1">
                      <div className="flex mb-4">
                        {renderStars(testimonials[activeIndex].rating)}
                      </div>
                      <blockquote className="text-lg md:text-xl italic mb-6 relative">
                        "{testimonials[activeIndex].content}"
                      </blockquote>
                      <div className="flex items-center">
                        {/* Mobile avatar */}
                        <div className="block md:hidden mr-4">
                          <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/30">
                            <img
                              src={testimonials[activeIndex].avatarUrl}
                              alt={testimonials[activeIndex].name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-lg">
                            {testimonials[activeIndex].name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonials[activeIndex].role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <div className="absolute -bottom-4 right-4 flex gap-2">
                <button
                  onClick={handlePrev}
                  className="h-10 w-10 rounded-full bg-background/80 border border-primary/20 backdrop-blur-sm flex items-center justify-center shadow hover:bg-primary/10 transition"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-10 w-10 rounded-full bg-background/80 border border-primary/20 backdrop-blur-sm flex items-center justify-center shadow hover:bg-primary/10 transition"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Avatar controllers */}
          <div className="mt-12 flex justify-center gap-4">
            {testimonials.map((testimonial, idx) => (
              <button
                key={testimonial.id}
                onClick={() => handleAvatarClick(idx)}
                className={`relative group transition-all duration-300 ${
                  idx === activeIndex
                    ? "scale-110"
                    : "scale-90 opacity-70 hover:opacity-100"
                }`}
              >
                {idx === activeIndex && (
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/60 via-pink-500/60 to-purple-600/60 animate-pulse"></div>
                )}
                <div
                  className={`relative h-14 w-14 rounded-full overflow-hidden border-2 ${
                    idx === activeIndex
                      ? "border-primary"
                      : "border-white/20 group-hover:border-primary/50"
                  } transition-all duration-300`}
                >
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
