import OtpBox from "../../components/OtpBox";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/api";
import { MyContext } from "../../App";


const Verify = () => {

    const [otp, setOtp] = useState("");
    const handleOtpChange = (value) => {
        setOtp(value);
    };

    const history = useNavigate();
    const context = useContext(MyContext);

    // Đăng ký và xác thực email
    const verifyOTP = (e) => {
        e.preventDefault();

        const actionType = localStorage.getItem("actionType");

        if (actionType!=="forgot-password") {

            postData("/api/user/verifyEmail", {
                email: localStorage.getItem("userEmail"),
                otp: otp
            }).then((res) => {
                if(res?.error === false) {
                    context.alertBox("success", res?.message);
                    localStorage.removeItem("userEmail");
                    history("/login")
                }else {
                    context.alertBox("error", res?.message);
                }
            })

        }
        else {
            postData("/api/user/verifyOtpForgotPassword", {
                email: localStorage.getItem("userEmail"),    
                otp: otp        
            }).then((res) => {
                if(res?.error === false) {
                    context.alertBox("success", res?.message);
                    history("/forgot-password")
                }else {
                    context.alertBox("error", res?.message);
                }
            })
        }
    }

    return (
        <section className="section py-10"> 
            <div className="container">
                <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
                    <div className="flex items-center justify-center">
                        <img src="/verify2.png" width="80px"/>
                    </div>
                    <h3 className="text-center text-[18px] font-[600] text-black mt-4 mb-4">
                        Xác minh OTP
                    </h3>
            
                    <p className="text-[14px] text-center mt-2 mb-3">
                        Mã OTP sẽ gửi đến <span className="text-primary font-bold">{localStorage.getItem("userEmail")}</span>
                    </p>

                    <form onSubmit={verifyOTP}>
                        <OtpBox length={6} onChange={handleOtpChange} />
                        {otp && <p className="mt-4 text-black text-center">Mã OTP: {otp}</p>}
                        
                        <div className="mt-3 flex items-center justify-center">
                            <Button type="submit" className="btn-org flex gap-2"> 
                                OK
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Verify;