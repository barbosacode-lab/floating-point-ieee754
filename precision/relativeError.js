const positiveNormalizedDoublePrecision = e => {
    // Scientific notation => 1.m * 2(e-1023)
    return 2 ** -(e - 1)
};


module.exports = { positiveNormalized }