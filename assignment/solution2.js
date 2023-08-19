/**
 * Searches for a value in a nested object.
 *
 * @param {Object} obj - The object to search within.
 * @param {*} value - The value to search for.
 * @returns {boolean} - Returns true if the value is found, false otherwise.
 */
const contains = (obj, value) => {
    for (const key in obj) {
        // Check if the current key's value is the value we're looking for
        if (obj[key] === value) {
            return true;
        }

        // Check if the current key's value is an object
        if (typeof obj[key] === 'object') {
            if (contains(obj[key], value)) {
                return true;
            }
        }
    }
    return false;
};

// Tests
const nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 1,
                        something: 'str'
                    }
                }
            }
        }
    }
};

console.log(contains(nestedObject, 44)); // true
console.log(contains(nestedObject, 'str')); // true
console.log(contains(nestedObject, 'not string')); // false
