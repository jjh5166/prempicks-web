export default function showScore(status) {
  const showIfStatus = ['FINISHED', 'AWARDED', 'IN_PLAY', 'PAUSED'];
  const showIndex = showIfStatus.indexOf(status);
  return [showIndex > -1, showIndex < 2];
  //return array [showScore?, isLive?]
}