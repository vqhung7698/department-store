import TextField from '@mui/material/TextField';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { MyContext } from '../../App';
import { postData } from '../../utils/api';
import CircularProgress from '@mui/material/CircularProgress';



const Login = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [formFields, setFormFields] = useState({
        email: "",
        password: ""
    })

    const context = useContext(MyContext);
    const history = useNavigate();

    const forgotPass = () => {     
        if(formFields.email==="") {
            context.alertBox ("error", "Vui lòng nhập Email của bạn");
            return false;
        }else {
            context.alertBox ("success", `Đã gửi mã OTP đến ${formFields.email}`);
            localStorage.setItem("userEmail", formFields.email);
            localStorage.setItem("actionType", 'forgotPassword');
            // localStorage.setItem("actionType", 'forgot-password');

            postData("/api/user/forgotPassword", {
                email: formFields.email,
            }).then((res) => {
                if(res?.error === false) {
                    context.alertBox ("success", res?.message);                   
                    history("/verify")
                }else {
                    context.alertBox ("error", res?.message);
                }
            })
        }            
    }

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        })
    } 

    const valideValue = Object.values(formFields).every(el => el)

    const handleSubmit = (e) => {

        e.preventDefault();

        setIsLoading(true);

        if(formFields.email==="") {
            context.alertBox("error", "Vui lòng nhập Email của bạn")
            return false
        }

        if(formFields.password==="") {
            context.alertBox("error", "Vui lòng nhập Mật khẩu")
            return false
        }

        postData("/api/user/login", formFields, {withCredentials: true}).then((res)=>{
            console.log(res)

            if(res?.error !== true) {
              setIsLoading(false);
              context.alertBox("success", res?.message);
              setFormFields({
                email: "",
                password: "",
              });
            //   localStorage.setItem("accessToken", res?.data?.accesstoken);
              localStorage.setItem("accessToken", res?.data?.accessToken); // Chữ T hoa
              localStorage.setItem("refreshToken", res?.data?.refreshToken);

              context.setIsLogin(true);

              history("/");
            }else {
                context.alertBox("error", res?.message);
                setIsLoading(false);
            }
            
        })
    }

    return (
        <>
        <section className="section py-10">
            <div className="container">
                <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
                    <h3 className='text-center text-[18px] font-[600] text-black'>
                        Đăng nhập tài khoản
                    </h3>
                    
                    <form className='w-full mt-5' onSubmit={handleSubmit}>
                        <div className='form-group w-full mb-5'>
                            <TextField 
                                type='email'
                                id="email" 
                                name='email'
                                value={formFields.email}
                                disabled={isLoading===true ? true : false}
                                label="Email Id *" 
                                variant="outlined" 
                                className='w-full'
                                onChange={onChangeInput}
                            /> 
                        </div>

                        <div className='form-group w-full mb-5 relative'>

                            <TextField 
                                type={isShowPassword===false ? 'password' : 'text'}
                                id="password" 
                                label="Password *" 
                                variant="outlined" 
                                className='w-full'
                                name='password'
                                value={formFields.password}
                                disabled={isLoading===true ? true : false}
                                onChange={onChangeInput}
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

                        <a className='link cursor-pointer text-[14px] font-[600]' 
                            onClick={forgotPass}>
                            Quên mật khẩu?
                        </a>

                        <div className='flex items-center w-full mt-5 mb-4'>
                            <Button type="submit" disabled={!valideValue}
                            className='btn-org btn-lg w-full flex gap-3'>

                            {
                                isLoading === true ? <CircularProgress color='inherit' />
                                :
                                'Đăng nhập'
                            }

                            </Button>
                        </div>

                        <p className='text-[14px] font-[400] text-center'>Bạn mới biết đến ClassyShop ?
                            <Link className='link text-[14px] font-[600] text-primary' to="/register"> Đăng ký</Link>
                        </p>

                        <div className="flex items-center justify-center my-4">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <p className='text-[14px] font-[400] text-[rgba(162,162,162)] text-center'>Hoặc</p>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <Button className='flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                                className="text-[14px] font-[600] w-5 h-5 mr-2" />
                                Facebook
                            </Button>
                            <Button className='flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black'>
                                <FcGoogle className="text-[14px] font-[600] w-5 h-5 mr-2" />
                                Google
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
};

export default Login; 