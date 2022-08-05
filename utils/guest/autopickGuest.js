import { autopickOrder } from '../../constants'

function needsAuto(half) {
    return !!half.filter(x => x.team_id === '').length
}
function removeTeam(array, team) {
    let rmIndex
    while ((rmIndex = array.indexOf(team)) > -1) {
        array.splice(rmIndex, 1)
    }
}
function autopickHalf(picks) {
    const autos = [...autopickOrder]
    const checkAhead = []
    picks.map((pick, i) => {
        if (checkAhead.includes(pick.team_id)) {
            let pickThis = autos.shift()
            picks[i].team_id = pickThis
            checkAhead.push(pickThis)
        }
        if (autos.includes(pick.team_id)) {
            removeTeam(autos, pick.team_id)
        } else if (pick.team_id === '') {
            let pickThis = autos.shift()
            picks[i].team_id = pickThis
            checkAhead.push(pickThis)
        }
    })
}
export function autopickGuest(picks, matchday) {
    const newPicks = JSON.parse(JSON.stringify(picks))
    const thesePicks = newPicks.slice(0, -(38 - matchday))
    const firstHalf = thesePicks.splice(0, 19)
    const secondHalf = thesePicks.splice(-19)
    if (needsAuto(firstHalf)) {
        autopickHalf(firstHalf)
    }
    if (needsAuto(secondHalf)) {
        autopickHalf(secondHalf)
    }
    return newPicks
}
