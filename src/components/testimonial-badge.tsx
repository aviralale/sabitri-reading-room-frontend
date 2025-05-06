"use client";
import { Star } from "lucide-react";

export default function TestimonialBadge() {
  return (
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
  );
}
