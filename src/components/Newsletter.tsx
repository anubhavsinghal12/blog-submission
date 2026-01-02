import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Thank you for subscribing!");
      setEmail("");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section className="relative overflow-hidden bg-primary rounded-2xl p-8 md:p-12 my-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-foreground/20 rounded-full mb-6">
          <Mail className="w-7 h-7 text-primary-foreground" />
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          Stay Updated
        </h3>
        <p className="font-body text-primary-foreground/80 text-base md:text-lg mb-8">
          Get the latest articles, insights, and inspiration delivered straight to your inbox. No spam, unsubscribe anytime.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body"
          />
          <Button 
            type="submit" 
            variant="secondary"
            disabled={isSubmitting}
            className="flex items-center gap-2 font-body"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
