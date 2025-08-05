
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Trophy, Calendar } from "lucide-react";

const LeagueInfo = () => {
  const handleTeamRegistration = (day: string) => {
    alert(`Team registration for ${day} nights: $800 per team.\n\nTo register, please email Aaron Berger at A5SoccerMaryland@gmail.com with the following information:\n• Team name\n• Team color\n• Captain's name\n• Captain's phone number\n\nYou can also call 240-620-7492 for registration assistance.`);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">League Information</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about joining A5Soccer
          </p>
        </div>
        
        {/* Current Season - Thursday Nights */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-green-700 mb-8">Current Season - Thursday Nights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-700">Season Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  <strong>Start:</strong> September 18th<br />
                  <strong>Duration:</strong> 8 weeks<br />
                  <strong>Day:</strong> Thursday nights
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-700">Format</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  <strong>Type:</strong> Coed<br />
                  <strong>Size:</strong> 11v11<br />
                  <strong>Age:</strong> Adults only
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-700">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  <strong>Area:</strong> Montgomery County<br />
                  <strong>State:</strong> Maryland<br />
                  <strong>Night:</strong> Thursday
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Trophy className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-700">Competition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  <strong>Level:</strong> All skill levels<br />
                  <strong>Teams:</strong> Competitive<br />
                  <strong>Fun:</strong> Guaranteed!
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Team Registration for Thursday */}
          <div className="mt-8 text-center">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-green-700">Team Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Register your complete team for Thursday night games
                </p>
                <Button 
                  onClick={() => handleTeamRegistration('Thursday')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Register Team for Thursday
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Future Expansion Notice */}
        <div className="text-center bg-green-100 p-6 rounded-lg max-w-2xl mx-auto">
          <h4 className="text-lg font-semibold text-green-800 mb-2">Coming Soon!</h4>
          <p className="text-green-700">
            We're planning to expand to additional nights of the week. Stay tuned for more options!
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeagueInfo;
