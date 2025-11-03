import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import eventTech from "@/assets/event-tech.jpg";
import eventMusic from "@/assets/event-music.jpg";
import eventWorkshop from "@/assets/event-workshop.jpg";
import eventNetworking from "@/assets/event-networking.jpg";
import eventFood from "@/assets/event-food.jpg";
import eventSports from "@/assets/event-sports.jpg";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Tech Innovation Summit 2025",
    date: "March 15, 2025",
    location: "San Francisco, CA",
    description: "Join industry leaders for cutting-edge discussions on AI, blockchain, and the future of technology.",
    image: eventTech,
  },
  {
    id: 2,
    title: "Summer Music Festival",
    date: "June 20-22, 2025",
    location: "Austin, TX",
    description: "Three days of live music featuring top artists from around the world in an unforgettable outdoor setting.",
    image: eventMusic,
  },
  {
    id: 3,
    title: "Creative Design Workshop",
    date: "April 8, 2025",
    location: "Brooklyn, NY",
    description: "Hands-on workshop exploring modern design principles, digital art techniques, and creative collaboration.",
    image: eventWorkshop,
  },
  {
    id: 4,
    title: "Professional Networking Mixer",
    date: "March 30, 2025",
    location: "Chicago, IL",
    description: "Connect with professionals across industries in this exclusive networking event with refreshments.",
    image: eventNetworking,
  },
  {
    id: 5,
    title: "Gourmet Food & Wine Tasting",
    date: "May 12, 2025",
    location: "Napa Valley, CA",
    description: "Experience exquisite cuisine paired with premium wines in an elegant vineyard setting.",
    image: eventFood,
  },
  {
    id: 6,
    title: "Fitness Challenge Bootcamp",
    date: "April 18, 2025",
    location: "Miami, FL",
    description: "Push your limits with expert trainers in this high-energy fitness event for all skill levels.",
    image: eventSports,
  },
];

const Index = () => {
  const [appliedEvents, setAppliedEvents] = useState<Set<number>>(new Set());

  const handleApply = (eventId: number, eventTitle: string) => {
    setAppliedEvents(prev => new Set(prev).add(eventId));
    toast.success("Successfully applied!", {
      description: `You've registered for ${eventTitle}`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Discover Amazing Events
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Find and join the most exciting events happening near you
          </p>
        </div>
      </header>

      {/* Events Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => {
            const isApplied = appliedEvents.has(event.id);
            
            return (
              <Card 
                key={event.id} 
                className="overflow-hidden border-0 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] shadow-[var(--shadow-card)] hover:-translate-y-1"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                    {event.description}
                  </p>

                  <Button
                    onClick={() => handleApply(event.id, event.title)}
                    disabled={isApplied}
                    className="w-full transition-all duration-300"
                    variant={isApplied ? "secondary" : "default"}
                  >
                    {isApplied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Applied
                      </>
                    ) : (
                      "Apply Now"
                    )}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card py-8 px-4 mt-12 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Event Listings. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
