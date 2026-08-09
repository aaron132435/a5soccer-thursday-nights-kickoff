import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Standings = () => {
  // Current standings data - Thursday Coed Summer Session
  const rawStandings = [
    { team: "Germantown Impact", points: 14, wins: 4, losses: 0, draws: 2, ps: 24, psa: 9, psd: 15, played: 6 },
    { team: "Blue Lock", points: 7, wins: 2, losses: 3, draws: 1, ps: 18, psa: 15, psd: 3, played: 6 },
    { team: "The Paulers", points: 12, wins: 4, losses: 2, draws: 0, ps: 20, psa: 10, psd: 10, played: 6 },
    { team: "Golden Parachutes", points: 4, wins: 1, losses: 3, draws: 1, ps: 9, psa: 13, psd: -4, played: 5 },
    { team: "Rising Sun", points: 9, wins: 3, losses: 3, draws: 0, ps: 8, psa: 13, psd: -5, played: 6 },
    { team: "Real United FC", points: 7, wins: 2, losses: 2, draws: 1, ps: 5, psa: 13, psd: -8, played: 5 },
    { team: "Golden Age", points: 4, wins: 1, losses: 3, draws: 1, ps: 4, psa: 15, psd: -11, played: 5 },
    { team: "Sporting Copa", points: 5, wins: 1, losses: 2, draws: 2, ps: 7, psa: 8, psd: -1, played: 5 },
  ];

  const standings = [...rawStandings]
    .sort((a, b) => b.points - a.points || b.psd - a.psd)
    .map((team, index) => ({ ...team, position: index + 1 }));

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
                         <TableHead className="text-center font-semibold">Pts</TableHead>
                         <TableHead className="text-center">W</TableHead>
                         <TableHead className="text-center">L</TableHead>
                         <TableHead className="text-center">T</TableHead>
                         <TableHead className="text-center">PS</TableHead>
                         <TableHead className="text-center">PSA</TableHead>
                         <TableHead className="text-center">PSD</TableHead>
                         <TableHead className="text-center">GP</TableHead>
                       </TableRow>
                     </TableHeader>
                     <TableBody>
                       {standings.map((team) => (
                         <TableRow key={team.position} className={team.position <= 4 ? "bg-green-50" : ""}>
                           <TableCell className="font-medium text-center">{team.position}</TableCell>
                           <TableCell className="font-semibold">{team.team}</TableCell>
                           <TableCell className="text-center font-bold">{team.points}</TableCell>
                           <TableCell className="text-center">{team.wins}</TableCell>
                           <TableCell className="text-center">{team.losses}</TableCell>
                           <TableCell className="text-center">{team.draws}</TableCell>
                           <TableCell className="text-center">{team.ps}</TableCell>
                           <TableCell className="text-center">{team.psa}</TableCell>
                           <TableCell className="text-center">{team.psd}</TableCell>
                           <TableCell className="text-center">{team.played}</TableCell>
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
                    <p className="font-semibold text-gray-800">Start Date</p>
                    <p className="text-gray-600">June 25th</p>
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
                   <p><strong>GP</strong> - Games Played</p>
                   <p><strong>W</strong> - Wins</p>
                   <p><strong>T</strong> - Ties</p>
                   <p><strong>L</strong> - Losses</p>
                   <p><strong>PS</strong> - Points Scored</p>
                   <p><strong>PSA</strong> - Points Scored Against</p>
                   <p><strong>PSD</strong> - Point Differential</p>
                   <p><strong>Pts</strong> - Points (3 for win, 1 for tie)</p>
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