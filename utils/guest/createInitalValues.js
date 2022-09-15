export function createInitialValues() {
    const array = []
    ;[...Array(38)].forEach((_, i) =>
        array.push({ matchday: i + 1, team_id: '' })
    )
    return array
}
