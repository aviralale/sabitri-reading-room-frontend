"use client";
import { ArrowRight, Award, Shield, Clock } from "lucide-react";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  color: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
  color,
}: FeatureCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "Award":
        return <Award className={`h-8 w-8 ${color}`} />;
      case "Shield":
        return <Shield className={`h-8 w-8 ${color}`} />;
      case "Clock":
        return <Clock className={`h-8 w-8 ${color}`} />;
      default:
        return <Award className={`h-8 w-8 ${color}`} />;
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-500">
      {/* Subtle gradient background that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-pink-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Card content */}
      <div className="relative z-10">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500 shadow-md">
          <IconComponent />
        </div>

        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
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
  );
}
