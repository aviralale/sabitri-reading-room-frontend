"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <div className="mt-24 relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/80 via-blue-500/80 to-red-600/80 shadow-2xl">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
      <div className="relative p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-white text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to boost your productivity?
          </h3>
          <p className="text-white/80 max-w-md">
            Join our community of focused achievers and transform your study
            experience today.
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
  );
}
