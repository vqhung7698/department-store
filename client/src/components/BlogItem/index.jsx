import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

const BlogItem = () => {
    return (
        <div className="blogItem group">
            <div className="imgWrapper w-full overflow-hidden rouded-md cursor-pointer relative">
                <img src="https://bizweb.dktcdn.net/thumb/large/100/502/483/articles/4.jpg?v=1702890594263" 
                className="w-full transition-all group-hover:scale-105 group-hover:rotate-1" 
                alt="blog image"/>

                <span className="flex items-center justify-center text-white absolute bottom-[15px]
                right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1">
                    <IoMdTime className="text-[16px]"/> 18/12/2023
                </span>
            </div>

            <div className="info py-4">
                <h2 className="text-[16px] font-[600] text-black">Lenovo ra mắt laptop Xiaoxin Pro AI 2024: IdeaPad 5 Pro năm sau đây rồi? Chạy chip Core Ultra siêu khỏe</h2>
                <p className="text-[13px] font-[400] text-[rbga(0,0,0,0.8)] mb-1">Với sức mạnh mới cùng sự trợ giúp từ AI, con chip mới của đội Xanh hứa hẹn sẽ giúp sản phẩm này có được...</p>
            </div>

            <Link className="link font-[500] text-[16px] flex items-center gap-1">Xem chi tiết<MdArrowForwardIos className="text-[13px]"/></Link>
        </div>
    );
};

export default BlogItem; 