import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Standings = () => {
  // Current standings data
  const standings = [
    { position: 1, team: "Blue Lock", points: 12, wins: 4, losses: 1, draws: 0, ps: 14, psa: 9, psd: 5, played: 5 },
    { position: 2, team: "Cesena FC", points: 10, wins: 3, losses: 1, draws: 1, ps: 16, psa: 8, psd: 8, played: 5 },
    { position: 3, team: "Peeps FC", points: 9, wins: 3, losses: 2, draws: 0, ps: 10, psa: 10, psd: 0, played: 5 },
    { position: 4, team: "The Paulers", points: 9, wins: 3, losses: 2, draws: 0, ps: 11, psa: 9, psd: 2, played: 5 },
    { position: 5, team: "Under Construction United", points: 3, wins: 1, losses: 2, draws: 0, ps: 8, psa: 8, psd: 0, played: 3 },
    { position: 6, team: "A Good Team Name", points: 4, wins: 1, losses: 3, draws: 1, ps: 4, psa: 10, psd: -6, played: 5 },
    { position: 7, team: "Orange Crush", points: 4, wins: 1, losses: 3, draws: 1, ps: 9, psa: 14, psd: -5, played: 5 },
    { position: 8, team: "Karma FC", points: 1, wins: 0, losses: 2, draws: 1, ps: 4, psa: 8, psd: -4, played: 3 },
  ];

  const handleDownloadSchedule = () => {
    const link = document.createElement('a');
    link.href = '/schedule.pdf';
    link.download = 'Thursday-Coed-Schedule.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link to="/">
              <Button variant="ghost" className="text-white hover:bg-white/20 mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Thursday Coed Summer Session</h1>
            <p className="text-xl text-green-100">Current Standings & Schedule</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Standings Table */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-700">Current Standings</CardTitle>
                  <p className="text-gray-600">Updated after each game week</p>
                </CardHeader>
                <CardContent>
                  <Table>
                     <TableHeader>
                       <TableRow>
                         <TableHead className="w-16">Pos</TableHead>
                         <TableHead>Team</TableHead>
                         <TableHead className="text-center">P</TableHead>
                         <TableHead className="text-center">W</TableHead>
                         <TableHead className="text-center">D</TableHead>
                         <TableHead className="text-center">L</TableHead>
                         <TableHead className="text-center">PS</TableHead>
                         <TableHead className="text-center">PSA</TableHead>
                         <TableHead className="text-center">PSD</TableHead>
                         <TableHead className="text-center font-semibold">Pts</TableHead>
                       </TableRow>
                     </TableHeader>
                     <TableBody>
                       {standings.map((team) => (
                         <TableRow key={team.position} className={team.position <= 4 ? "bg-green-50" : ""}>
                           <TableCell className="font-medium text-center">{team.position}</TableCell>
                           <TableCell className="font-semibold">{team.team}</TableCell>
                           <TableCell className="text-center">{team.played}</TableCell>
                           <TableCell className="text-center">{team.wins}</TableCell>
                           <TableCell className="text-center">{team.draws}</TableCell>
                           <TableCell className="text-center">{team.losses}</TableCell>
                           <TableCell className="text-center">{team.ps}</TableCell>
                           <TableCell className="text-center">{team.psa}</TableCell>
                           <TableCell className="text-center">{team.psd}</TableCell>
                           <TableCell className="text-center font-bold">{team.points}</TableCell>
                         </TableRow>
                       ))}
                     </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Schedule Download & Info */}
            <div className="space-y-6">
              
              {/* Schedule Download */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700">Schedule</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Download the complete schedule with game times and locations.
                  </p>
                  <Button 
                    onClick={handleDownloadSchedule}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Schedule PDF
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
                    <p className="text-gray-600">Coed 11v11</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Games</p>
                    <p className="text-gray-600">8 game season</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Day</p>
                    <p className="text-gray-600">Thursday nights</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">Ridge Road Park<br />Germantown, Maryland</p>
                  </div>
                </CardContent>
              </Card>

              {/* Legend */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700 text-sm">Legend</CardTitle>
                </CardHeader>
                 <CardContent className="text-sm space-y-1">
                   <p><strong>P</strong> - Games Played</p>
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

export default Standings;