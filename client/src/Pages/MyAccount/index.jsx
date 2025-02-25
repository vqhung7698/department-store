import Button  from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountSiderBar from '../../components/AccountSiderBar';

const MyAccount = () => {
    return (
        <section className="py-10 w-full">
            <div className="container flex gap-5">
                <div className="col1 w-[20%]">
                    <AccountSiderBar/>
                </div>

                <div className="col2 w-[55%]">
                    <div className="card bg-white p-5 shadow-md rounded-md">
                        <h2 className="text-[16px] font-[600] pb-3">Hồ sơ người dùng</h2>
                        <hr />

                        <form className="mt-5">
                            <div className="flex items-center gap-5">
                                <div className="w-[50%]">
                                    <TextField 
                                        label="Họ và Tên" 
                                        variant="outlined"
                                        size="small"
                                        className="w-full" />
                                </div>

                                <div className="w-[50%]">
                                    <TextField 
                                        label="Email" 
                                        variant="outlined"
                                        size="small"
                                        className="w-full" />
                                </div>
                            </div>

                            <div className="flex items-center mt-4 gap-5">
                                <div className="w-[50%]">
                                    <TextField 
                                        label="Số điện thoại" 
                                        variant="outlined"
                                        size="small"
                                        className="w-full" />
                                </div>
                            </div>
                            <br />

                            <div className="flex items-center gap-4">
                                <Button className="btn-org btn-lg w-[100px]">Lưu</Button>
                                <Button className="btn-org btn-border btn-lg w-[100px]">Hủy</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyAccount; 