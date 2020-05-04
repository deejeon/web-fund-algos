function evensAndOdds (arrOfNumbers) {
    var oddCount = 0;
    var evenCount = 0;
    for (var i = 0; i < arrOfNumbers.length; i++) {
        if (arrOfNumbers[i] % 2 != 0) {
            oddCount++;
            evenCount = 0;
            if (oddCount >= 3) {
                console.log ("That's odd!");
            }
        }
        else {
            evenCount++;
            oddCount = 0;
            if (evenCount >= 3) {
                console.log ("Even more so!");
            }
        }
    }
}


function reverseArr(arr) {
    var startIndex = 0;
    var endIndex = arr.length - 1;
    var temp = 0;
    while (startIndex < endIndex) {
        temp = arr[startIndex];
        arr[startIndex] = arr[endIndex];
        arr[endIndex] = temp;
        startIndex++;
        endIndex--;
    }
    return arr;
}


function scaleTheArray(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * val;
    }
    return arr;
}

function swapTowardsTheCenter(arr) {
    var startIndex = 0;
    var endIndex = arr.length - 1;
    var temp = 0;
    while (startIndex < endIndex) {
        temp = arr[startIndex];
        arr[startIndex] = arr[endIndex];
        arr[endIndex] = temp;
        startIndex += 2;
        endIndex -= 2;
    }
    return arr;
} 