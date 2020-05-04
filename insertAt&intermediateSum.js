
function insertAt(arr, val, index){
    for (let i = arr.length-1; i>=index; i--){
        arr[i+1] = arr[i]
    }
    arr[index] = val;
    return arr;
}


function intermediateSum(arr,n) {
    var count = 0;
    var sum = 0;
    for (var index = 0; index < arr.length; index++) {
        if (count == n) {
            insertAt(arr, sum, index);
            count = 0;
            sum = 0;
        }
        else {
            sum += arr[index];
            count++;
        }
    }
    if (sum != 0){
        arr.push(sum);
    }
    return arr;
}

console.log(intermediateSum([1,2,3,4,5,6,7,8],33))