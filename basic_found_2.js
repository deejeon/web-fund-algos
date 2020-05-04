function biggie(arr) {
    for (var index in arr) {
        if (arr[index] > 0) {
            arr[index] = 'big';
        }
    }
    return arr;
}

function printLowReturnHigh(arr) {
    var max = arr[0];
    var min = arr[0];
    for (var index in arr) {
        if (arr[index] > max) {
            max = arr[index]
        }
        if (arr[index] < min) {
            min = arr[index]
        }
    }
    console.log(min);
    return max;
}

function printOneReturnAnother(arr) {
    console.log(arr[arr.length - 2]);
    for (var index in arr) {
        if (arr[index] % 2 === 1) {
            return arr[index];
        }
    }
    return "no odd values in array";
}

function doubleVision(arr) {
    var newArr = [];
    for (var index in arr) {
        newArr.push(arr[index]*2)
    }
    return newArr;
}

function countPositives(arr) {
    var count = 0;
    for (var index in arr) {
        if (arr[index] > 0) {
            count++;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}

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

function incrementTheSeconds(arr) {
    for (var index in arr) {
        if (index % 2 === 1) {
            arr[index]++;
        }
        console.log(arr[index]);
    }
    return arr;
}

function previousLengths(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }
    return arr;
}

function addSeven(arr) {
    var newArr = [];
    for (var index in arr) {
        newArr[index] = arr[index] + 7;
    }
    return newArr;
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

function negative(arr) {
    var newArr = [];
    for (var index in arr) {
        if (arr[index] > 0) {
            arr[index] *= -1;
        }
        newArr.push(arr[index]);
    }
    return newArr;
}

function alwaysHungry(arr) {
    var count = 0;
    for (var index in arr) {
        if (arr[index] == "food") {
            console.log("yummy");
            count++;
        }
    }
    if (count == 0) {
        console.log("I'm hungry");
    }
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

function scaleTheArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}