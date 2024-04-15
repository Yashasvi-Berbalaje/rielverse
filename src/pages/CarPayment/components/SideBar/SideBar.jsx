import React, {useState} from "react";
import insurance from "../../../../Reilverse_Assets/forte.png";

export default function SideBar() {

    const [activeType,setType] = useState(0);
    const [activeAmount,setAmount] = useState(0);
    const [activeDriver,setDriver] = useState(0);
    const [activeRepair,setRepair] = useState(0);
    const [activeService,setService] = useState(0);
    const [activeDashCam,setDashCam] = useState(0);

    const TYPES = [
        {
            name: "Type 1 "
        },
        {
            name: "Type 2+ "
        },
        {
            name: "Type 3 "
        },
        {
            name: "Type 3 "
        },
    ]
    const AMOUNT = [
        {
            name: "No deductible "
        },
        {
            name: "With deductible "
        },
    ]

    const DRIVERS = [
        {
            name: "Unlimited "
        },
        {
            name: "1-2 drivers "
        },
    ]

    const REPAIR = [
        {
            name: "Dealer "
        },
        {
            name: "Garage"
        },
        {
            name: "Executive Care"
        },
    ]

    const SERVICES = [
        {
            name: "Fire/Theft "
        },
        {
            name: "Flood coverage"
        },
        {
            name: "Terrorism"
        },
        {
            name: "Free towing"
        },
    ]

    const DASHBOARD_CAM = [
        {
            name: "Yes"
        },
        {
            name: "No"
        },
    ]

    return<>
        <div style={{fontFamily:"Arboria-Medium"}} className={'w-[300px] h-auto rounded-t-xl bg-gradient-to-b from-[#8DC14B] to-transparent p-[1px] '}>

            <div className={'flex flex-col items-start p-4 bg-white rounded-t-xl'}>

                <span className={'text-[14px] '}>My car details</span>

                <div className={'w-[188px] h-10 rounded-lg border border-[#8DC14B] mt-3 flex flex-col items-start pl-1.5 pt-1 relative'}>

                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[9px]'}>TOYOTA 4RUNNER 3.0</span>
                    <span className={'text-[12px] text-[#8DC14B]'}>TOYOTA 4RUNNER 3.0</span>

                </div>

                <div className={'w-[160px] h-[1px] ml-1 bg-gray-200 mt-5'}></div>

                <div className={'flex flex-col items-start mt-5 '}>

                    <span className={'text-[16px]'}>My Plan Preferences</span>

                    <p style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px]'}>Coverage <span className={'text-[#8DC14B]'}>?</span> </p>

                    <div className={'flex items-start flex-wrap gap-4 mt-2 '}>

                        {TYPES.map((value, index)=> <div key={index} onClick={()=>setType(index)} className={` ${activeType===index? `border-[#8DC14B] text-[#8DC14B]` : `border-[#3E3E3E]`} duration-200 w-[70px] h-[25px] cursor-pointer rounded border flex items-center justify-center text-[9px]`}>{value.name}</div>)}

                    </div>

                    <p style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] mt-5'}>Provider <span className={'text-[#8DC14B]'}>?</span> </p>

                    <div className={'w-[130px] h-[34px] rounded border border-[#8DC14B] flex justify-center mt-2'}>
                        <img src={insurance} className={'w-fit h-full object-contain'}/>
                    </div>

                    <p style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] mt-5'}>Deductible Amount <span className={'text-[#8DC14B]'}>?</span> </p>

                    <div className={'flex flex-wrap items-start gap-4 mt-2'}>
                        {AMOUNT.map((value, index)=> <div key={index} onClick={()=>setAmount(index)} className={` ${activeAmount===index? `border-[#8DC14B] text-[#8DC14B]` : `border-[#3E3E3E]`} cursor-pointer duration-200 w-[94px] h-[25px] rounded border flex items-center justify-center text-[9px] `}>{value.name}</div>)}
                    </div>

                    <p style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] mt-5'}>No. of Drivers <span className={'text-[#8DC14B]'}>?</span> </p>

                    <div className={'flex flex-wrap items-start gap-4 mt-2'}>
                        {DRIVERS.map((value, index)=> <div key={index} onClick={()=>setDriver(index)} className={` ${activeDriver===index? `border-[#8DC14B] text-[#8DC14B]` : `border-[#3E3E3E]`} cursor-pointer duration-200 w-[94px] h-[25px] rounded border flex items-center justify-center text-[9px] `}>{value.name}</div>)}
                    </div>

                    <p style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] mt-5'}>Repair Type <span className={'text-[#8DC14B]'}>?</span> </p>

                    <div className={'flex flex-wrap items-start gap-4 mt-2'}>
                        {REPAIR.map((value, index)=> <div key={index} onClick={()=>setRepair(index)} className={` ${activeRepair===index? `border-[#8DC14B] text-[#8DC14B]` : `border-[#3E3E3E]`} cursor-pointer duration-200 w-[94px] h-[25px] rounded border flex items-center justify-center text-[9px] `}>{value.name}</div>)}
                    </div>

                    <p style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] mt-5'}>Services & Extras <span className={'text-[#8DC14B]'}>?</span> </p>

                    <div className={'flex flex-wrap items-start gap-4 mt-2'}>
                        {SERVICES.map((value, index)=> <div key={index} onClick={()=>setService(index)} className={` ${activeService===index? `border-[#8DC14B] text-[#8DC14B]` : `border-[#3E3E3E]`} cursor-pointer duration-200 w-[94px] h-[25px] rounded border flex items-center justify-center text-[9px] `}>{value.name}</div>)}
                    </div>

                    <p style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] mt-5'}>Dashboard CAM discount <span className={'text-[#8DC14B]'}>?</span> </p>

                    <div className={'flex flex-wrap items-start gap-4 mt-2'}>
                        {DASHBOARD_CAM.map((value, index)=> <div key={index} onClick={()=>setDashCam(index)} className={` ${activeDashCam===index? `border-[#8DC14B] text-[#8DC14B]` : `border-[#3E3E3E]`} cursor-pointer duration-200 w-[94px] h-[25px] rounded border flex items-center justify-center text-[9px] `}>{value.name}</div>)}
                    </div>

                </div>

            </div>

        </div>
    </>
}