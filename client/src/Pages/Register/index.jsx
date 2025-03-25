import TextField from '@mui/material/TextField';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { postData } from '../../utils/api';
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        password: ""
    })

    const context = useContext(MyContext);
    const history = useNavigate();

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

        if(formFields.name==="") {
            context.alertBox("error", "Vui lòng nhập Họ Tên")
            return false;
        }

        if(formFields.email==="") {
            context.alertBox("error", "Vui lòng nhập Email của bạn")
            return false
        }

        if(formFields.password==="") {
            context.alertBox("error", "Vui lòng nhập Mật khẩu")
            return false
        }

        postData("/api/user/register", formFields).then((res)=>{
            console.log(res)

            if(res?.error !== true) {
                setIsLoading(false);
                context.alertBox ("success", res?.message);
                localStorage.setItem("userEmail", formFields.email)
                setFormFields({
                    name: "",
                    email: "",
                    password: ""
                })
                history("/verify")
            }else {
                context.alertBox ("error", res?.message);
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
                        Đăng ký tài khoản
                    </h3>
                    
                    <form className='w-full mt-5' onSubmit={handleSubmit}>
                        <div className='form-group w-full mb-5'>
                            <TextField 
                                type='text'
                                id="name" 
                                name='name'
                                value={formFields.name}
                                disabled={isLoading===true ? true : false}
                                label="Họ Tên *" 
                                variant="outlined" 
                                className='w-full'
                                onChange={onChangeInput}
                            /> 
                        </div>

                        <div className='form-group w-full mb-5'>
                            <TextField 
                                type='email'
                                id="email" 
                                value={formFields.email}
                                disabled={isLoading===true ? true : false}
                                name='email'
                                label="Email của bạn *" 
                                variant="outlined" 
                                className='w-full'
                                onChange={onChangeInput}
                            /> 
                        </div>

                        <div className='form-group w-full mb-5 relative'>
                            <TextField 
                                type={isShowPassword===false ? 'password' : 'text'}
                                id="password" 
                                name='password'
                                value={formFields.password}
                                disabled={isLoading===true ? true : false}
                                label="Mật khẩu *" 
                                variant="outlined" 
                                className='w-full'
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

                        <div className='flex items-center w-full mt-5 mb-4'>
                            <Button type="submit" disabled={!valideValue}
                            className='btn-org btn-lg w-full flex gap-3'>

                            {
                                isLoading === true ? <CircularProgress color='inherit' />
                                :
                                'Đăng ký'
                            }

                            </Button>
                        </div>

                        <div className='flex items-center justify-center'>
                            <p className='text-[10px]'>Bằng việc đăng kí, bạn đã đồng ý với ClassyShope về 
                                <br />
                                <p className='text-center mt-1'>
                                    <Link className='link'>
                                        <span className='text-primary'>Điều khoản dịch vụ</span>
                                    </Link> & <Link className='link'>
                                        <span className='text-primary'>Chính sách bảo mật</span> 
                                    </Link>
                                </p>
                            </p>
                        </div>

                        <p className='text-[14px] font-[400] text-center mt-2'>Bạn đã có tài khoản ?
                            <Link className='link text-[14px] font-[600] text-primary' to="/login"> Đăng nhập</Link>
                        </p>

                        <div className="flex items-center justify-center my-2">
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

export default Register; 