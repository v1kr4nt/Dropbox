import dotenv from "dotenv";
import watch from "node-watch";
import fetch from "node-fetch";
import fs from "fs";
import express from "express";
import multer from "multer";
import FormData from "form-data";
import nodePath from "path";
const upload = multer({ dest: "uplodas/" });
const app = express();

dotenv.config();

const sycnOutDir = process.env.SYNC_OUT_DIR;
const sycnInDir = process.env.SYNC_IN_DIR;

console.log(sycnOutDir);
watch(sycnOutDir, { recursive: false }, async (evt, name) => {
  console.log("name", name);
  const stats = fs.statSync(name);
  const file = fs.createReadStream(name);
  console.log("stats", stats);
  const form = new FormData();
  form.append("testing", "12345");
  form.append("file", file);
  await fetch(`${process.env.REMOTE_URL}/files`, {
    method: "POST",
    body: form,
  });
});

app.post("/files", upload.single("file"), function (req, res, next) {
  const { originalname, path } = req.file;
  const file = fs.readFileSync(path);
  fs.writeFileSync(nodePath.join(sycnInDir, originalname), file);
  fs.unlinkSync(path)
  res.status(200);
  res.send("success!");
});

app.listen(process.env.PORT);
