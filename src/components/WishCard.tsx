
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface WishCardProps {
  message: string;
}

const WishCard = ({ message }: WishCardProps) => {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(message);
      toast({
        title: "Copied to clipboard!",
        description: "Share your message with your special someone",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <Card
      className="relative p-6 max-w-md w-full backdrop-blur-sm bg-white/30 border-valentine-purple/20 transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Heart
        className={`absolute -top-4 -right-4 text-valentine-pink transition-transform duration-300 ${
          isHovered ? "animate-heartbeat" : ""
        }`}
        size={32}
        fill="currentColor"
      />
      <div className="space-y-4">
        <p className="text-lg text-gray-800 leading-relaxed font-light">
          {message}
        </p>
        <Button
          onClick={handleShare}
          className="w-full bg-valentine-purple/80 hover:bg-valentine-purple transition-colors duration-300"
        >
          Share this message
        </Button>
      </div>
    </Card>
  );
};

export default WishCard;
