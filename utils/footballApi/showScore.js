export default function showScore(status) {
  return status === ('FINISHED' || 'AWARDED' || 'IN_PLAY' || 'PAUSED');
}