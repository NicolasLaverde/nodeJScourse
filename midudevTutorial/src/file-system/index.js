require('colors')
const fs = require('node:fs')

const stats = fs.statSync('src/assets/file.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
)