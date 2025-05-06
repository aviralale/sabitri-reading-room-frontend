"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Stats from "./stats";
import EmailSubscribe from "./email-subscribe";
import FeatureCard from "./feature-card";
import AmenitiesSection from "./amenities";
import CTABanner from "./cta-banner";
import CarouselSection from "./carousel-section";

export default function HeroSection() {
  const [animateStats, setAnimateStats] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setAnimateStats(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
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
              <Stats stats={stats} animateStats={animateStats} />

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

              <EmailSubscribe />
            </div>

            {/* Carousel area */}
            <CarouselSection />
          </div>

          {/* Features Section */}
          <div className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon="Award"
              title="Personal Study Desks"
              description="Private workspace tailored for concentrated study sessions with ergonomic chairs for comfort."
              color="text-primary"
            />
            <FeatureCard
              icon="Shield"
              title="Distraction-Free Zone"
              description="Peaceful environment with sound insulation and strict noise control policies for deep focus."
              color="text-purple-600"
            />
            <FeatureCard
              icon="Clock"
              title="Flexible Hours"
              description="Extended opening times from 6 AM to 9 PM access options available for dedicated readers."
              color="text-pink-500"
            />
          </div>

          {/* Amenities section */}
          <AmenitiesSection />

          {/* CTA Banner */}
          <CTABanner />
        </div>
      </section>
    </main>
  );
}
