import React, {useState} from "react";

export default function CustomCheckbox({onClick,className}) {

    const [isActive,setActive] = useState(false);

    return<>
        <div onClick={onClick} className={` ${className? className : `max-[500px]:w-[25px] max-[500px]:h-[25px] w-[35px] h-[35px]`} rounded bg-[#8DC14B]/15 `}>
            <div onClick={()=>{setActive(!isActive)}} className={` w-full h-full p-[5px]`}>
                <div className={`${isActive?`opacity-100`:`opacity-0`} duration-200 w-full h-full rounded bg-[#8DC14B]`}></div>
            </div>
        </div>
    </>
}