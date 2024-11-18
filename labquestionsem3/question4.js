// Function reverseOdds(A):
//  Set oddNumbers to an empty list
//  For each number in A:
//  If number is odd:
//  Add number to oddNumbers
//  Set K to the length of oddNumbers
//  Print K
//  Reverse oddNumbers
//  For each number in reversed oddNumbers:
//  Print number
// End Function
let A = [22, 56, 32, 45, 55];
let reverseOdds = (A) =>{
    let oddNumbers = [];
    A.forEach(element => {
        if(element % 2 !== 0){
            oddNumbers.push(element);
        }
    });
    let K = oddNumbers.length;
    console.log(K);
    let newOddNumbers = oddNumbers.reverse();
    newOddNumbers.forEach(element => {
        console.log(element);
    });
}
reverseOdds(A);