// argumentos de entrada

process.on('exit', () => {
  console.log(process.env.NODE_ENV)
  console.log(process.cwd())
})

// controlar el proceso y su salida
if (Math.random() > 0.5) {
  // terminar el proceso sin errores
  process.exit(0)
} else {
  // terminar el proceso con un error
  process.exit(1)
}
