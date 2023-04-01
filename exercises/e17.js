/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
    // Your code goes here...
    if (array.length === 0) {
        return undefined;
     }

    let objects = [];
    for (let obj of array) {
        if (cb(obj)) {
            objects.push(obj);
        }
    }
  
    let minObj = objects[0];
    let minValue = cb(minObj)
    for (let i = 1; i < objects.length; i++) {
        const currentValue = cb(objects[i]);
        if (currentValue < minValue) {
            minValue = currentValue;
            minObj = objects[i];
        }
    }
    return minObj;
}
  
export function maxBy(array, cb) {
    // Your code goes here...
    if (array.length === 0) {
        return undefined;
     }

    let objects = [];
    for (let obj of array) {
        if (cb(obj)) {
            objects.push(obj);
        }
    }
  
    let maxObj = objects[0];
    let maxValue = cb(maxObj);
    for (let i = 1; i < objects.length; i++) {
        const currentValue = cb(objects[i]);
        if (currentValue > maxValue) {
            maxValue = currentValue;
            maxObj = objects[i];
        }
    }
    return maxObj;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function