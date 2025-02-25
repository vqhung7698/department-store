

const Badge = (props) => {
    return (
        <span className={`inline-block p-1 px-4 rounded-full text-[11px] capitalize 
            ${ props.status === 'Chưa giải quyết' && 'bg-gray-400 text-white'}
            ${ props.status === 'Xác nhận' && 'bg-green-500 text-white'}  
            ${ props.status === 'Đang giao hàng' && 'bg-blue-500 text-white'} 
            ${ props.status === 'Đã giao hàng' && 'bg-primary text-white'} 
            `}>
            {props.status}
        </span>
    );
};

export default Badge; 