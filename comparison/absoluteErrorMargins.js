function diff(calc, expected) {
    if (calc <= expected)
        return 'is ok'
    return 'simple equality test fails'
}


// console.log(diff((0.2 + 01), 0.3));
// console.log(diff(((Math.SQRT2) * (Math.SQRT2)), 2));

function useForEpsilon(calc, expected) {
    // multiple eps machine based on fortran
    if (Math.abs(calc - expected) / expected <= Number.EPSILON * 10)
        return 'is ok'
    return 'simple equality test fails' // is ok
}


// console.log(useForEpsilon((0.2 + 0.1), 0.3));
// console.log(useForEpsilon(((Math.SQRT2) * (Math.SQRT2)), 2));