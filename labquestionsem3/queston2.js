// find average number of a array 
// Function calculateCeilingAverage(arr):
//  Set sum to 0
//  For each number in arr:
//  Add number to sum
//  Set average to sum divided by the length of arr
//  Set ceilingAverage to the smallest integer greater than or equal to average
//  Print ceilingAverage
// End Function
let arr = [1, 2, 3, 4, 5];
let calculateCeilingAverage = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    let average = sum / arr.length;
    let ceilingAverage = Math.ceil(average);
    console.log(ceilingAverage);
}
calculateCeilingAverage(arr);