import express from "express";

const router = express.Router();

router.get("/reg", (req, res) => {
  res.send("This is teeeess");
});

export default router;
