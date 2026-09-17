import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, ExternalLink, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Seasons = () => {
  const tuesdayMensScheduleUrl = "https://docs.google.com/document/d/1tHCF3MQefo87yojhsNTBVc0yxKHooW1PjKQ6mv0VlkU/edit?usp=sharing";

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Seasons</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Current season standings and upcoming session registration
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-green-700 mb-8">Current Seasons</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-green-200">
              <CardHeader>
                <Trophy className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-green-700">Thursday Coed Fall Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold mb-2">Started September 17th</p>
                  <div className="text-green-700 space-y-1">
                    <p><strong>Format:</strong> Coed 11v11</p>
                    <p><strong>Location:</strong> Ridge Road Park</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link to="/standings">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 w-full">
                      View Current Standings
                    </Button>
                  </Link>

                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/schedule.pdf";
                      link.download = "Thursday-Coed-Schedule.pdf";
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

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-green-200">
              <CardHeader>
                <Trophy className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-green-700">Tuesday Men's Fall Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold mb-2">Started September 15th</p>
                  <div className="text-green-700 space-y-1">
                    <p><strong>Format:</strong> Men's 11v11</p>
                    <p><strong>Location:</strong> Gaithersburg/Germantown</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link to="/tuesday-mens-standings">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 w-full">
                      View Current Standings
                    </Button>
                  </Link>

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
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-blue-700 mb-8">Upcoming Sessions</h3>
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-blue-200">
              <CardContent className="py-12">
                <Trophy className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-2xl font-bold text-blue-800">To be announced</p>
                <p className="text-gray-600 mt-2">Check back soon for upcoming season details!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seasons;
