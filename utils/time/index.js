export function getTimeFromUtc(utcDate) {
    const date = new Date(utcDate)
    return date.toLocaleTimeString().replace(/(:00)(?!.*\b\1\b)/, '')
}
// returns '7:00 PM', '12:30 PM', etc.
