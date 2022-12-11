const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3500

const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const corsOptions = require('./config/corsOptions')

app.use(logger)
// Lets other resources do a request to this API. If no security is added then with this line it's an open API
// 
app.use(cors(corsOptions))

// Lets our app receive and parse json data
app.use(express.json())
// Parses cookies
app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))

// Putting this after all the routes, and targetting all routes is kind of a
// 'catch all'. If none of the above requests are requested it comes in this route.
app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' })
  } else {
    res.type('txt').send('404 Not Found')
  }
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))