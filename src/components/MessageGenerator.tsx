
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getRandomTemplate } from "@/utils/messages";
import WishCard from "./WishCard";
import { Sparkles } from "lucide-react";

const MessageGenerator = () => {
  const [message, setMessage] = useState("");
  const [customMessage, setCustomMessage] = useState("");

  const generateMessage = () => {
    const template = getRandomTemplate();
    setMessage(template.text);
  };

  const handleCustomMessage = () => {
    if (customMessage.trim()) {
      setMessage(customMessage);
      setCustomMessage("");
    }
  };

  return (
    <div className="space-y-8 w-full max-w-md mx-auto">
      <div className="space-y-4">
        <div className="relative">
          <Input
            placeholder="Write your own message..."
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            className="bg-white/50 backdrop-blur-sm border-valentine-purple/20"
          />
          <Button
            onClick={handleCustomMessage}
            className="absolute right-0 top-0 h-full bg-valentine-purple/80 hover:bg-valentine-purple"
            disabled={!customMessage.trim()}
          >
            Send
          </Button>
        </div>
        <Button
          onClick={generateMessage}
          className="w-full bg-gradient-to-r from-valentine-pink to-valentine-purple hover:opacity-90 transition-opacity"
        >
          <Sparkles className="mr-2" size={16} />
          Generate Random Message
        </Button>
      </div>
      {message && (
        <div className="animate-float">
          <WishCard message={message} />
        </div>
      )}
    </div>
  );
};

export default MessageGenerator;
