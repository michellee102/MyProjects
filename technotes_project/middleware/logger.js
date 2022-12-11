const { format } = require('date-fns')
// Getting v4 with destructuring and renaming it
const { v4: uuid } = require('uuid')
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (message, logFilename) => {
  // \t are tabs to make the logs easier to read
  const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
  // uuid() creates unique id for every log in case we need it in the future
  // \n creates a new line
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`

  try {
    // existsSync checks synchronously if a file exists in the given path
    const filePath = path.join(__dirname, '..', 'logs');
    if (!fs.existsSync(filePath)) {
      // If not, create that file
      await fsPromises.mkdir(filePath)
    }
    // Add new data to existing file, first param is the path, second the data of the file
    await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFilename), logItem)
  } catch (err) {
    console.log(err)
  }
}

const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
  console.log(`${req.method} ${req.path}`)
  next()
}

module.exports = { logEvents, logger }
