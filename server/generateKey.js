import crypto from "crypto";

// Tạo 64 bytes random và chuyển đổi sang chuỗi hex
const secretKey = crypto.randomBytes(64).toString("hex");

console.log("Secret Key:", secretKey);
