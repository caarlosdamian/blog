import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postsRoutes from "./routes/posts";
import usersRoutes from "./routes/users";
import authRoutes from "./routes/auth";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("Server started on port 8800");
});
