"use client";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle } from "lucide-react";

export default function EmailSubscribe() {
  return (
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
  );
}
