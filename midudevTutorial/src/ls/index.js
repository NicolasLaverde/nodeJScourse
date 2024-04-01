const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls (directory) {
  try {
    const files = await fs.readdir(folder)
    const filesWithComma = files.reduce((acc, file, index) => {
      if (index < file.length) {
        return `${acc} ${file},`
      } else {
        return `${acc} ${file}`
      }
    }, '')

    const filePromises = files.map(async file => {
      const filePath = path.join(directory, file)
      let stats
      try {
        stats = await fs.stat(filePath)
      } catch (err) {
        process.exit(1)
      }
      const isDirectory = stats.isDirectory()
      const fileType = isDirectory ? 'd' : '-'
      const fileSize = stats.size
      const fileModified = stats.mtime.toLocaleString()

      return `${fileType} ${file} ${fileSize.toString()} ${fileModified}`
    })
    console.log('files: ', filesWithComma)
    const filesInfo = await Promise.all(filePromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
  } catch (err) {
    console.log('This is an error continue the excecusion of programm')
    process.exit(1)
  }
}

ls(folder)
