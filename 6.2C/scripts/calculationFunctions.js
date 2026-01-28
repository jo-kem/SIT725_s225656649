
// Function to add list of numbers
const addNumbers = function (numbers, res = NaN) {
    let sum = 0;
    for (let num of numbers) {
        if (typeof num === 'string') {
            num = parseFloat(num);
        };
        if (isNaN(num)) {
            if (isNaN(res)) {
                throw new TypeError("Please provide valid numbers for a.");
            } else {
                return res.status(400).json({ error: "Please provide valid numbers for a." });
            }
        };
        sum += num;
    };
    return sum;
}

// Function to multiply list of numbers
const multiplyNumbers = function (numbers, res = NaN) {
    let product = 1;
    for (let num of numbers) {
        if (typeof num === 'string') {
            num = parseFloat(num);
        };
        if (isNaN(num)) {
            if (isNaN(res)) {
                throw new TypeError("Please provide valid numbers for a.");
            } else {
                return res.status(400).json({ error: "Please provide valid numbers for a." });
            }
        };
        product *= num;
    };
};

exports.addNumbers = addNumbers;
exports.multiplyNumbers = multiplyNumbers;