const positiveNormalizedDoublePrecision = e => {
    // Scientific notation => 1.m * 2(e-1023)
    return 2 ** -(e - 1)
};

const relativeError = (x, y) => {
    // Scientific notation => (|X - Y| / x)
    const diff = x - y;
    return `${Math.abs(diff) / x * 100 | 1}%`
}


module.exports = { positiveNormalized, relativeError }