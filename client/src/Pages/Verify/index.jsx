import OtpBox from "../../components/OtpBox";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";


const Verify = () => {

    const [otpValue, setOtpValue] = useState("");

    const handleOtpSubmit = (otp) => {
        setOtpValue(otp);
    };
    
    const verifyOTP = (e) => {
        e.prevenDefault();
        alert(otp)
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
            
                    <p className="text-[14px] text-center mt-2 mb-3">Mã OTP sẽ gửi đến 
                        <span className="text-primary font-blod"> tham123@gmail.com</span>
                    </p>

                    <form onSubmit={verifyOTP}>
                        <OtpBox length={6} onChange={handleOtpSubmit} />
                        {otpValue && <p className="mt-4 text-black text-center">Mã OTP: {otpValue}</p>}
                        
                        <div className="mt-3 flex items-center justify-center">
                            <Link to="/forgot-password">
                                <Button type="submit" className="btn-org flex gap-2"> 
                                    OK
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Verify;