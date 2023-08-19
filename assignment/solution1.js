/**
 * Checks if every value in an array satisfies a given condition.
 *
 * @param {Array} arr - The array to be checked.
 * @param {function} predict - The callback function that tests each element.
 * @returns {boolean} - Returns true if all elements satisfy the condition, false otherwise.
 */
const all = (arr, predict) => {
    for (let i = 0; i < arr.length; i++) {
        if (!predict(arr[i])) {
            return false;
        }
    }
    return true;
}
