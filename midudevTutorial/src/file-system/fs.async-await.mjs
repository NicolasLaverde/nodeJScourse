import 'colors'
import { readFile } from 'node:fs/promises'

console.log('Reading first file'.red)
const text = await readFile('src/assets/file.txt', 'utf-8')
console.log(text)

console.log('Doing many other things while readFile is excecuting....')

console.log('Reading the second File => '.red)
const text2 = await readFile('src/assets/teams.txt', 'utf-8')


