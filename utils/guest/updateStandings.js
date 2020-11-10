export function updateStandingsData(standingsData, guestPicks) {
  if (standingsData){
    const replacement = {...standingsData}
    replacement.standings[0].picks = guestPicks;
    return replacement
  }else{
    return null
  }
}