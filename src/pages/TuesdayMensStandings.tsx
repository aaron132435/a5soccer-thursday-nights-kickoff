import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TuesdayMensStandings = () => {
  const scheduleUrl = "https://docs.google.com/document/d/1tHCF3MQefo87yojhsNTBVc0yxKHooW1PjKQ6mv0VlkU/edit?usp=sharing";

  const rawStandings = [
    { team: "Blue Lock", points: 6, wins: 2, losses: 1, draws: 0, ps: 10, psa: 5, psd: 5, played: 3 },
    { team: "The Collective", points: 6, wins: 2, losses: 1, draws: 0, ps: 9, psa: 6, psd: 3, played: 3 },
    { team: "The Paulers", points: 3, wins: 1, losses: 2, draws: 0, ps: 6, psa: 7, psd: -1, played: 3 },
    { team: "Los Lobos FC", points: 0, wins: 0, losses: 3, draws: 0, ps: 3, psa: 14, psd: -11, played: 3 },
    { team: "Piggy Pigs FC", points: 9, wins: 3, losses: 0, draws: 0, ps: 12, psa: 4, psd: 8, played: 3 },
    { team: "Venator CF", points: 6, wins: 2, losses: 1, draws: 0, ps: 5, psa: 5, psd: 0, played: 3 },
    { team: "Pikachu FC", points: 0, wins: 0, losses: 3, draws: 0, ps: 2, psa: 9, psd: -7, played: 3 },
    { team: "Big Dawgs FC", points: 6, wins: 2, losses: 1, draws: 0, ps: 7, psa: 4, psd: 3, played: 3 },
  ];

  const standings = [...rawStandings]
    .sort((a, b) => b.points - a.points || b.psd - a.psd)
    .map((team, index) => ({ ...team, position: index + 1 }));

  const handleOpenSchedule = () => {
    window.open(scheduleUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
            <h1 className="text-4xl font-bold mb-4">Tuesday Men's Spring Session</h1>
            <p className="text-xl text-green-100">Current Standings & Schedule</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
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
                        <TableHead className="text-center">D</TableHead>
                        <TableHead className="text-center">L</TableHead>
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
                          <TableCell className="text-center">{team.draws}</TableCell>
                          <TableCell className="text-center">{team.losses}</TableCell>
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

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700">Schedule</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Open the shared Google Drive schedule document.
                  </p>
                  <Button onClick={handleOpenSchedule} className="w-full bg-green-600 hover:bg-green-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Schedule
                  </Button>
                </CardContent>
              </Card>

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
