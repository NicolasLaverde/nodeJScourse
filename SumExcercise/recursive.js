function AddAll(list){
    if(list.length === 0){
        return 0
    } else if (list.length === 1) {
        return list[0]
    }
    const popElement = list.pop()
    return AddAll(list) + popElement
}

const result = AddAll([2, 7, 8, 3, 1, 4, 10, 12, 1, 3, 20, 7, 5])

console.log(`The sum is : ${result}`)