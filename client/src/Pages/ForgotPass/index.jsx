import TextField from '@mui/material/TextField';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../../utils/api';


const ForgotPass = () => {

    const context = useContext(MyContext);
    // const history = useNavigate();

    // const comformPass = () => {     
    //     context.alerBox("success", "Đã thay đổi mật khẩu")    
    //     history("/forgot-password");      
    // }

    const [isLoading, setIsLoading] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);
    const [formFields, setFormFields] = useState({
        email:localStorage.getItem("userEmail"),
        newPassword: "",
        confirmPassword: ""
    })

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

        if(formFields.newPassword==="") {
            context.alerBox("error", "Vui lòng nhập mật khẩu mới");
            setIsLoading(false);
            return false
        }

        if(formFields.confirmPassword==="") {
            context.alerBox("error", "Vui lòng nhập lại mật khẩu");
            setIsLoading(false);
            return false
        }

        if(formFields.confirmPassword !== formFields.newPassword) {
            context.alerBox("error", "Mật khẩu không trùng khớp");
            setIsLoading(false);
            return false
        }

        postData(`/api/user/resetPassword`, formFields).then((res) => {
            console.log(res)
            if(res?.error=== false) {
                localStorage.removeItem("userEmail")
                localStorage.removeItem("actionType")
                context.alerBox("success", res?.message); 
                setIsLoading(false);
                history("/login")
            }
            else {
                context.alerBox("error", res?.message); 
            }
        })
    }

    return (
        <>
        <section className="section py-10">
            <div className="container">
                <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
                    <h3 className='text-center text-[18px] font-[600] text-black'>
                        Quên mật khẩu
                    </h3>
                    
                    <form className='w-full mt-5' onSubmit={handleSubmit}>
                        <div className='form-group w-full mb-5 relative'>
                            <TextField 
                                type={isShowPassword===false ? 'password' : 'text'}
                                id="password" 
                                label="Mật khẩu mới *" 
                                variant="outlined" 
                                className='w-full'
                                name='newPassword'
                                value={formFields.newPassword}
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

                        <div className='form-group w-full mb-5 relative'>

                            <TextField 
                                type={isShowPassword2===false ? 'password' : 'text'}
                                id="conform_password" 
                                label="Nhập lại mật khẩu *" 
                                variant="outlined" 
                                className='w-full'
                                name='confirmPassword'
                                value={formFields.confirmPassword}
                                disabled={isLoading===true ? true : false}
                                onChange={onChangeInput}
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
                        
                        <div className='flex items-center w-full mt-5 mb-4'>
                            <Button type="submit" disabled={!valideValue}
                            className='btn-org btn-lg w-full flex gap-3'>

                            {
                                isLoading === true ? <CircularProgress color='inherit' />
                                :
                                'Thay đổi mật khẩu'
                            }

                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
};

export default ForgotPass; 