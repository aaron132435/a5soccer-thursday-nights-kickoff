
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Trophy, Calendar } from "lucide-react";

const LeagueInfo = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">League Information</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about joining A5Soccer
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-green-700">Season Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                <strong>Start:</strong> July 10th<br />
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
              <CardTitle className="text-green-700">Timing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                <strong>Games:</strong> Thursday nights<br />
                <strong>Location:</strong> Montgomery County<br />
                <strong>Maryland</strong>
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
      </div>
    </section>
  );
};

export default LeagueInfo;
