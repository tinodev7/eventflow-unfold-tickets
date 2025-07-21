import { useState } from "react";
import { MapPin, CalendarIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import heroBackground from "@/assets/hero-background.jpg";

export function HeroSection() {
  const [date, setDate] = useState<Date>();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground}
          alt="Concert crowd background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8 max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          Your Next Events,{" "}
          <span className="hero-gradient bg-clip-text text-transparent">
            All In One Place
          </span>
        </h1>

        {/* Sub-headline */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 font-light">
          Find, buy, and live the best experiences near you.
        </h2>

        {/* Search Form */}
        <div className="glass-card p-6 md:p-8 rounded-2xl mb-12 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Event Search */}
            <div className="md:col-span-2 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-green w-5 h-5" />
              <Input
                placeholder="Search by event, artist, or venue..."
                className="pl-12 h-12 bg-input/50 border-white/20 text-white placeholder:text-gray-300"
              />
            </div>

            {/* Date Picker */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-12 justify-start text-left font-normal bg-input/50 border-white/20 text-white hover:bg-input/70",
                    !date && "text-gray-300"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-brand-green" />
                  {date ? format(date, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="p-3 pointer-events-auto bg-popover/95 backdrop-blur-md border border-white/10"
                />
              </PopoverContent>
            </Popover>

            {/* Search Button */}
            <Button className="h-12 bg-brand-green hover:bg-brand-green-hover text-white font-semibold text-lg">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-brand-green">1M+</div>
            <div className="text-gray-300">Events</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-brand-green">50K+</div>
            <div className="text-gray-300">Venues</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-brand-green">5M+</div>
            <div className="text-gray-300">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
}