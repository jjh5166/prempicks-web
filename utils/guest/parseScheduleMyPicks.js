function delayedCheck(status) {
  return status === ("POSTPONED" || "CANCELED");
}
function orderSchedule(matches) {
  return matches.sort(
    (a, b) => {
      if (a.matchday === b.matchday) {
        if (delayedCheck(a.status) === delayedCheck(b.status)) {
          return (a.utcDate > b.utcDate ? 1 : -1);
        } else {
          return delayedCheck(a.status) ? 1 : -1;
        }
      }
      return a.matchday - b.matchday;
    }
  );
}
// done using API with authorized user
export function parseScheduleMyPicks(matches, matchday) {
  const disableTime = "2000-09-12T11:30:00Z";
  const allowTime = "2030-09-12T11:30:00Z";
  const sortedMatches = orderSchedule(matches);
  const schedule = {};
  [...Array(38)].forEach((_, i) => {
    schedule[i + 1] = [];
  });
  sortedMatches.forEach(match => {
    schedule[match.matchday].push({
      home: match['homeTeam'],
      away: match['awayTeam'],
      score: {
        homeTeam: match['score']['fullTime']['homeTeam'],
        awayTeam: match['score']['fullTime']['awayTeam']
      },
      status: match['status'],
      utcDate: match.matchday <= matchday ? disableTime : allowTime
    });
  });
  return schedule;
}