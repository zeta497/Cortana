
// Returns a random integer between [min, max)
exports.getRndInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
