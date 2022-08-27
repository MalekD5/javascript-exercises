const sumAll = function(start, end) {
      if (typeof start !== 'number' || typeof end !== 'number')
            return 'ERROR';
      if (start < 0 || end < 0) 
            return 'ERROR'
      
      if (end < start) {
            const temp = start;
            start = end;
            end = temp;
      }

      if (start === end)
            return end;
      return start + sumAll(start+1, end);
};

// Do not edit below this line
module.exports = sumAll;
