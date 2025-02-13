
import MessageGenerator from "@/components/MessageGenerator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-valentine-peach via-white to-valentine-pink">
      <div className="container px-4 py-16 space-y-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="px-4 py-1 bg-valentine-purple/20 rounded-full text-sm font-medium text-gray-700">
            Express Your Feelings
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Valentine Wish Generator
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Create the perfect message for your special someone. Choose from our
            templates or write your own heartfelt message.
          </p>
        </div>
        <MessageGenerator />
      </div>
    </div>
  );
};

export default Index;
