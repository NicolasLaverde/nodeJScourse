// libreria nativa del sistema operativo
require('colors')
const os = require('node:os')

console.log('Información del sistema Operativo:'.rainbow)
console.log('----------------------------')
console.log('Nombre del sistema Operativo: '.blue, os.platform())
console.log('Versión del sistema operativo: '.blue, os.release())
console.log('Arquitectura: '.blue, os.arch())
console.log('CPUs: '.blue, os.cpus())
console.log('uptime', os.uptime() / 60 /60)