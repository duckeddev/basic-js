module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error;
    if (arr.length == 0) return [];

    let result = [];

    for (let index = 0; index < arr.length; index++) {
        let next = arr[index + 1];
        let previous = arr[index - 1];
        let current = arr[index];

        switch (current) {
            case '--discard-prev':
                if (index > 0) { result.splice(-1, 1); }
                break;
            case '--discard-next':
                if (index < arr.length) { index++; }
                break;
            case '--double-next':
                if (index < arr.length) { result.push(next); }
                break;
            case '--double-prev':
                if (index > 0) { result.push(previous); }
                break;
            default:
                result.push(current);
                break;
        }
    }
    if (result[result.length - 1] === undefined) result.splice(-1, 1);
    return result;
};