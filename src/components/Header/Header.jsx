import React, {useEffect, useState} from "react";
import styles from "./style.module.css";
import logo from "../../Reilverse_Assets/Logo.png";
import download from "../../Reilverse_Assets/export-file 3.png";
import {Link} from "react-router-dom";
import {MdOutlinePhoneInTalk} from "react-icons/md";
import {FiSearch} from "react-icons/fi";

export default function Header() {

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

            <div className={`${styles.wrapper} ${scrollCount>=1? `bg-gradient-to-b from-[#c3e45e] to-transparent duration-300 ` : `bg-gradient-to-b from-transparent to-90% to-transparent duration-300`} duration-300`}>

                <div className={'w-full max-[1300px]:px-5 max-w-[1400px] flex items-center justify-center relative'}>

                    {/*Logo*/}
                    <div className={styles.logo_wrapper}>
                        <img className={'w-fit max-w-[365px] h-10 object-contain'} src={logo} alt={"Railverse Logo"}/>
                    </div>

                    <div className={styles.nav_links}>
                        {NAV_LINKS.map((value, index)=> <Link key={index} to={value.to} className={'text-[24px] font-semibold'} >{value.title}</Link>)}
                    </div>

                    <div className={'w-auto h-16 rounded-xl border-2 border-green-950 flex items-center px-4 py-0'}>

                        <MdOutlinePhoneInTalk className={'text-3xl'} />
                        <div className={'flex flex-col items-end leading-4 '}>
                            <span className={'text-lg font-semibold'}>+91 11 4678 1000</span>
                            <span className={'font-bold text-xs'}>24 Hours</span>
                        </div>

                    </div>

                    <div className={'p-2 rounded-full bg-[#c3e45e]/80 ml-8  '}>
                        <FiSearch className={'text-3xl'} />
                    </div>

                    <div className={'w-auto px-4 py-2 rounded-2xl bg-white shadow flex items-center gap-3 ml-8 '}>

                        <img className={'h-9 w-9 object-contain'} src={download} alt={'Download'}/>
                        <span className={'text-lg font-semibold text-green-700'}>Get Quote</span>

                    </div>

                </div>

            </div>

        </div>
    </>
}