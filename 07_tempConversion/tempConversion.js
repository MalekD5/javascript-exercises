const ftoc = function(fren) {
  const result = (fren - 32) * (5/9);
  return parseFloat(result.toFixed(1));
};

const ctof = function(cel) {
  const result = cel * (9/5) + 32;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
