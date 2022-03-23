const crypto = require("crypto")

const genKey1 = crypto.randomBytes(36).toString("hex");
const genKey2 = crypto.randomBytes(36).toString("hex");

console.table({genKey1, genKey2});