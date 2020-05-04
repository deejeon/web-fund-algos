function fibonacci(num) {
    var fibArr = [0,1];
    if (num > 1) {
        for (var i = 2; i <= num; i++) {
            fibArr[i] = fibArr[i-1] + fibArr[i-2];
        }
    }
    return fibArr[num];
}


function sumToOneDigit(num) {
    if (num < 10) {
        return num;
    }
    else {
        var sum = 0;
        while (num > 0) {
            var lastDigit = num%10;
            sum += lastDigit;
            num = Math.floor(num/10);
            if (sum > 9 && num == 0) {
                num = sum;
                sum = 0;
            }
        }
        return sum;
    }
}


function isPrime(num) {
    if (num == 0 || num == 1) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num%i == 0) {
            return false;
        }
    }
    return true;
}



function sumToOneDigit(num) {
    if (num < 10) {
        return num;
    }
    else {
        var sum = 0;
        while (Math.floor(num/10) != 0) {
            var lastDigit = num%10;
            sum += lastDigit;
            num = Math.floor(num/10);
        }
        return sum;
    }
}