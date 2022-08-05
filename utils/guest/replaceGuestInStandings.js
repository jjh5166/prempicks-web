export function replaceGuestInStandings(standings, guestPicks) {
    const newStandings = JSON.parse(JSON.stringify(standings))
    newStandings[0].picks = JSON.parse(JSON.stringify(guestPicks)).reverse()
    return newStandings
}
