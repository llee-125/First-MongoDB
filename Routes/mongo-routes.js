const router = require("express").Router();

const {
  getNotes,
  addNote,
  getNote,
  updateText,
  addTag,
  addTags,
  removeTags,
  removeTag,
  deleteNotes,
} = require("../Controllers/mongo-controller");

// gets all notes
router.get("/notes", getNotes);

// gets a single note by id
router.get("/notes/single/:id", getNote);

// posts a note
router.post("/notes", addNote);

// update the text in a note
router.patch("/notes", updateText);

// adds a single tag
router.put("/notes", addTag);

// adds multiple tags
router.put("/notes/multi", addTags);

// deletes multiple tags
router.delete("/notes/tags/multi", removeTags);

// deletes a single tag
router.delete("/notes/tag", removeTag);

// deletes entire task
router.delete("/notes/:id", deleteNotes);

module.exports = router;
