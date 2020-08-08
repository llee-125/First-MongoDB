const router = require("express").Router();

// const {} = require("../Controllers/mongo-controller");

<<<<<<< HEAD
router.get("/test", (req, res) => {
  res.send("working");
});
=======
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
>>>>>>> 4c2e29cce6358e0115cdbadc59eb5cd343301f74

module.exports = router;
