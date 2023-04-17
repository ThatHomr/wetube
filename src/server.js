import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = logger("dev");


app.use(logger)
app.get("/", logger, URLLogger, TimeLogger, SecurityLogger, handleHome);
app.get("/protected", ProtectorMiddleware);

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);