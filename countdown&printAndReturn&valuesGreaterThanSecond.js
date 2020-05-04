function countdown(number) {
    newArray = [];
    for (var i = number; i >= 0; i--) {
        newArray.push(number);
    }
    return newArray;
}

function printAndReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}

function valuesGreaterThanSecond(arr) {
    if (arr.length == 1) {
        return "Array has only 1 element!";
    }
    else {
        var newArray = [];
        for (var i = 0; i < arr.length; i++){
            if (arr[i] > arr[1]) {
                newArray.push(arr[i]);
            }
        }
        return newArray;
    }
}

function previousLengths(arr) {
    for (var i = arr.length - 1; i >= 1; i--) {
        arr[i] = arr[i-1].length;
    }
    arr[0] = 0;
    return arr;
}