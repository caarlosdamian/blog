import express from "express";
import postsRoutes from "./routes/posts";
import usersRoutes from "./routes/posts";
import authRoutes from "./routes/posts";

const app = express();

app.use(express.json());
app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("Server started on port 8800");
});
