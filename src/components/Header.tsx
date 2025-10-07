import { Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const categories = [
    "Music",
    "Technology", 
    "Theatre",
    "Food & Drink",
    "Comedy",
    "Art",
    "Sports",
    "Business"
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-foreground">
              Event<span className="text-brand-green">Flow</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-brand-green">
                  Categories
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-popover/95 backdrop-blur-md border border-white/10">
                {categories.map((category) => (
                  <DropdownMenuItem key={category} className="text-foreground hover:text-brand-green cursor-pointer">
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search events..."
                className="pl-10 w-64 bg-input/50 border-white/10 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Demo User Dropdown */}
          <div className="hidden md:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-brand-green gap-2">
                  <User className="w-5 h-5" />
                  Demo User
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-popover/95 backdrop-blur-md border border-white/10">
                <DropdownMenuItem className="text-foreground hover:text-brand-green cursor-pointer">
                  My Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-foreground hover:text-brand-green cursor-pointer">
                  My Tickets
                </DropdownMenuItem>
                <DropdownMenuItem className="text-foreground hover:text-brand-green cursor-pointer">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6 text-foreground" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}