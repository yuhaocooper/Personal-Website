const dotenv = require("dotenv");
dotenv.config({
    path: "./.env",
  });

const environment = process.env.environment
const apiBaseUrl = process.env.apiBaseUrl 

console.log(`http${environment}`)