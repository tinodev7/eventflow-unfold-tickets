import { useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TicketPurchaseDialog } from "@/components/TicketPurchaseDialog";

interface EventCardProps {
  title: string;
  date: Date;
  location: string;
  price: number;
  imageUrl: string;
  category: string;
  attendees: number;
}

export function EventCard({ 
  title, 
  date, 
  location, 
  price, 
  imageUrl, 
  category, 
  attendees 
}: EventCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const formatAttendees = (attendees: number) => {
    return `${attendees.toLocaleString()} attending`;
  };

  return (
    <>
      <Card className="group glass-card brand-shadow hover:brand-shadow-hover smooth-transition hover:scale-105 overflow-hidden">
        <div className="relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 smooth-transition"
          />
          <Badge 
            variant="secondary" 
            className="absolute top-3 left-3 bg-brand-green text-white font-medium"
          >
            {category}
          </Badge>
        </div>
        
        <CardHeader className="pb-2">
          <h3 className="font-semibold text-lg text-foreground line-clamp-2 group-hover:text-brand-green smooth-transition">
            {title}
          </h3>
        </CardHeader>
        
        <CardContent className="space-y-3 pt-0">
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="w-4 h-4 mr-2 text-brand-green" />
            <span>{formatDate(date)}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 mr-2 text-brand-green" />
            <span className="line-clamp-1">{location}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground text-sm">
            <Users className="w-4 h-4 mr-2 text-brand-green" />
            <span>{formatAttendees(attendees)}</span>
          </div>
        </CardContent>
        
        <CardFooter className="flex items-center justify-between pt-0">
          <div className="text-2xl font-bold text-brand-green">
            {formatPrice(price)}
          </div>
          <Button 
            onClick={() => setDialogOpen(true)}
            className="bg-brand-green hover:bg-brand-green-hover text-white font-medium"
          >
            Get Tickets
          </Button>
        </CardFooter>
      </Card>

      <TicketPurchaseDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        event={{ title, date, location, price, imageUrl }}
      />
    </>
  );
}