const fibonacci = function(fib) {
    if (fib < 1)
        return "OOPS";
    if (fib == 1 || fib == 2)
        return 1;
    return fibonacci(fib - 1) + fibonacci(fib - 2);
};

// Do not edit below this line
module.exports = fibonacci;
