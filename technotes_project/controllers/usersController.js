const User = require('../models/User')
const Note = require('../models/Note')
// For handling exceptions inside async routes and passing them to your express error handler
const asyncHandler = require('express-async-handler')
// For hashing user password before saving it
const bcrypt = require('bcrypt')

// @desc: Get all users
// @route: GET /users
// @access: Private
const getAllUsers = asyncHandler(async (req, res) => {
  // .select(): which fields you want or do not want to receive
  // .lean(): With this mongoose only returns the data, not methods of this model like save, we're not changing data in this route so we don't need it
  const users = await User.find().select('-password')
  if (!users) {
    return res.status(400).json({ message: 'Sorry, no users found.' })
  }
  res.json(users)
})

// @desc: Create new user
// @route: POST /users
// @access: Private
const createNewUser = asyncHandler(async (req, res) => {

})

// @desc: Update a user
// @route: PATCH /users
// @access: Private
const updateUser = asyncHandler(async (req, res) => {

})

// @desc: Delete a user
// @route: DELETE /users
// @access: Private
const deleteUser = asyncHandler(async (req, res) => {

})



module.exports = {
  createNewUser, getAllUsers, updateUser, deleteUser
}