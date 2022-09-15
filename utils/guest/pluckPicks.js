export const pluckPicks = (standings, matchday) => {
    let array = JSON.parse(JSON.stringify(standings))
    array.forEach((user, i) => {
        array[i]['picks'] = user.picks.slice(38 - matchday)
    })
    return array
}
