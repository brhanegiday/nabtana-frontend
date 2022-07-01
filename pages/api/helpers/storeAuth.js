import fs from "fs";

const logFilePath = process.cwd() + "/pages/api/auth-log/index.json";

export const logError = (key, message) => {
  try {
    const data = fs.readFileSync(logFilePath, "utf8");
    const jsonData = JSON.parse(data);
    jsonData[key] = message;
    fs.writeFileSync(logFilePath, JSON.stringify(jsonData, null, 2));
  } catch (e) {
    console.log(e);
  }
};

export const getError = (key) => {
  try {
    const data = fs.readFileSync(logFilePath, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData[key];
  } catch (e) {
    return "Error";
  }
};
