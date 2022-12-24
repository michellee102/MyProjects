const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const noteSchema = new mongoose.Schema(
  {
    user: {
      // It's an objectId from another schema
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // To which schema you refer for the objectId
      ref: 'User'
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    completed: {
      type: boolean,
      default: false
    },
  },
  // You can give options to a schema, with timestamps: true
  // it automatically adds an createdAt and updatedAt fields.
  {
    timestamps: true
  }
)

// Because the PO want's notes to have simple ticket numbers we use an package named mongoose-sequence.
// You can add this as a plugin to the Schema you just created and give it a few options
noteSchema.plugin(AutoIncrement, {
  inc_field: 'ticket',
  id: 'ticketNums',
  start_seq: 500
})

module.exports = mongoose.model('Note', noteSchema)