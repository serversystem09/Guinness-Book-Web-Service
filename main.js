const port = 80,
    express = require(),
    app = express(),
    homeController = require("./controllers/homeController");
    
    app.set("port", process.env.PORT || 80);
    app.set("view engine", "vue");

    app.get("/", homeController.mainpage);
    
    app.listen(app.get("port"), () => {
        console.log(`Server running at http://localhost:${app.get("port")}`);
    });

