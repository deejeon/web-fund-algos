function get1to255() {
    var arr = [];
    for (var i = 1; i < 256; i++) {
        arr.push(i);
    }
    return arr;
}

function getEven1000() {
    var sum = 0;
    for (var i = 0; i < 1001; i += 2) {
        sum += i;
    }
    return sum;
}

function getOdd5000() {
    var sum = 0;
    for (var i = 1; i < 5000; i += 2) {
        sum += i;
    }
    return sum;
}

function iterate(arr) {
    var sum = 0;
    for (var index in arr) {
        sum += arr[index];
    }
    return sum;
}

function findMax(arr) {
    var max = arr[0];
    for (var index in arr) {
        if (arr[index] > max) {
            max = arr[index];
        }
    }
    return max;
}

function findAvg(arr) {
    var sum = 0;
    for (var index in arr) {
        sum += arr[index];
    }
    var avg = sum / arr.length;
    return avg;
}

function arrayOdd() {
    var arr = [];
    for (var i = 1; i < 50; i += 2) {
        arr.push(i);
    }
    return arr;
}

function greaterThanY(arr,Y) {
    var count = 0;
    for (var index in arr) {
        if (arr[index] > Y) {
            count++;
        }
    }
    return count;
}

function squares(arr) {
    for (var index in arr) {
        arr[index] *= arr[index];
    }
    return arr;
}

function negatives(arr) {
    for (var index in arr) {
        if (arr[index] < 0) {
            arr[index] = 0;
        }
    }
    return arr;
}

function getMaxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (var index in arr) {
        if (arr[index] > max) {
            max = arr[index]
        }
        if (arr[index] < min) {
            min = arr[index]
        }
        sum += arr[index];
    }
    var avg = sum / arr.length;
    var newArr = [max, min, avg];
    return newArr;
}

function swapValues(arr) {
    var temp = arr[arr.length - 1];
    arr[arr.length - 1] = arr[0];
    arr[0] = temp;
    return arr;
}

function numToStr(arr) {
    for (var index in arr) {
        if (arr[index] < 0) {
            arr[index] = 'Dojo';
        }
    }
    return arr;
}