
import { Button } from "@/components/ui/button";
import { Users, Calendar, MapPin } from "lucide-react";

const Hero = () => {
  console.log("Hero component loaded - September 18th version");
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
              A5<span className="text-green-300">Soccer</span>
            </h1>
            <div className="h-1 w-32 bg-green-300 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light text-green-100 mb-12">
              Montgomery County's Premier Adult Soccer League
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Users className="w-12 h-12 mb-4 text-green-300" />
              <h3 className="text-lg font-semibold mb-2">Coed 11v11</h3>
              <p className="text-green-100 text-center">Mixed teams, full field soccer</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Calendar className="w-12 h-12 mb-4 text-green-300" />
              <h3 className="text-lg font-semibold mb-2">8 Game Season</h3>
              <p className="text-green-100 text-center">Starting September 18th, Thursday nights</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <MapPin className="w-12 h-12 mb-4 text-green-300" />
              <h3 className="text-lg font-semibold mb-2">Ridge Road Park</h3>
              <p className="text-green-100 text-center">Germantown, Maryland</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('free-agent')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join as Free Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
