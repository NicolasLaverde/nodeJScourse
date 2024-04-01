function printAnagrams(arr) {
 
    const map = {};
   
    // loop over all words
    for (let i = 0; i < arr.length; i++) {
   
      // convert to char array, sort and
      // then re-convert to string
      let word = arr[i];
      let letters = word.split("");
      letters.sort();
      let newWord = letters.join("");
   
      // calculate hashcode of string
      // after sorting
      if (map[newWord]) {
   
        map[newWord].push(word);
   
      } else {
   
        // This is the first time we are
        // adding a word for a specific
        // hashcode
        const words = [];
        words.push(word);
        map[newWord] = words;
      }
    }
   
    // print all the values where size is > 1
    // If you want to print non-anagrams,
    // just print the values having size = 1
    for (const s in map) {
      const values = map[s];
      if (values.length > 1) {
        console.log(values);
      }
    }
  }
   
  // Driver program
  const arr = ["cat", "dog", "tac", "god", "act"];
  printAnagrams(arr);
  // This code is contributed By Shivam Tiwari