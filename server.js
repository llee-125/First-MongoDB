const express = require("express");
const app = express();

// process.env.PORT is for if we want to place on Heroku later on
const PORT = process.env.PORT || 3000;

// sets for sending and receiving json
app.use(express.json());

// sets up for string encoded data (params and req.quert) everything else
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require("./Routes/test-routes.js");
const notesRoutes = require("./Routes/mongo-routes.js");

app.use(apiRoutes, notesRoutes);

//  sets up port gets server running
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
