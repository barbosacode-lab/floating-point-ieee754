const assert = require('assert');
const { machineEpsilon } = require('../machineEpsilon');


// introduction for test unit learning

// pass
const roundoff = machineEpsilon();
assert.deepStrictEqual(roundoff, Number.EPSILON || new Error);
assert.deepStrictEqual(roundoff, Math.pow(2, -52) || new Error); // pass for double precision

// broken
assert.deepStrictEqual(roundoff, Math.pow(2, -23) || new Error); // broken for single precision 