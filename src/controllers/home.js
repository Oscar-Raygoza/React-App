import path from "path";

const ctrl = {};

ctrl.index = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
};

module.exports = ctrl;
