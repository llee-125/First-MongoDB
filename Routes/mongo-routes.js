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

router.get("/notes", getNotes);
router.get("/notes/single/:id", getNote);
router.post("/notes", addNote);
router.patch("/notes", updateText);
router.put("/notes", addTag);
router.put("/notes/multi", addTags);
router.delete("/notes/tags/multi", removeTags);
router.delete("/notes/tag", removeTag);
router.delete("/notes/:id", deleteNotes);

module.exports = router;
