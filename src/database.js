import mongoose from "mongoose";
import { database } from "./keys";

import chalk from "chalk";
const log = console.log;

mongoose
  .connect(database.URI, {
    useNewUrlParser: true
  })
  .then(db => {
    log(chalk.bgGreen.black("DB Connect"));
  })
  .catch(err => {
    log(chalk.bgRed(err));
  });
