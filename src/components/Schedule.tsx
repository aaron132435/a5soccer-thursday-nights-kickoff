
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Season Schedule</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download the complete schedule for the current season
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <FileText className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-green-700">Season Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600 text-lg">
                Get the complete schedule including game times, locations, and team matchups for the entire 8-week season.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">What's Included:</h3>
                <ul className="text-green-700 text-left space-y-1">
                  <li>• All game dates and times</li>
                  <li>• Field locations and directions</li>
                  <li>• Team assignments</li>
                  <li>• Contact information</li>
                </ul>
              </div>
              
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/schedule.pdf';
                  link.download = 'Thursday-Coed-Schedule.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Schedule PDF
              </Button>
              
              <p className="text-sm text-gray-500">
                Click to download the complete Thursday Coed schedule
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
