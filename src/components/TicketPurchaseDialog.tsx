import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus, CreditCard, User, Calendar, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface TicketPurchaseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event: {
    title: string;
    date: Date;
    location: string;
    price: number;
    imageUrl: string;
  };
}

export function TicketPurchaseDialog({ open, onOpenChange, event }: TicketPurchaseDialogProps) {
  const [quantity, setQuantity] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const handlePurchase = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    onOpenChange(false);
    
    toast({
      title: "Purchase Successful! 🎉",
      description: `${quantity} ticket${quantity > 1 ? 's' : ''} confirmed for ${event.title}. Check your email for details.`,
    });
    
    setQuantity(1);
  };

  const total = event.price * quantity;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-background/95 backdrop-blur-xl border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl">Purchase Tickets</DialogTitle>
          <DialogDescription>Complete your purchase for this event</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Event Details */}
          <div className="space-y-3">
            <img 
              src={event.imageUrl} 
              alt={event.title}
              className="w-full h-32 object-cover rounded-lg"
            />
            <h3 className="font-semibold text-lg">{event.title}</h3>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-green" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-green" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Number of Tickets</label>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                disabled={quantity >= 10}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mock User Info */}
          <div className="bg-white/5 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <User className="w-4 h-4 text-brand-green" />
              <span className="text-muted-foreground">Logged in as:</span>
              <span className="font-medium">demo@eventflow.com</span>
            </div>
          </div>

          {/* Price Summary */}
          <div className="space-y-2 border-t border-white/10 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Price per ticket</span>
              <span>{formatPrice(event.price)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Quantity</span>
              <span>{quantity}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Service fee</span>
              <span>{formatPrice(quantity * 2.50)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t border-white/10 pt-2">
              <span>Total</span>
              <span className="text-brand-green">{formatPrice(total + (quantity * 2.50))}</span>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isProcessing}
          >
            Cancel
          </Button>
          <Button
            onClick={handlePurchase}
            disabled={isProcessing}
            className="bg-brand-green hover:bg-brand-green-hover"
          >
            <CreditCard className="w-4 h-4 mr-2" />
            {isProcessing ? "Processing..." : `Pay ${formatPrice(total + (quantity * 2.50))}`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
