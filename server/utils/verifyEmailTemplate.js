const VerificationEmail = (username, otp) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Xác Thực Tài Khoản - Dahu</title>
  <style type="text/css">
    /* Các style cơ bản cho email */
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
    h1 {
      color: #333333;
      text-align: center;
    }
    p {
      color: #555555;
      line-height: 1.5;
      margin: 15px 0;
    }
    .button {
      display: block;
      width: 200px;
      margin: 20px auto;
      background-color: #28a745;
      color: #ffffff;
      text-align: center;
      padding: 10px 0;
      text-decoration: none;
      border-radius: 3px;
      font-weight: bold;
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
    <h1>Xác Thực Tài Khoản</h1>
    <p>Chào bạn,</p>
    <p>Cảm ơn bạn đã đăng ký tài khoản tại Dahu. Để hoàn tất quá trình đăng ký, vui lòng xác thực email của bạn bằng cách nhấn vào nút bên dưới:</p>
    <a class="button" href="{{verification_link}}">Xác Thực Ngay</a>
    <p>Nếu bạn không đăng ký tài khoản tại Dahu, vui lòng bỏ qua email này.</p>
    <div class="footer">
      <p>&copy; 2025 Dahu. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;
};

export default VerificationEmail;
