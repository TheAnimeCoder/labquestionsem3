//find the maximum and minimum number in a array.
let arr = [100, 2, 3, 4, -5];
let length = arr.length;
let findMinAndMax = (arr) => {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(`minimum number is ${min}`);
    console.log(`maximum number is ${max}`);
}
findMinAndMax(arr);