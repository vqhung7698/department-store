import { useState, useRef } from "react";

const OtpBox = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  // Xử lý khi nhập dữ liệu vào ô input
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Chỉ chấp nhận số

    let newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Chỉ lấy số cuối
    setOtp(newOtp);
    onChange(newOtp.join(""));

    // Tự động chuyển sang ô tiếp theo
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Xử lý khi nhấn Backspace
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="otpBox" style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          style={{
            width: "45px",
            height: "45px",
            textAlign: "center",
            fontSize: "17px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      ))}
    </div>
  );
};

export default OtpBox;
