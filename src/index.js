import express from "express";
import config from "./server/config";

//* */Color consiole
import chalk from "chalk";
const log = console.log;
//* */database
import "./database";
//* */babel
import "@babel/polyfill";

const app = config(express());

async function main() {
  await app.listen(app.get("port"));
  log(chalk.bgGreen.black("server on port ", app.get("port")));
}

main();
