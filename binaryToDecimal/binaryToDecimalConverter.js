const positionOfPoint = bin => bin.toString().indexOf('.');

function binaryToDecimalConverter(binary) {
    const position = positionOfPoint(binary);
    const binaryString = binary.toString().split('');
    let mantissa = position - 1;

    return binaryString.reduce((acc, curr) => {
        if (!(curr === '.')) {
            acc += (+curr * Math.pow(2, mantissa));
            mantissa--;
        }
        return acc;
    }, 0)
}