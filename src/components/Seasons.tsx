import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Seasons = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Seasons</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Current season standings and upcoming session registration
          </p>
        </div>
        
        {/* Current Season */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-green-700 mb-8">Current Season</h3>
          <div className="max-w-2xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-green-200">
              <CardHeader>
                <Trophy className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-green-700">Thursday Coed Summer Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="font-semibold text-green-800">Format</p>
                      <p className="text-green-700">Coed 11v11</p>
                    </div>
                    <div>
                      <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="font-semibold text-green-800">Duration</p>
                      <p className="text-green-700">8 Games</p>
                    </div>
                    <div>
                      <Trophy className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="font-semibold text-green-800">Location</p>
                      <p className="text-green-700">Ridge Road Park</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/standings">
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold"
                  >
                    View Current Standings
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Future Sessions */}
        <div>
          <h3 className="text-2xl font-bold text-center text-blue-700 mb-8">Upcoming Sessions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Tuesday Men's Fall Session */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-blue-200">
              <CardHeader>
                <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-blue-700">Tuesday Men's Fall Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-semibold mb-2">Coming This Fall</p>
                  <div className="text-blue-700 space-y-1">
                    <p><strong>Format:</strong> Men's 11v11</p>
                    <p><strong>Day:</strong> Tuesday nights</p>
                    <p><strong>Location:</strong> Ridge Road Park</p>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                  onClick={() => {
                    // Replace with actual Google Form URL
                    window.open('https://forms.google.com/tuesday-mens-fall', '_blank');
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Sign Up for Tuesday Men's
                </Button>
              </CardContent>
            </Card>
            
            {/* Thursday Coed Fall Session */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-blue-200">
              <CardHeader>
                <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-blue-700">Thursday Coed Fall Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-semibold mb-2">Coming This Fall</p>
                  <div className="text-blue-700 space-y-1">
                    <p><strong>Format:</strong> Coed 11v11</p>
                    <p><strong>Day:</strong> Thursday nights</p>
                    <p><strong>Location:</strong> Ridge Road Park</p>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                  onClick={() => {
                    // Replace with actual Google Form URL
                    window.open('https://forms.google.com/thursday-coed-fall', '_blank');
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Sign Up for Thursday Coed
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seasons;