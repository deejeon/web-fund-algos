// 2) Print odds from 1 to 255
function PrintOdds1To255() {
    for (var i = 1; i < 256; i = i+2) {
        console.log(i);
    }
}

// 5) Find and print max
function PrintMaxofArray(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}

// 8) Square the values in an array
function SquareArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

// 11) Print max, min, and avg
function PrintMaxMinAverageArrayVals(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log('The maximum is: ' + max);
    console.log('The minimum is: ' + min);
    console.log('The average is: ' + avg);
}
