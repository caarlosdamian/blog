import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postsRoutes from "./routes/posts";
import usersRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import multer from "multer";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file?.filename);
});
app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("Server started on port 8800");
});
