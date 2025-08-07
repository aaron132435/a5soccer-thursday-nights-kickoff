
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, ExternalLink } from "lucide-react";

const FreeAgent = () => {
  return (
    <section id="free-agent" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join as a Free Agent</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't have a team? No problem! We'll place you on a team that needs players.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <UserPlus className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-green-700">Free Agent Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600 text-lg">
                Register as a free agent and we'll match you with a team that needs players. Perfect for individuals looking to join the league!
              </p>
              
              <div className="bg-white p-6 rounded-lg border-2 border-green-200">
                <h3 className="font-semibold text-green-800 mb-4">What to Expect:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Process:</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Fill out registration form</li>
                      <li>• We'll contact you with team placement</li>
                      <li>• Meet your new teammates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">What You Need:</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Basic contact information</li>
                      <li>• Skill level assessment</li>
                      <li>• Availability confirmation</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() => {
                  window.open("https://docs.google.com/forms/d/1pmXqqHAVtHlj0gVXJduAsdMVwTYC6oQddeBTCkWEr5Q/edit", "_blank");
                }}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Register Now
              </Button>
              
              <p className="text-sm text-gray-500">
                Click the button above to access the registration form.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FreeAgent;
