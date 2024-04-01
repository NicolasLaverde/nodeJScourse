'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */
function arrayManipulation(n, queries) {
    const maxNumbers = Array(n+1)
    let cummulativeSum = 0
    maxNumbers.fill(0)
    let maxNumber = 0

    for(let i = 0; i < queries.length; i++ ){
        maxNumbers[queries[i][0]-1] += queries[i][2]
        maxNumbers[queries[i][1]] -= queries[i][2]
    }

    console.log(maxNumbers)

    
    

    for(let j = 0; j < n; j++) {
        if(j === 0) {
            cummulativeSum = maxNumbers[0]
        } else {
            cummulativeSum = maxNumbers[j] + cummulativeSum
            console.log(maxNumbers[j])
            console.log(cummulativeSum)
        }
        if(maxNumber < cummulativeSum){
            maxNumber = cummulativeSum
        }
    }
    return maxNumber


     // const a = queries[i][0] -1
        // const b = queries[i][1] -1
        // const addingNumber = queries[i][2]
        // let counter = a
        // while(counter <= b){
        //     const newNumber = maxNumbers[counter] + addingNumber
        //     maxNumbers[counter] = newNumber
        //     if(newNumber > maxNumber){
        //         maxNumber = newNumber
        //     }
        //     counter ++
        // }
}



function main() {
    const n = 10;

    const m = 3;

    let queries = Array(m);

    for(let j = 0; j < m; j++){
        const innerArray = []
        for (let i = 0; i < 3; i++) {
            if(i === 0) {
                innerArray.push(Math.floor(Math.random()*n +1))
            }
            else if(i+1 === 3){
                const number = Math.floor(Math.random()*100)
                innerArray.push(number)
            } else {
                let number = undefined
                do{
                    number = Math.floor(Math.random()*n +1)
                }while(innerArray[i-1] > number)
                innerArray.push(number)
            }
        }
        queries[j] = innerArray
    }

    queries[0] = [1,5,3]
    queries[1] = [4,8,7]
    queries[2] = [6,9,1]
    console.log(queries)

    const result = arrayManipulation(n, queries);
    console.log(result)
}

main()