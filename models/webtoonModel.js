const mongoose = require('mongoose');

// Webtoon schema
const webtoonSchema = new mongoose.Schema(
  {
    // Webtoon title, allowing duplicates
    webtoonTitle: {
      type: String,
      required: true
    },
    // Character name
    characterName: {
      type: String,
      required: true
    },
    // Unique character ID
    characterId: {
      type: String,
      required: true,
      unique: true  // Ensures no two characters have the same characterId
    },
    // Description with a default empty string if not provided
    description: {
      type: String,
      default: ''
    }
  },
  { timestamps: true } // Optional: Automatically adds createdAt and updatedAt fields
);

// If you don't want to restrict duplicate webtoon titles, make sure there's no unique index on `webtoonTitle`

module.exports = mongoose.model('Webtoon', webtoonSchema);
