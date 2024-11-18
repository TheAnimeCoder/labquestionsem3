// plaintext
// Function checkBasket(fruits):
//  Set fruitSet to an empty set
//  For each fruit in fruits:
//  Add fruit to fruitSet
//  If the size of fruitSet is greater than 1:
//  Print "Mixed Basket"
//  Else:
//  Print "Single Type"
// End Function
let fruits = ["banana", "apple", "orange", "banana"];
let checkBasket = (fruits) =>{
    let fruitSet = new Set();
    fruits.forEach(element => {
        fruitSet.add(element);
    });
    if(fruitSet.size > 1){
        console.log("Mixed Basket");
    }else{
        console.log("Single Type");
    }
}
checkBasket(fruits);