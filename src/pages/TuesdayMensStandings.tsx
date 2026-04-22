import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TuesdayMensStandings = () => {
  const scheduleUrl = "https://docs.google.com/document/d/1tHCF3MQefo87yojhsNTBVc0yxKHooW1PjKQ6mv0VlkU/edit?usp=sharing";
...
  const handleOpenSchedule = () => {
    window.open(scheduleUrl, "_blank", "noopener,noreferrer");
  };
...
                  <Button 
                    onClick={handleOpenSchedule}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Schedule
                  </Button>
                </CardContent>
              </Card>

              {/* Season Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700">Season Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">Format</p>
                    <p className="text-gray-600">Men's 11v11</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Started</p>
                    <p className="text-gray-600">April 7th</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">Laytonia Park</p>
                  </div>
                </CardContent>
              </Card>

              {/* Legend */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700 text-sm">Legend</CardTitle>
                </CardHeader>
                 <CardContent className="text-sm space-y-1">
                   <p><strong>GP</strong> - Games Played</p>
                   <p><strong>W</strong> - Wins</p>
                   <p><strong>D</strong> - Draws</p>
                   <p><strong>L</strong> - Losses</p>
                   <p><strong>PS</strong> - Points Scored</p>
                   <p><strong>PSA</strong> - Points Scored Against</p>
                   <p><strong>PSD</strong> - Point Differential</p>
                   <p><strong>Pts</strong> - Points (3 for win, 1 for draw)</p>
                   <div className="mt-3 p-2 bg-green-50 rounded">
                     <p className="text-green-700"><strong>Top 4 teams</strong> highlighted in green</p>
                   </div>
                 </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TuesdayMensStandings;