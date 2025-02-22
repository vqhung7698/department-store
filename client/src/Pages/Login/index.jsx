import TextField from '@mui/material/TextField';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <>
        <section className="section py-10">
            <div className="container">
                <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
                    <h3 className='text-center text-[18px] font-[600] text-black'>
                        Đăng nhập tài khoản
                    </h3>
                    
                    <form className='w-full mt-5'>
                        <div className='form-group w-full mb-5'>
                            <TextField 
                                type='email'
                                id="email" 
                                label="Email Id *" 
                                variant="outlined" 
                                className='w-full'
                            /> 
                        </div>

                        <div className='form-group w-full mb-5 relative'>

                            <TextField 
                                type={isShowPassword===false ? 'password' : 'text'}
                                id="password" 
                                label="Password *" 
                                variant="outlined" 
                                className='w-full'
                            /> 
                            <Button className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px]
                                !rounded-full !text-black'
                                onClick={()=>{setIsShowPassword(!isShowPassword)}}>

                                {
                                    isShowPassword === false ?  

                                    <IoEyeOff className='text-[20px] opacity-75'/>
                                    :
                                    <IoEye className='text-[20px] opacity-75'/>
                                }
                            </Button>
                        </div>

                        <a className='link cursor-pointer text-[14px] font-[600]'>
                            Quên mật khẩu?
                        </a>

                        <div className='flex items-center w-full mt-3 mb-3'>
                            <Button className='btn-org btn-lg w-full'>Đăng Nhập</Button>
                        </div>

                        <p className='text-[14px] font-[400] text-center'>Chưa đăng ký ?
                            <Link className='link text-[14px] font-[600] text-primary' to="/register"> Đăng ký</Link>
                        </p>

                        <p className='text-[14px] font-[400] text-center mt-3 mb-3'>Hoặc</p>

                        <Button className='flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black'>
                            <FcGoogle className='text-[20px]'/>
                            Đăng nhập với Google
                        </Button>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
};

export default Login; 