function Fib(n) {
    if ( n==0 || n == 1) {
        return n;
    }
    else {
        return Fib(n-2) + Fib(n-1);
    }
}

