import React from "react";

const Progres = (props) => {
    return (
      <div className="w-[100px] h-auto overflow-hidden rounded-md bg-gray-100">
        <span
          className={`flex items-center w-[${props.value}%] h-[8px]  
                ${props.type === "success" && "bg-green-600"}
                ${props.type === "warning" && "bg-orange-500"}
                ${props.type === "error" && "bg-pink-600"}`}
        ></span>
      </div>
    );   
}

export default Progres;