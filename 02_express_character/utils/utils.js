import fs from "node:fs";

const utils = {
  readFile(filePath) {
    try {
      return fs.readFileSync(filePath, "utf-8");
    } catch (err) {
      console.error(err);
    }
  },
  writeFile(filePath, data) {
    try {
      return fs.writeFileSync(filePath, JSON.stringify(data));
    } catch (err) {
      console.error(err);
      return err;
    }
  },
};

export default utils;
