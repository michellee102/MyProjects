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