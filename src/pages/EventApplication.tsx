import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner";

const EventApplication = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const eventTitle = searchParams.get("title") || "Event";
  const eventDate = searchParams.get("date") || "";
  const eventLocation = searchParams.get("location") || "";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Application Submitted!", {
      description: `Your application for ${eventTitle} has been received.`,
      duration: 3000,
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center bg-card/80 backdrop-blur-sm shadow-[var(--shadow-card)]">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary animate-in zoom-in" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Application Submitted!</h2>
          <p className="text-muted-foreground mb-8">
            We've received your application for <span className="font-semibold text-foreground">{eventTitle}</span>. 
            You'll receive a confirmation email shortly.
          </p>
          <Button onClick={() => navigate("/")} className="w-full">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Header */}
      <header className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-90" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[image:var(--gradient-shine)] animate-shimmer opacity-20" />
        </div>

        <div className={`container mx-auto max-w-4xl relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Button>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Application Form</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-2xl">
            {eventTitle}
          </h1>
          <div className="flex flex-wrap gap-4 text-white/90">
            <span className="flex items-center gap-2">
              <span className="text-sm font-medium">{eventDate}</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-sm font-medium">{eventLocation}</span>
            </span>
          </div>
        </div>
      </header>

      {/* Application Form */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        <Card className="max-w-2xl mx-auto p-8 bg-card/80 backdrop-blur-sm shadow-[var(--shadow-card)] border-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                required
                placeholder="John Doe"
                className="bg-background/50 backdrop-blur-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="john@example.com"
                className="bg-background/50 backdrop-blur-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="bg-background/50 backdrop-blur-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Why do you want to attend? *</Label>
              <Textarea
                id="message"
                required
                placeholder="Tell us why you're interested in this event..."
                className="min-h-32 bg-background/50 backdrop-blur-sm"
              />
            </div>

            <Button type="submit" className="w-full group/btn relative overflow-hidden shadow-lg hover:shadow-xl">
              <span className="relative z-10 flex items-center justify-center">
                Submit Application
                <Sparkles className="w-4 h-4 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </span>
            </Button>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default EventApplication;
