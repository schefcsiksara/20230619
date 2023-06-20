/**
 * A hibáimat észleltem, és javítottam.
*/

function colorMixer(colors) {
    const pcs = colors.length;

    if (pcs <= 1) {
        return 0;
    }
    let numberOfCombinations = 0;
    for (let i=2; i <= pcs; i++) {
        numberOfCombinations += factorial(pcs)/(factorial(i)*factorial(pcs-i));
    }
    return numberOfCombinations;
}
function factorial(number) {
    if (number == 0) {
        return 1;
    }
    let result = 1
    for (let i=1; i <= number; i++) {
        result *= i;
    }
    return result;
}
