import path from "path";

import morgan from "morgan";
import multer from "multer";
import express from "express";
import errorhandler from "errorhandler";

import routes from "../routes/index.routes";

import webpackDevMiddleware from "webpack-dev-middleware";
import webpackConfig from "../../webpack.dev.config";
import webpack from "webpack";

module.exports = app => {
  //Settings
  app.set("port", process.env.PORT || 3000);

  //middlewares
  app.use(morgan("dev"));
  app.use(
    multer({ dest: path.join(__dirname, "../uploads/temp") }).single("images")
  );
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(webpackDevMiddleware(webpack(webpackConfig)));

  // routes
  routes(app);

  // static files
  app.use("/public", express.static(path.join(__dirname, "../public")));

  //errorhandlers
  if ("development" === app.get("env")) {
    app.use(errorhandler);
  }

  return app;
};
