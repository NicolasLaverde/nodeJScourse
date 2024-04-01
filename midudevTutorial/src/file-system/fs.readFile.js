require('colors')
const fs = require('node:fs/promises')

console.log('Reading first file'.red)
fs.readFile('src/assets/file.txt', 'utf-8').then(text => {
    console.log(text)    
})

console.log('Doing many other things while readFile is excecuting....')

console.log('Reading the second File => '.red)
fs.readFile('src/assets/teams.txt', 'utf-8').then(text => {
    console.log(text)
})
