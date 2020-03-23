const chop = (numberToFind, arrayToSearch) => {
    if (!Array.isArray(arrayToSearch)) {
        throw new Error('This is not an array');
    }

    const len = arrayToSearch.length;
    if (len === 0) {
        return -1;
    }

    let lower_bound = 0;
    let upper_bound = len - 1;
    let found = false;
    while (!found && lower_bound !== upper_bound) {
        if (arrayToSearch[lower_bound] == numberToFind) {
            return lower_bound;
        }
    }
    return 0; // index of the found number in the array
}

module.exports = { chop };