export function setPickSubmission(data) {
  return Object.assign({}, ...(data.map(item => ({ [item.matchday]: item.team_id }))));
};