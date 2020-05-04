function pushFront(arr, num){
    for (let i = arr.length-1; i>=0; i--){
        arr[i+1] = arr[i]
    }
    arr[0] = num;
    return arr;
}

pushFront([2,3,4], 0)


function popArr(arr){
    var removed = arr[0];
    for (let i = 0; i<arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    console.log(arr)
    return removed;
}

popArr([1,2,3,4,5])


function insertAt(arr, val, index){
    for (let i = arr.length-1; i>=index; i--){
        arr[i+1] = arr[i]
    }
    arr[index] = val;
    return arr;
}

insertAt([1,2,3,4,5], 'hello', 3)


function removeAt(arr, index){
    var removed = arr[index];
    for (let i = index; i<arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    console.log(arr);
    return removed;
}

removeAt([1,2,3,4,5], 3)


function removeDuplicates(arr) {
    for (var i = 0; i < arr.length; i++) {
        while (arr[i] == arr[i+1]) {
            removeAt(arr,i);
        }
    }
}
