function sortArray(a, b) {
    if(b[1] - a[1] === 0){
        return a[0].charCodeAt(0) - b[0].charCodeAt(0)
    }
    return b[1] - a[1]
}

function characterFrequency(text) {
    const dictionary = {}
    for(const character of text) {
        if(dictionary[character] !== undefined) {
            dictionary[character] = dictionary[character] + 1
        } else {
            dictionary[character] = 1
        }
    }
    console.log(dictionary)
    const array = Object.entries(dictionary)
    console.log(array)
    return array.sort(sortArray)
}

const text = 'mmmaaaiiibbb'
const result = characterFrequency(text) 
console.log(result)