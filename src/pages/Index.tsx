import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
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
  const navigate = useNavigate();
  const [appliedEvents, setAppliedEvents] = useState<Set<number>>(new Set());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleApply = (event: Event) => {
    const params = new URLSearchParams({
      title: event.title,
      date: event.date,
      location: event.location,
    });
    navigate(`/apply?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Header */}
      <header className="relative py-24 px-4 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-90" />
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[image:var(--gradient-shine)] animate-shimmer opacity-20" />
        </div>

        <div className={`container mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Trending Events</span>
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-2xl leading-tight">
            Discover Amazing
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
              Events
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto drop-shadow-lg font-medium">
            Find and join the most exciting events happening near you
          </p>
        </div>
      </header>

      {/* Events Grid */}
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const isApplied = appliedEvents.has(event.id);
            
            return (
              <Card 
                key={event.id} 
                className="group overflow-hidden border-0 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:shadow-[var(--shadow-card-hover)] shadow-[var(--shadow-card)] hover:-translate-y-2 animate-slide-up relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-[image:var(--gradient-shine)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-shimmer" />
                </div>

                {/* Event Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[image:var(--gradient-card-overlay)]" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <span className="text-xs font-bold bg-clip-text text-transparent bg-[image:var(--gradient-hero)]">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Calendar className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                        <MapPin className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm font-medium">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>

                  <Button
                    onClick={() => handleApply(event)}
                    disabled={isApplied}
                    className="w-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
                    variant={isApplied ? "secondary" : "default"}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isApplied ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 mr-2 animate-in zoom-in" />
                          Applied
                        </>
                      ) : (
                        <>
                          Apply Now
                          <Sparkles className="w-4 h-4 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        </>
                      )}
                    </span>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-card/50 backdrop-blur-sm py-12 px-4 mt-20 border-t border-border/50">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-lg font-bold bg-clip-text text-transparent bg-[image:var(--gradient-hero)]">
              Event Listings
            </span>
            <Sparkles className="w-5 h-5 text-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
          <p className="text-muted-foreground">&copy; 2025 Event Listings. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
