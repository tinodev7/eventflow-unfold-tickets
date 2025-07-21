import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/10">
      {/* Call to Action Section */}
      <div className="py-16 px-4 md:px-8 lg:px-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Have an event? Reach more people!
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of event organizers using EventFlow to sell tickets and manage events.
          </p>
          <Button className="bg-brand-green hover:bg-brand-green-hover text-white font-medium px-8 py-3 text-lg">
            Publish Your Event
          </Button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-brand-green smooth-transition">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-green smooth-transition">Browse Events</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-green smooth-transition">Create Event</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-green smooth-transition">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-green smooth-transition">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-green smooth-transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-3 text-brand-green" />
                <span>support@eventflow.com</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-3 text-brand-green" />
                <span>1-800-EVENTS</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-3 text-brand-green" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-brand-green smooth-transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-green smooth-transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-green smooth-transition">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Stay updated with the latest events and exclusive offers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-muted-foreground">
            © 2025 EventFlow. All rights reserved. | Privacy Policy | Cookie Policy
          </p>
        </div>
      </div>
    </footer>
  );
}