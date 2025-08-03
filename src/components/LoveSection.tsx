import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Star, Flower, Gift } from "lucide-react";

const LoveSection = () => {
  const loveReasons = [
    {
      icon: Heart,
      title: "Your Beautiful Heart",
      description: "The way you care for others and spread kindness wherever you go makes you truly special."
    },
    {
      icon: Star,
      title: "Your Bright Smile",
      description: "Your smile lights up my world and brings joy to everyone around you."
    },
    {
      icon: Flower,
      title: "Your Grace",
      description: "The elegance and grace with which you handle life's moments is truly inspiring."
    },
    {
      icon: Gift,
      title: "Your Unique Spirit",
      description: "Everything about you - your dreams, your laughter, your perspective - is absolutely wonderful."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-elegant">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-romantic-pink mb-6">
            Why You're Amazing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every day I discover new reasons to appreciate the incredible person you are
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {loveReasons.map((reason, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-romantic transition-all duration-300 animate-scale-in border-romantic-pink/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-romantic p-3 rounded-full">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-elegant text-xl font-semibold text-romantic-pink mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card p-8 rounded-2xl shadow-soft border border-romantic-pink/20 max-w-3xl mx-auto">
            <Heart className="w-12 h-12 text-romantic-pink mx-auto mb-6" />
            <h3 className="font-elegant text-2xl font-semibold text-romantic-pink mb-4">
              A Promise
            </h3>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Today and always, I promise to cherish you, support your dreams, 
              celebrate your victories, and be by your side through every adventure life brings us.
            </p>
            <Button variant="romantic" size="lg">
              Forever Yours ❤️
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveSection;