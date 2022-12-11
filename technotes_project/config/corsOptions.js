const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
  origin: (origin, callback) => {
    // Check if the origin from request is inside the allowedOrigins array,
    // if not, indexOf returns -1. 
    // Because we're testing with postman and postman has no origin, we should also check for that.
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS.'))
    }
  },
  // Explanation: https://stackoverflow.com/questions/24687313/what-exactly-does-the-access-control-allow-credentials-header-do
  // This option makes CORS include cookies on cross-origin requests.
  // If this is true, you must add withCredentials: true to your request
  credentials: true,
  optionsSuccessStatus: 200
}

module.exports = corsOptions