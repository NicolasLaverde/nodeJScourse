function hourglassSum(array) {
    console.log(array.length)
    let maxHourglasSum = -100000
    const glassesPerRow = (array.length-2)
    let counter = 0
    while(counter < glassesPerRow){
        let colNum = 0
        while (colNum < glassesPerRow){
            const rowNumber = parseInt(counter/glassesPerRow)
            const newSum = array[rowNumber][colNum] + array[rowNumber][colNum+1] + array[rowNumber][colNum+2] + array[rowNumber+1][colNum + 1] + array[rowNumber+2][colNum] +
            array[rowNumber+2][colNum+1] +array[rowNumber+2][colNum+2]
            if(newSum > maxHourglasSum){
                maxHourglasSum = newSum
            }
            colNum++
        }
        counter++
        
        
    }
    
    return maxHourglasSum 
}

let arr = Array(4);

    for (let i = 0; i < 6; i++) {
        const columnArray = []
        for(let j = 0; j <6; j++){
            columnArray.push(Math.floor(Math.random()*200))
        }
        arr[i] = columnArray
        console.log(columnArray)
    }

   const result =  hourglassSum(arr)
   console.log(result)