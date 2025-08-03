import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-romantic-pink text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <Heart className="w-8 h-8 text-rose-gold animate-float" />
        </div>
        
        <h3 className="font-elegant text-2xl font-semibold mb-4">
          Happy National Girlfriends Day
        </h3>
        
        <p className="text-lg text-white/90 mb-6">
          To the most wonderful girlfriend in the world
        </p>
        
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80">
            Made with ❤️ for Ananda Aldiansyah • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;