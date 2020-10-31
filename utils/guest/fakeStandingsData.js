const faker = require('faker');

import { teamChoices } from '../../constants';

function createPicks() {
  let array = [];
  let theseTeams = [...teamChoices];
  [...Array(38)].forEach((_, i) => {
    array.push({
      matchday: i + 1,
      team_id: theseTeams.splice(Math.floor(Math.random() * theseTeams.length), 1)[0]
    });
  });
  return array.reverse();
};
export function createScores() {
  let fakeScores = {};
  [...Array(38)].forEach((_, i) => {
    fakeScores[i + 1] = fakeScoresForWeek();
  });
  return fakeScores;
}
function fakeScoresForWeek() {
  let scores = {};
  teamChoices.forEach((team) => {
    scores[team] = Math.floor(-5 + Math.random() * 11);
  });
  return scores;
}
export function fakeStandingsData() {
  const fakeData = {
    scores: createScores(),
    standings: []
  };
  [...Array(20)].forEach(user => {
    let u = {
      name: faker.internet.userName(),
      picks: createPicks()
    };
    fakeData.standings.push(u);
  });
  return fakeData;
}