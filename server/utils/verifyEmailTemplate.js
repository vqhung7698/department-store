const VerificationEmail = (username, otp) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Xác Thực Tài Khoản - Dahu</title>
  <style>
    body {
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }
    .container {
      background-color: #ffffff;
      width: 100%;
      max-width: 600px;
      margin: 40px auto;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .header h1{
      color: #4caf50
    }
    .content {
      text-align: center;
    }
    .content p {
      font-size: 16px
      line-height: 1.5;
    } 
    .otp {
      font-size:20px;
      font-weight: bold;
      color: #4caf50;
      margin: 20px 0;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #999999;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header>
      <h1>Xác Thực Tài Khoản</h1>
    </div>
    
    <div class="content">
      <p>Chào ${username},</p>
      <p>Cảm ơn bạn đã đăng ký tài khoản tại Dahu. 
      Để hoàn tất quá trình đăng ký, 
      vui lòng xác thực email của bạn bằng cách sử dụng mã OTP bên dưới</p>
      
      <div class="otp">${otp}</div>

      <p>Nếu bạn không đăng ký tài khoản tại Dahu, vui lòng bỏ qua email này.</p>

    </div>
    <div class="footer">
      <p>&copy; 2025 Cửa Hàng Dahu. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;
};

export default VerificationEmail;
