import MyListItem from "./MyListItem";
import AccountSiderBar from "../../components/AccountSiderBar";

const MyList = () => {

    return (
        <section className="py-10 w-full">
            <div className="container flex gap-5">
                <div className="col1 w-[20%]">
                    <AccountSiderBar/>
                </div>

                <div className="col2 w-[60%]">
                    <div className="shadow-md rounded-md bg-white">
                        <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.2)]">
                            <h2 className="text-[20px] font-[600]"> Danh sách yêu thích </h2>
                            <p className="text-[16px] font-[500] mt-2 mb-3"> 
                                 Có <span className="font-blod text-primary">4</span> sản phẩm trong danh sách yêu thích
                             </p>
                        </div>

                        <MyListItem/>
                        <MyListItem/>
                        <MyListItem/>
                        <MyListItem/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyList; 