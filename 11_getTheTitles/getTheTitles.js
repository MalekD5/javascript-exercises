const getTheTitles = function(obj) {
    return Object.keys(obj).map(key => obj[key].title);
};

// Do not edit below this line
module.exports = getTheTitles;
