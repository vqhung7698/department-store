import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const BannerBox1 = (props) => {
    return (
        <div className="bannerBox1 w-full overflow-hidden rounded-md group relative">
            <img src={props.image}
            className="w-full transition-all duration-150 group-hover:scale-105"/>

            <div className={`info absolute p-5 top-0 ${props.info==="right" ? 'left-0' : 'right-0'} 
                w-[60%] h-[100%] z-50 flex items-center justify-center flex-col gap-2`}>

                <h2 className="text-[20px] font-[600]">
                    {props.title}
                </h2>

                <span className="text-[25px] font-[600] text-primary">
                    {props.price}
                </span>

                <div className="w-ful text-[16px] font-[600]">
                    <Link to="/" className="link">show now</Link>
                </div>

                {/* <Link to="/" className="link">
                    <div className="w-ful text-[16px] font-[600]">
                        <Button className='btn-org'>Show now</Button>
                    </div>
                </Link> */}
            </div>
        </div>
    );
};

export default BannerBox1; 