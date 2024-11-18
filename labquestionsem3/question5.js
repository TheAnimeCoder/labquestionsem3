// Function reverseEvens(A):
//  Set evenNumbers to an empty list
//  For each number in A:
//  If number is even:
//  Add number to evenNumbers
//  Set K to the length of evenNumbers
//  Print K
//  Reverse evenNumbers
//  For each number in reversed evenNumbers:
//  Print number with space in between
// End Function
let A = [22, 56, 32, 45, 55];
let reverseEvens = (A) =>{
    let evenNumbers = [];
    A.forEach(element => {
        if(element % 2 === 0){
            evenNumbers.push(element);
        }
    });
    let K = evenNumbers.length;
    console.log(K);
    let newEvenNumbers = evenNumbers.reverse();
    newEvenNumbers.forEach(element => {
        console.log(element);
    });
}
reverseEvens(A);