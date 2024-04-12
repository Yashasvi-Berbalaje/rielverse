import React, {useState} from "react";
import style from "./style.module.css";
import {CiSearch} from "react-icons/ci";
import Switcher from "../../components/Switcher/Switcher";
import {DatePicker, Select} from "antd";
import {Option} from "antd/es/mentions";
import input_logo from "../../Reilverse_Assets/input_logo.svg";
import "./style.css";
import {IoFemaleSharp, IoMale} from "react-icons/io5";

export default function Driver_info() {

    const [gender,setGender] = useState('male')

    const TAB_MENUS = [
        'Car',
        'Driver',
        'Insurance',
        'Quotes',
    ]


    return<>
        <div className={style.container}>
            <div className={'w-full max-[520px]:px-4 max-[1200px]:px-10 max-[1300px]:max-w-[1150px] max-w-[1200px] min-[1600px]:max-w-[1400px] min-[1800px]:max-w-[1600px] h-auto flex flex-col items-center pb-20'}>

                <div className={'flex items-center self-start gap-1 max-[450px]:flex-wrap '}>

                    {TAB_MENUS.map((value, index)=> <div className={'flex items-center  '}>

                        <div key={index} style={{fontFamily: 'Arboria-Medium',fontWeight:'400'}} className={style.tabs}>
                            {value}
                        </div>
                        <div className={` ${index===3? `hidden`:``} max-[500px]:hidden max-[1000px]:w-10 w-20 h-0.5 bg-white max-[600px]:mx-0.5 mx-3`}></div>
                    </div>)}

                </div>

                <div className={'w-full flex flex-col items-start bg-gradient-to-b from-white/70 to-white text-start mt-4 px-5 pt-3 rounded-t-xl'}>

                    <span className={'text-[36px] max-[500px]:text-[28px] font-[400] '}>What is your phone number ?</span>
                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[18px] max-[500px]:text-[14px] font-[400]  '}>Need Help ?</span>

                    <div className={'flex flex-col items-start mt-3'}>

                        <div className={'relative -translate-x-1 mt-2'}>
                            <CiSearch className={'text-[28px] absolute top-3 left-2 text-[#8DC14B]'} />
                            <input style={{fontFamily:"Arboria-Light",fontWeight:"400"}} placeholder={'Example : 080-8809 987'} className={' max-[500px]:w-[255px] w-[400px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#8DC14B]'}/>
                        </div>

                    </div>

                    <div className={'w-auto flex items-start gap-7 mt-7'}>

                        <div className={'flex flex-wrap gap-5 items-start max-w-[600px] '}>

                            <div className={'h-[130px] max-[500px]:h-auto justify-between flex flex-col items-start text-start'}>
                                <div className={'flex flex-col items-start '}>
                                    <span className={'text-[21px]'}>What is your first name ?</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-3'}>Need Help ?</span>
                                </div>
                                <input style={{fontFamily:"Arboria-Light",fontWeight:"400"}} placeholder={'First Name'} className={' max-[500px]:w-[190px] w-[260px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#8DC14B]'}/>
                            </div>

                            <div className={'h-[130px] max-[500px]:h-auto justify-between flex flex-col items-start text-start'}>
                                <div className={'flex flex-col items-start '}>
                                    <span className={'text-[21px]'}>What is your Last name ?</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-3'}>Need Help ?</span>
                                </div>
                                <input style={{fontFamily:"Arboria-Light",fontWeight:"400"}} placeholder={'Last Name'} className={' max-[500px]:w-[190px] w-[260px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#8DC14B]'}/>
                            </div>

                            <div className={'h-[130px] max-[500px]:h-auto justify-between flex flex-col items-start text-start'}>
                                <div className={'flex flex-col items-start '}>
                                    <span className={'text-[21px]'}>What is your email ?</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-3'}>Need Help ?</span>
                                </div>
                                <input style={{fontFamily:"Arboria-Light",fontWeight:"400"}} placeholder={'Ex : gmail.com'} className={' max-[500px]:w-[190px] w-[260px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#8DC14B]'}/>
                            </div>

                            <div className={'h-[130px] max-[500px]:h-auto justify-between flex flex-col items-start text-start'}>
                                <div className={'flex flex-col items-start '}>
                                    <span className={'text-[21px]'}>What is your gender ?</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-3'}>Need Help ?</span>
                                </div>
                                <div className={'relative'}>
                                    {
                                        gender==='male'? <IoMale className={'absolute text-4xl text-[#8DC14B] top-1.5 left-2 z-10 '} />:
                                            <IoFemaleSharp className={'absolute text-4xl text-[#8DC14B] top-1.5 left-2 z-10 '} />
                                    }


                                    <Select
                                        placeholder={'Male'}
                                        onChange={(value)=>setGender(value)}
                                        style={{ fontFamily: "Arboria-Light", fontWeight: "400" }}
                                        className={' max-[500px]:w-[180px] w-[200px] h-[50px] rounded-xl outline-0 border shadow-inner border-[#8DC14B]'}
                                        suffixIcon={<img src={input_logo} alt={'input logo'} className={'w-[24px] h-[18px] object-contain'}  />} // добавление иконки ввода
                                    >
                                        <Option value="male">Male</Option>
                                        <Option value="female">Female</Option>
                                    </Select>
                                </div>
                            </div>

                        </div>

                        <div className={'h-20 w-0.5 bg-[#8DC14B]'}></div>

                        <div className={'flex flex-col items-start text-start ml-7'}>

                            <div className={' max-w-[440px] h-auto justify-between flex flex-col items-start text-start'}>
                                <div className={'flex flex-col items-start '}>
                                    <span className={'text-[21px]'}>Do you allow us to contact you everyday include Sundays and holidays?</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-6'}>Need Help ?</span>
                                </div>
                                <Switcher first={'Yes'} second={'No'}/>
                            </div>

                            <div className={' max-w-[440px] h-auto justify-between flex flex-col items-start text-start mt-7'}>
                                <div className={'flex flex-col items-start '}>
                                    <span className={'text-[21px]'}>What is your date of birth ?</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-6'}>Need Help ?</span>
                                </div>
                                <DatePicker
                                    className={'outline-0 border border-[#8DC14B]'}
                                    onChange={(date, dateString)=>console.log(dateString)}
                                    format="YYYY-MM-DD"
                                    placeholder="DD / MM / YYYY"
                                />
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </div>
    </>
}