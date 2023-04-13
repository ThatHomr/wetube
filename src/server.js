import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const handleHome = (req, res) => {
    return res.send("I love middlewares");
};

const URLLogger = (req, res, next) => {
    console.log(`Path : ${req.path}`);
    next();
};

const TimeLogger = (req, res, next) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    console.log(`Time: ${year}.${month}.${day}`)
    next();
};

const SecurityLogger = (req, res, next) => {
    const protocol = req.protocol;
    let col;
    if (protocol === "https") {
        col = "secure"
    } else {
        col = "insecure"
    }
    console.log(`${col}`);
    next();
};

const ProtectorMiddleware = (req, res) => {
    const path = req.path
    if (path === "/protected"){
        return res.send("<h1>Protected<h1>")
    }
};

app.get("/", logger, URLLogger, TimeLogger, SecurityLogger, handleHome);
app.get("/protected", ProtectorMiddleware);

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);