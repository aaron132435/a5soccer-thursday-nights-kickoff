import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users, ExternalLink, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Seasons = () => {
  const tuesdayMensScheduleUrl = "https://docs.google.com/document/d/1tHCF3MQefo87yojhsNTBVc0yxKHooW1PjKQ6mv0VlkU/edit?usp=sharing";

  return (
...
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
                    onClick={() => window.open(tuesdayMensScheduleUrl, "_blank", "noopener,noreferrer")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Saturday Coed Spring Session */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-green-200">
              <CardHeader>
                <Trophy className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-green-700">Saturday Coed Spring Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold mb-2">Started April 4th</p>
                  <div className="text-green-700 space-y-1">
                    <p><strong>Format:</strong> Coed 11v11</p>
                    <p><strong>Location:</strong> Germantown</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Link to="/saturday-coed-standings">
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
                      link.href = '/saturday-schedule.pdf';
                      link.download = 'Saturday-Coed-Schedule.pdf';
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
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Upcoming Sessions</h3>
          <p className="text-lg text-gray-600">Check back soon for Summer Sessions!</p>
        </div>
      </div>
    </section>
  );
};

export default Seasons;