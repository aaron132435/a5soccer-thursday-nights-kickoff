import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users, ExternalLink, Download } from "lucide-react";
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
        
        {/* Current Seasons */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-green-700 mb-8">Current Seasons</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Thursday Coed Summer Session */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-green-200">
              <CardHeader>
                <Trophy className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-green-700">Thursday Coed Summer Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-green-700 space-y-1">
                    <p><strong>Format:</strong> Coed 11v11</p>
                    <p><strong>Duration:</strong> 8 Games</p>
                    <p><strong>Location:</strong> Ridge Road Park</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Link to="/standings">
                    <Button 
                      size="lg" 
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 w-full"
                    >
                      View Current Standings
                    </Button>
                  </Link>
                  
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/schedule.pdf';
                      link.download = 'Thursday-Coed-Schedule.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tuesday Men's Fall Session */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-green-200">
              <CardHeader>
                <Trophy className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-green-700">Tuesday Men's Fall Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold mb-2">Started September 9th</p>
                  <div className="text-green-700 space-y-1">
                    <p><strong>Format:</strong> Men's 11v11</p>
                    <p><strong>Location:</strong> Laytonia Park</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Link to="/tuesday-mens-standings">
                    <Button 
                      size="lg" 
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 w-full"
                    >
                      View Current Standings
                    </Button>
                  </Link>
                  
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/tuesday-schedule.pdf';
                      link.download = 'Tuesday-Mens-Schedule.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Upcoming Sessions */}
        <div>
          <h3 className="text-2xl font-bold text-center text-blue-700 mb-8">Upcoming Sessions</h3>
          <div className="max-w-2xl mx-auto">
            
            {/* Thursday Coed Fall Session */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-blue-200">
              <CardHeader>
                <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-blue-700">Thursday Coed Fall Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-semibold mb-2">Starting September 25th</p>
                  <div className="text-blue-700 space-y-1">
                    <p><strong>Format:</strong> Coed 11v11</p>
                    <p><strong>Day:</strong> Thursday nights</p>
                    <p><strong>Location:</strong> Laytonia Park</p>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                  onClick={() => {
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSczmKlQKJB_NNkExrBExBnPu2f7kpkvejeoAmEZmoTm2c254A/viewform?usp=dialog', '_blank');
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