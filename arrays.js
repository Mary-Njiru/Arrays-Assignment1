//Question 1. Finding the last element
let arr1 = [3,7,34,90,12];
let lastElement1 = arr1[arr1.length -1];
console.log({lastElement1});

let arr2 = [true,"green","where",12,56];
let lastElement2 = arr2[arr2.length -1];
console.log({lastElement2});

//Question2. Joining elements
let myPets = ["Cow","Bird","Snake","Dog"];
console.log(myPets.join(','));

//Question3. Sort
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
console.log(arr3.sort());

//Question4. Remove Duplicates
var arr = ["apple","mango","apple","orange","mango","mango"];
function removeDuplicates(arr) {
    let myStrings = [];
    arr.forEach(element => {
        if (!myStrings.includes(element)) {
            myStrings.push(element);
        }
    });
    return myStrings;
}
console.log(removeDuplicates(arr));

//Question 5. 
let arr5 = ["the","way","x",4];
let word = "way";

if (array.indexOf(word) !== -3) { 
    console.log(`${word} is present in the array`); 
} else { 
    console.log(`${word} "the search word was not found`); 
};




//Question6 Sort.
let sortString = (stringg) => {
    return stringg.split("").sort().join("");
};
 
console.log("Sorted String: ");
console.log(sortString("sevink"));




