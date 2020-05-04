function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

function factorial(num) {
    var prod = 1;
    for (var i = 1; i <= num; i++) {
        prod *= i;
    }
    return prod;
}

function fibonacci(num) {
    var fibArr = [0,1];
    if (num > 1) {
        for (var i = 2; i <= num; i++) {
            fibArr[i] = fibArr[i-1] + fibArr[i-2];
        }
    }
    return fibArr[num];
}

function secondToLast(arr) {
    if (arr.length < 2) {
        return null;
    }
    else {
        return arr[arr.length-2];
    }
}

function nthToLast(arr,n) {
    if (arr.length < n) {
        return null;
    }
    else {
        return arr[arr.length-n];
    }
}

function secondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }
    else {
        var max = -Infinity;
        var nextmax = -Infinity;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                nextmax = max;
                max = arr[i];
            }
            else if (arr[i] > nextmax && arr[i] < max) {
                nextmax = arr[i];
            }
        }
        return nextmax == -Infinity ? null : nextmax;
    }
}

function doubleTrouble(arr) {
    var counter = 0;
    var length = arr.length;
    while (counter < length) {
        arr.push(arr[0]);
        arr.push(arr[0]);
        arr.shift();
        counter++;
    }
    return arr;
}

