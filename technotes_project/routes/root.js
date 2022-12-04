const express = require('express')
const router = express.Router()
const path = require('path')

// REGEX:
// ^: add the beginning of the string only
// $: add the end of the string only
// |: or
// (.html)?: makes the .html after /index optional
// So this means: you can request /, or /index, or /index.html. Then it send a file that's one back of the routes folder, into the views folder
// and sends a file named index.html
router.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router