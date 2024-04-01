require('colors')
const fs = require('node:fs/promises')

;(async () => {
    console.log('Reading first file'.red)
    const text = await fs.readFile('src/assets/file.txt', 'utf-8')
    console.log(text)
    
    console.log('Doing many other things while readFile is excecuting....')
    
    console.log('Reading the second File => '.red)
    const text2 = await fs.readFile('src/assets/teams.txt', 'utf-8')
})()


