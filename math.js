
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Ділити на нуль не можна!");
    }
    return a / b;
}

function power(a, b) {
    return a ** b;
}

function mod(a, b) {
    return a % b;
}

module.exports = { multiply, divide, power, mod };
