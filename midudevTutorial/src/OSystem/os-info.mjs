// libreria nativa del sistema operativo
import 'colors'
import { platform, release, arch, cpus, uptime } from 'node:os'

console.log('Información del sistema Operativo:'.rainbow)
console.log('----------------------------')
console.log('Nombre del sistema Operativo: '.blue, platform())
console.log('Versión del sistema operativo: '.blue, release())
console.log('Arquitectura: '.blue, arch())
console.log('CPUs: '.blue, cpus())
console.log('uptime', uptime() / 60 /60)