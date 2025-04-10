import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js"
import notesRoutes from "./routes/notes.route.js";
import userRouters from "./routes/user.router.js";

dotenv.config();
const app = express();

const PORT = 5000;

app.use(cors());

app.use(express.json());

app.use("/api/notes", notesRoutes);
app.use("/api/auth", userRouters);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is started http://localhost:${PORT}`);
});