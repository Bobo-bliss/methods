/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
    const asteroids = data.asteroids;
    const yearCounts = {};
    let maxYear = null;
    let maxCount = -1;
    
    for (let asteroid of asteroids) {
        const year = asteroid.discoveryYear;
        yearCounts[year] = (yearCounts[year] || 0) + 1;
      
        if (yearCounts[year] > maxCount) {
            maxYear = year;
            maxCount = yearCounts[year];
        }
    }
    return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
