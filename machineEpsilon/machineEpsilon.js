// Algorithm to generate the machine zero or lowest representable value
// Such that => (1 + eps != 1)

const machineEpsilon = () => {
    const b = 2; m = 1; inverses = [];
    for (let k = -1; 1 + m !== 1; k--) {
        m = (b ** k);
        inverses.push(m); // inverses for two power
    }
    //console.log(inverses);
    return m * 2;
};

module.exports = { machineEpsilon }