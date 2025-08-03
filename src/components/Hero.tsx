import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-romantic.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-rose-gold animate-float">
        <Heart className="w-8 h-8" />
      </div>
      <div className="absolute top-32 right-16 text-romantic-pink animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute bottom-32 left-20 text-rose-gold animate-float" style={{ animationDelay: '2s' }}>
        <Heart className="w-6 h-6" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-elegant text-6xl md:text-8xl font-bold mb-6">
          <span className="bg-gradient-text bg-clip-text text-transparent">
            National
          </span>
          <br />
          <span className="bg-gradient-text bg-clip-text text-transparent">
            Girlfriends Day
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-warm-white mb-4 font-medium">
          Celebrating the amazing woman in my life
        </p>
        
        <h2 className="font-elegant text-3xl md:text-4xl text-rose-gold mb-8 animate-scale-in">
          Ananda Aldiansyah
        </h2>
        
        <p className="text-lg text-cream/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Today we celebrate the incredible bond, the laughter shared, the memories made, 
          and the love that grows stronger each day. You are truly extraordinary.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="romantic" size="lg" className="font-medium">
            <Heart className="w-5 h-5" />
            A Special Message
          </Button>
          <Button variant="elegant" size="lg" className="font-medium">
            <Sparkles className="w-5 h-5" />
            Our Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;