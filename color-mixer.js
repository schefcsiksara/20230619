function colorMixer(colors) {
    const pcs = colors.lenght;

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
    if (number = 0) {
        return 0;
    }
    let resoult = 1
    for (let i=1; i <= number; i++) {
        result *= i;
    }
    return resoult;
}