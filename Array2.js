// create a function that accepts 2 numbers

function generateArray(start, finish){
    const results = [];
    for(let i = start; i <= finish; i++){
        results.push(i);
    }
  
return results;

}
console.log(generateArray(4,7));
console.log(generateArray(-4,7));
