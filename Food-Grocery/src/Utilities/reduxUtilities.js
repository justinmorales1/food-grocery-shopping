export function deepClone(input) {
    if (typeof input == 'object') {
        return JSON.parse(JSON.stringify(input));
    } else {
        return input;
    }
}