import TextField from '@mui/material/TextField';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';



const ForgotPass = () => {

    const context = useContext(MyContext);
    const history = useNavigate();

    const comformPass = () => {     
        context.openAlerBox("success", "Đã thay đổi mật khẩu")    
        history("/forgot-password");      
    }


    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);

    return (
        <>
        <section className="section py-10">
            <div className="container">
                <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
                    <h3 className='text-center text-[18px] font-[600] text-black'>
                        Quên mật khẩu
                    </h3>
                    
                    <form className='w-full mt-5'>
                        <div className='form-group w-full mb-5 relative'>
                            <TextField 
                                type={isShowPassword===false ? 'password' : 'text'}
                                id="password" 
                                label="Mật khẩu mới *" 
                                variant="outlined" 
                                className='w-full'
                                name='name'
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

                        <div className='form-group w-full mb-5 relative'>

                            <TextField 
                                type={isShowPassword2===false ? 'password' : 'text'}
                                id="conform_password" 
                                label="Nhập lại mật khẩu *" 
                                variant="outlined" 
                                className='w-full'
                                name='password'
                            /> 
                            <Button className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px]
                                !rounded-full !text-black'
                                onClick={()=>{setIsShowPassword2(!isShowPassword2)}}>

                                {
                                    isShowPassword2 === false ?  

                                    <IoEyeOff className='text-[20px] opacity-75'/>
                                    :
                                    <IoEye className='text-[20px] opacity-75'/>
                                }
                            </Button>
                        </div>
                        
                        <Link to="/login">
                            <div className='flex items-center w-full mt-3 mb-3'>
                                <Button className='btn-org btn-lg w-full'
                                    onClick={comformPass}>
                                    Thay đổi mật khẩu
                                </Button>
                            </div>
                        </Link>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
};

export default ForgotPass; 