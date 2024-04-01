'use strict';
/*
 * Complete the 'getGroupedAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY words as parameter.
 */
function isAnagram(word1, word2) {
    const auxWord1 = word1.trim()
    const auxWord2 = word2.trim()
    if(auxWord1.length !== auxWord2.length){
        return false
    }
    
    return auxWord1.split('').sort().join('') === auxWord2.split('').sort().join('')
}

//words = ["cat", "listen", "silent","islent", "kitten", "salient"]

// [['cat], ["listen", "silent","islent"], ]

function getGroupedAnagrams(words) {
    
    const anagramList = []
    for(let index = 0; index < words.length; index ++) {
        let isAlreadyInList = false
        const word1 = words[index]  // "silent"
        anagramList.forEach(a => {
            const exists = a.findIndex(aux => aux === word1)
            if(exists !== -1) {
                isAlreadyInList = true;
            }
        })
        if(!isAlreadyInList) {
            const anagramByWord = [word1] // ["listen", "silent","islent"]
            let anagram = false
            for(let j = index+1; j < words.length; j++) {
                const word2 = words[j]
                if(isAnagram(word1, word2)){
                    anagramByWord.push(word2)
                }            
            }
            anagramList.push(anagramByWord)
        }
        
    }
    return anagramList

}



function main() {
    const result = getGroupedAnagrams([
        "inch",
"cat",
"chin",
"kit",
"act"
    ]);

    console.log(result)
}

main()