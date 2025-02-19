import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from "react-icons/io5";
import CategogyCollapse from '../../CategogyCollapse';


const CategoryPanel = (props) => {
    
    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCatPanel(newOpen)
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
            <h3 className='p-3 text-[18px] font-[500] flex items-center justify-between'>
                Danh mục mua sắm
                <IoCloseSharp onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]'/>
            </h3>

            <CategogyCollapse/>
          
        </Box>
    );

    return (
        <>
            <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    );
};

export default CategoryPanel;
