import crypto from "crypto";

// Tạo 64 bytes random và chuyển đổi sang chuỗi hex
const jsonWebTokenSecretKey = crypto.randomBytes(64).toString("hex");
const secretKeyAccessToken = crypto.randomBytes(64).toString("hex");
const secretKeyRefreshToken = crypto.randomBytes(64).toString("hex");
const adminToken = crypto.randomBytes(64).toString("hex");

console.log("JSON_WEB_TOKEN_SECRET_KEY:", jsonWebTokenSecretKey);
console.log("SECRET_KEY_ACCESS_TOKEN:", secretKeyAccessToken);
console.log("SECRET_KEY_REFRESH_TOKEN:", secretKeyRefreshToken);
console.log("Admin-Token:", adminToken);
