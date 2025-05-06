"use client";
import { PlugZapIcon, Wifi, CircleParking, Power } from "lucide-react";

export default function AmenitiesSection() {
  const amenities = [
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
  ];

  return (
    <div className="mt-24 bg-gradient-to-br from-background/40 to-background/60 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-lg relative overflow-hidden">
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <h2 className="text-2xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-primary to-red-500/80 bg-clip-text text-transparent">
          Premium Amenities
        </span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {amenities.map((amenity, index) => (
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
  );
}
