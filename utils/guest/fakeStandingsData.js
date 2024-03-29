const faker = require('faker')

import { teamChoices } from '../../constants'

function createPicks() {
    return [...createHalfPicks(true), ...createHalfPicks(false)].reverse()
}
function createHalfPicks(isFirst) {
    let array = []
    let theseTeams = [...teamChoices]
    const halfFactor = isFirst ? 1 : 20
    ;[...Array(19)].forEach((_, i) => {
        array.push({
            matchday: i + halfFactor,
            team_id: theseTeams.splice(
                Math.floor(Math.random() * theseTeams.length),
                1
            )[0],
        })
    })
    return array
}
function createScores() {
    let fakeScores = {}
    ;[...Array(38)].forEach((_, i) => {
        fakeScores[i + 1] = fakeScoresForWeek()
    })
    return fakeScores
}
function fakeScoresForWeek() {
    let scores = {}
    teamChoices.forEach(team => {
        scores[team] = Math.floor(-5 + Math.random() * 11)
    })
    return scores
}
export function fakeStandingsData(guest) {
    const fakeData = {
        scores: createScores(),
        standings: [],
    }
    fakeData.standings.push({
        name: guest.name,
        picks: JSON.parse(JSON.stringify(guest.picks)).reverse(),
    })
    //eslint-disable-next-line
    ;[...Array(20)].forEach(user => {
        let u = {
            name: faker.internet.userName(),
            picks: createPicks(),
        }
        fakeData.standings.push(u)
    })
    return fakeData
}
