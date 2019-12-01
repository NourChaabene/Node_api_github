import express from "express";
import * as RepositoryController from "./controllers/Repository";

// Create Express server
const app = express();

// Express configuration
app.set("port", 3000);

// Setting controllers
app.get("/:username", RepositoryController.getRepositoriesByUser);

const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d",
        app.get("port")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;
