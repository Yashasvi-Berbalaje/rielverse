import React from "react";
import style from "./style.module.css";
import couple from "../../Reilverse_Assets/couple.svg";
import car from "../../Reilverse_Assets/Car.png";
import health from "../../Reilverse_Assets/health 2.png";
import smallbiz from "../../Reilverse_Assets/Small.png";
import industry from "../../Reilverse_Assets/industry (1) 1.png";

export default function First_section() {

    const CATEGORIES = [
        {
            card_image : car,
            card_title: "Motor",
            card_href:"",
            category: "Tuk Tuk",
            category_href : ""
        },
        {
            card_image : health,
            card_title: "Health",
            card_href:"",
            category: "Home",
            category_href : ""
        },
        {
            card_image : smallbiz,
            card_title: "Small biz",
            card_href:"",
            category: "Travel",
            category_href : ""
        },
        {
            card_image : industry,
            card_title: "Industry",
            card_href:"",
            category: "Life",
            category_href : ""
        },
    ]

    return<>
        <div className={'w-full flex justify-between items-start relative mt-5'}>

            <img src={couple} className={'w-[600px]  h-fit max-h-[500px] object-contain '}/>

            <div className={'w-full max-w-[1000px] flex flex-col items-end text-end '}>

                <span className={'min-[1800px]:text-[48px] text-[44px] font-semibold text-green-700 tracking-[0.2px]   '}>We Make Finding The Best Insurance Verse</span>
                <span className={'text-[24px] font-semibold text-green-950 mt-2'}>compare plans from top insurance companies</span>

                <div className={'w-full h-auto justify-between flex items-start mt-8'}>

                    {CATEGORIES.map((value, index)=> <div key={index} className={'w-44 h-56 flex flex-col justify-between text-center'}>

                        <div className={'w-full h-32  border-2 border-transparent  rounded-2xl duration-300 hover:border-dashed hover:border-[#c3e45e] cursor-pointer '}>
                            <div className={'w-full h-32 flex flex-col items-center pt-6 pb-4 rounded-2xl bg-white shadow border border-[#c3e45e] duration-300 hover:translate-y-2 hover:-translate-x-1 active:translate-y-0 active:translate-x-0'}>

                                <div className={'flex h-full justify-between flex-col items-center  '}>

                                    <img className={`w-fit ${index===0?`h-8 translate-y-4`:`h-14`} object-contain`} src={value.card_image} alt={'Car logo'}/>

                                    <span className={'text-xl font-semibold text-green-900'}>{value.card_title}</span>

                                </div>

                            </div>
                        </div>



                        <div className={'w-full h-14 flex justify-center items-center rounded-2xl bg-white shadow border border-[#c3e45e] cursor-pointer'}>
                            <span className={'text-xl font-semibold text-green-900'}>{value.category}</span>
                        </div>

                    </div>)}


                </div>

                <div className={'w-[450px] h-24 flex flex-col items-center self-center mt-16'}>

                    <div className={'w-full h-0.5 bg-[#c3e45e]'}></div>

                    <div className={'flex items-center my-4 gap-6'}>

                        <span className={'text-2xl font-semibold tracking-[0px]'}>Pickup where you left</span>

                        <div className={'flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#eaf755] to-[#8fc24c]'}>Older searches</div>

                    </div>

                    <div className={'w-full h-0.5 bg-[#c3e45e]'}></div>

                </div>

            </div>

        </div>
    </>
}