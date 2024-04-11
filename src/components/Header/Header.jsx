import React, {useEffect, useState} from "react";
import styles from "./style.module.css";
import logo from "../../Reilverse_Assets/Logo.svg";
import download from "../../Reilverse_Assets/export-file 3.svg";
import {Link} from "react-router-dom";
import {MdOutlinePhoneInTalk} from "react-icons/md";
import {FiSearch} from "react-icons/fi";
import {LuMenu} from "react-icons/lu";
import phone from "../../Reilverse_Assets/phone.svg";

export default function Header() {

    const [isOpen,setOpen] = useState(false);
    const [languages,setLanguages] = useState(0)

    const NAV_LINKS = [
        {
            title: "Home",
            to : ''
        },
        {
            title: "About",
            to : ''
        },
        {
            title: "Locator",
            to : ''
        },
        {
            title: "Claim",
            to : ''
        },
    ]

    const [scrollCount,setScrollCount] = useState(0)

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollCount(position);
    };

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[scrollCount])

    return<>
        <div className={`${styles.container} `}>

            <div className={`${styles.wrapper} ${scrollCount>=1? `bg-gradient-to-b from-50% from-[#c3e45e]  to-100% to-transparent duration-300 ` : `bg-gradient-to-b from-transparent  to-transparent duration-300`} duration-300`}>

                <div className={'w-full max-[1150px]:px-5 max-[1440px]:px-[80px] max-w-[1400px] min-[1800px]:max-w-[1600px] flex items-center justify-between relative z-10'}>

                    {/*Logo*/}
                    <div className={styles.logo_wrapper}>
                        <img className={'w-fit max-w-[300px] h-7 max-[500px]:h-5 max-[1350px]:h-7 object-contain'} src={logo} alt={"Railverse Logo"}/>
                    </div>

                    <div className={styles.nav_links}>
                        {NAV_LINKS.map((value, index)=> <Link key={index} to={value.to} className={'text-[16px] tracking-[1px] font-[500]'} >{value.title}</Link>)}
                    </div>

                    <div className={'w-auto flex items-center max-[1150px]:hidden'}>

                        <div className={'w-auto h-16 rounded-xl border-2 border-green-950 flex items-center px-4 py-0'}>

                            <img className={'w-[30px] h-[30px] object-contain mr-2'} src={phone} alt={'phone'}/>
                            <div className={'flex flex-col items-end leading-4 '}>
                                <span className={'text-[14px] font-[500]'}>+91 11 4678 1000</span>
                                <span className={'font-[500] text-[7px]'}>24 Hours</span>
                            </div>

                        </div>

                        <div className={'p-2 rounded-full bg-[#c3e45e]/80 max-[1300px]:ml-4 ml-8  '}>
                            <FiSearch className={'text-3xl'} />
                        </div>

                        <div className={'w-auto px-4 py-2 rounded-2xl bg-white shadow flex items-center gap-3 max-[1300px]:ml-4 ml-8 '}>

                            <img className={'h-9 w-9 object-contain'} src={download} alt={'Download'}/>
                            <span className={'text-[14px] font-[500] text-green-700'}>Get Quote</span>

                        </div>

                        <div className={'flex items-center gap-1 ml-2 '}>

                            <div onClick={()=>setLanguages(0)} className={` ${languages===0?`bg-blue-500 text-white`:`bg-white`} duration-200 w-8 h-8 rounded-full flex justify-center items-center text-[12px]  cursor-pointer pt-1 `}>EN</div>
                            <div onClick={()=>setLanguages(1)} className={` ${languages===1?`bg-blue-500 text-white`:`bg-white`} duration-200 w-8 h-8 rounded-full flex justify-center items-center text-[12px] cursor-pointer pt-1`}>IND</div>

                        </div>

                    </div>

                    <div className={'flex items-center min-[1150px]:hidden gap-8'}>
                        <div className={'p-2 rounded-full bg-[#c3e45e]/80 max-[500px]:hidden  '}>
                            <FiSearch className={'text-3xl'} />
                        </div>

                        <div onClick={()=>setOpen(!isOpen)} className={'text-4xl text-green-900 max-[500px]:translate-y-1 '}>
                            <LuMenu />
                        </div>
                    </div>


                    <div className={` ${isOpen? `top-0` : `top-[-250vh]`} min-[1150px]:hidden pt-28 px-10 w-full h-screen bg-[#c3e45e] absolute left-0 duration-700 ease-in-out -z-10 flex flex-col items-end max-[500px]:items-center `}>

                        <div className={'p-2 min-[500px]:hidden rounded-full bg-[#c3e45e]/80   '}>
                            <FiSearch className={'text-3xl'} />
                        </div>

                        <div className={styles.nav_links_mob}>
                            {NAV_LINKS.map((value, index)=> <Link key={index} to={value.to} className={'text-[16px] tracking-[1px] font-semibold'} >{value.title}</Link>)}
                        </div>

                        <div className={'w-auto flex max-[500px]:flex-col  max-[500px]:gap-4 items-center '}>

                            <div className={'w-auto h-16 rounded-xl border-2 border-green-950 flex items-center px-4 py-0'}>

                                <MdOutlinePhoneInTalk className={'text-3xl'} />
                                <div className={'flex flex-col items-end leading-4 '}>
                                    <span className={'text-[14px] font-semibold'}>+91 11 4678 1000</span>
                                    <span className={'font-bold text-[7px]'}>24 Hours</span>
                                </div>

                            </div>

                            <div className={'w-auto px-4 py-2 rounded-2xl bg-white shadow flex items-center gap-3 min-[500px]:ml-8 '}>

                                <img className={'h-9 w-9 object-contain'} src={download} alt={'Download'}/>
                                <span className={'text-[14px] font-semibold text-green-700'}>Get Quote</span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </>
}