for (var i = 1; i < 256; i++) {
    console.log(i);
}

for (var i = 1; i < 256; i += 2) {
    console.log(i);
}

for (var i = 1; i < 256; i++) {
    if (i%2 != 0) {
        console.log(i);
    }
}

var arr = [2,3,6,9,0,-5,10]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (var i = 0; i < arr.length; i++) {
    if(arr[i] > 3) {
        console.log(arr[i]);
    }
}