import express from "express";
const router = express.Router();

import home from "../controllers/home";

module.exports = app => {
  router.get("/", home.index);

  app.use(router);
};
