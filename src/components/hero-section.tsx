"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  Clock,
  Shield,
  Award,
  Star,
  Wifi,
  CheckCircle,
  PlugZapIcon,
  CircleParking,
  Power,
} from "lucide-react";
import Carousel from "./Carousel";

export default function HeroSection() {
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setAnimateStats(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger stats animation after a delay on initial load
    const timer = setTimeout(() => {
      setAnimateStats(true);
    }, 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const stats = [
    { value: "7", label: "Days a Week" },
    { value: "6AM - 9PM", label: "Access Available" },
    { value: "FREE", label: "Internet Access" },
  ];

  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-background via-background/90 to-background/60">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-2xl"></div>
      </div>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-24 lg:pt-24 lg:pb-32">
          {/* Floating badge */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            {/* <div className="bg-gradient-to-r from-primary to-red-500/80 px-6 py-2 rounded-full shadow-lg text-white font-medium text-sm flex items-center gap-2">
              {/* <Star className="h-4 w-4" fill="currentColor" />
              New membership plans available!
            </div> */}
          </div>

          {/* Hero Content + Carousel */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            {/* Content area */}
            <div className="relative z-10 max-w-xl text-center md:text-left md:w-1/2">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium shadow-md">
                <span className="bg-gradient-to-r from-primary to-red-500/80 bg-clip-text text-transparent font-semibold">
                  Sabitri Reading Room | Est. 2025
                </span>
              </div>

              <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                <span className="block">Be Educated,</span>
                <span className="bg-gradient-to-r from-primary via-red-500/90 to-blue-500 bg-clip-text text-transparent">
                  Be a Great Achiever
                </span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Dedicated personal study spaces designed for{" "}
                <span className="font-medium text-foreground">
                  uninterrupted learning
                </span>
                . Perfect for competitive exam preparation in a focused, quiet,
                and supportive environment.
              </p>

              {/* Stats section */}
              <div className="mt-10 flex justify-between border-y border-border/50 py-4 px-2">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`text-2xl font-bold bg-gradient-to-r from-primary to-red-500/80 bg-clip-text text-transparent ${
                        animateStats
                          ? "scale-100 opacity-100"
                          : "scale-90 opacity-0"
                      } transition-all duration-700 delay-${index * 200}`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-primary to-red-500/80 hover:from-primary/90 hover:to-red-500/70 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span className="relative z-10 flex items-center">
                    Reserve Your Desk
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </div>

              <div className="mt-12 border-t border-border/50 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p className="text-sm font-medium">
                    Receive more details directly to your mail
                  </p>
                </div>
                <form className="flex max-w-md mx-auto md:mx-0">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      placeholder="Your email address"
                      className="h-12 w-full rounded-l-lg border border-primary/20 border-r-0 bg-background/50 backdrop-blur-sm pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                      type="email"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="rounded-l-none h-12 px-6 bg-gradient-to-r from-primary to-red-500/80 hover:shadow-md hover:shadow-primary/20 transition-all"
                  >
                    Get Notified
                  </Button>
                </form>
              </div>
            </div>

            {/* Carousel area */}
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
                <div className="absolute -bottom-6 -left-6 bg-background rounded-lg p-3 shadow-xl border border-primary/20 backdrop-blur-md max-w-xs transform rotate-2 z-10">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 text-yellow-500"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p className="text-xs font-medium">
                      "The perfect environment for my MBBS preparation!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section - Enhanced Card Style */}
          <div className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "Personal Study Desks",
                description:
                  "Private workspace tailored for concentrated study sessions with ergonomic chairs for comfort.",
              },
              {
                icon: <Shield className="h-8 w-8 text-purple-600" />,
                title: "Distraction-Free Zone",
                description:
                  "Peaceful environment with sound insulation and strict noise control policies for deep focus.",
                // highlight: "",
              },
              {
                icon: <Clock className="h-8 w-8 text-pink-500" />,
                title: "Flexible Hours",
                description:
                  "Extended opening times from 6 AM to 9 PM access options available for dedicated readers.",
                // highlight: "New",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                {/* Subtle gradient background that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-pink-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Card content */}
                <div className="relative z-10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500 shadow-md">
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Enhanced separator */}
                  <div className="mt-6 h-0.5 w-16 bg-gradient-to-r from-primary/60 to-transparent rounded-full group-hover:w-24 transition-all duration-500"></div>

                  {/* Learn more link */}
                  <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                    Learn more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Amenities section */}
          <div className="mt-24 bg-gradient-to-br from-background/40 to-background/60 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-lg relative overflow-hidden">
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-primary to-red-500/80 bg-clip-text text-transparent">
                Premium Amenities
              </span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: <PlugZapIcon className="h-6 w-6" />,
                  label: "Personal Desk with Power Socket",
                },
                {
                  icon: <Wifi className="h-6 w-6" />,
                  label: "High-Speed WiFi",
                },
                {
                  icon: <CircleParking className="h-6 w-6" />,
                  label: "Ample Parking Space",
                },
                {
                  icon: <Power className="h-6 w-6" />,
                  label: "Power backup on our premises",
                },
              ].map((amenity, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-background/50 rounded-lg p-4 text-center hover:bg-background transition-colors"
                >
                  <div className="p-3 rounded-full bg-primary/10 mb-3">
                    {amenity.icon}
                  </div>
                  <span className="text-sm font-medium">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-24 relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/80 via-blue-500/80 to-red-600/80 shadow-2xl">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-white text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Ready to boost your productivity?
                </h3>
                <p className="text-white/80 max-w-md">
                  Join our community of focused achievers and transform your
                  study experience today.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 shadow-xl"
              >
                Book Your First Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
