export function checkArrayDupes(array, what) {
    return array.filter(item => item == what).length > 1
}
