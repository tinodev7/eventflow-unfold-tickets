import { EventCard } from './EventCard';
import comedyNightImage from '@/assets/comedy-night.jpg';

interface EventCardProps {
  title: string;
  date: Date;
  location: string;
  price: number;
  imageUrl: string;
  category: string;
  attendees: number;
}

const mockEvents: EventCardProps[] = [
  {
    title: "Summer Music Festival 2025",
    date: new Date('2025-08-15'),
    location: "Central Park, New York",
    price: 150,
    imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
    category: "Music",
    attendees: 15000
  },
  {
    title: "Tech Conference: AI & Future",
    date: new Date('2025-09-22'),
    location: "San Francisco Convention Center",
    price: 350,
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    category: "Technology",
    attendees: 2500
  },
  {
    title: "Broadway Musical: Hamilton",
    date: new Date('2025-08-05'),
    location: "Richard Rodgers Theatre, NYC",
    price: 185,
    imageUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=600&fit=crop",
    category: "Theatre",
    attendees: 1319
  },
  {
    title: "Food & Wine Festival",
    date: new Date('2025-09-10'),
    location: "Napa Valley, California",
    price: 95,
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    category: "Food & Drink",
    attendees: 5000
  },
  {
    title: "Comedy Night with Dave Chappelle",
    date: new Date('2025-08-30'),
    location: "Madison Square Garden, NYC",
    price: 125,
    imageUrl: comedyNightImage,
    category: "Comedy",
    attendees: 20000
  },
  {
    title: "Art Exhibition: Modern Masters",
    date: new Date('2025-09-01'),
    location: "Museum of Modern Art, NYC",
    price: 25,
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    category: "Art",
    attendees: 800
  }
];

export function UpcomingEvents() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Upcoming Events
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mockEvents.map((event, index) => (
            <EventCard
              key={index}
              {...event}
            />
          ))}
        </div>
      </div>
    </section>
  );
}