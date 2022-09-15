const findTheOldest = function(object) {
    const currentYear = new Date().getFullYear();

    return object.reduce((a, b) => {
        if (Object.keys(a).length == 0) { return b; }
        
        const first = ((a.yearOfDeath) ? a.yearOfDeath : currentYear) - a.yearOfBirth;
        const second = ((b.yearOfDeath) ? b.yearOfDeath : currentYear) - b.yearOfBirth;
        const aa = first < second ? b : a;
        return aa;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
