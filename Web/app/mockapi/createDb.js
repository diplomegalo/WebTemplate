const fs = require("fs");
const path = require("path");
const mockData = require("./wine-data.json")

const { appellations, vineyards, wines } = mockData;
const data = JSON.stringify({ appellations, vineyards, wines });
const filePath = path.join(__dirname, "db.json");

fs.writeFile(filePath, data, err => err ? console.log(err) : console.log("Mock db created"));