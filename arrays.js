//Question 1. Finding the last element
let arr1 = [3,7,34,90,12];
let lastElement1 = arr1[arr1.length -1];
console.log({lastElement1});
console.log(arr1.slice(-1));     //use slice method

let arr2 = [true,"green","where",12,56];
let lastElement2 = arr2[arr2.length -1];
console.log({lastElement2});
console.log(arr2.slice(-1));    //use slice method

//Question2. Joining elements
let myPets = ["Cow","Bird","Snake","Dog"];
console.log(myPets.join());

//Question3. Sort
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
arr3.sort((a,b) =>a-b);  //Ascending
console.log('ascending order', arr3)
arr3.sort((a,b) =>b-a);
console.log('descending order', arr3)

//Question4. Remove Duplicates
var arr = ["apple","mango","apple","orange","mango","mango"];
  
    let myStrings = [];
    let myDuplicates = []
    arr.forEach(element => {
        if (!myStrings.includes(element)) {
            myStrings.push(element);
        }
        else{
        myDuplicates.push(element)
        }
    });
    
console.log({myStrings});
console.log({myDuplicates});


//Question 5. 
let arr5 = ["the","way","x",4];
arr5.forEach(x =>{
    if(x==='way'){
        console.log(x)
    }
    else{
        console.log('the search word was not found')
    }
})




//Question6 Sort.
let word = "sevink"
console.log(word.split('').sort().join(''));





