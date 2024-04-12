import React from "react";
import style from "./style.module.css";
import First_section from "../../sections/first_section/First_section";
import Second_section from "../../sections/second_section/Second_section";

import green_layer from "../../Reilverse_Assets/Frame 3 (1).svg";
import {IoIosArrowForward, IoLogoInstagram} from "react-icons/io";
import logo from "../../Reilverse_Assets/Logo.svg";
import phone from "../../Reilverse_Assets/Group.svg";
import secure from "../../Reilverse_Assets/secure.png";
import comodo from "../../Reilverse_Assets/image 63345987.svg";
import mcaffe from "../../Reilverse_Assets/image 63345988.png";
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

export default function Home() {


    return<>
        <div className={style.container}>

            <div className={style.content_wrapper}>

                {/*First Layer*/}
                <First_section/>

                {/*Second Section*/}
                <Second_section/>


                <div className={'w-full max-[800px]:px-2 max-[1440px]:px-6 flex flex-col items-center mt-20'}>

                    <div data-aos="zoom-out-up" className={'w-full max-[630px]:w-full max-[630px]:h-28 max-[850px]:w-[600px] max-[850px]:h-44 max-[1200px]:w-[800px] max-[1200px]:h-60 min-[1880px]:max-w-[1400px] max-w-[1190px] h-80 rounded-2xl flex flex-col items-end justify-center max-[630px]:px-4 max-[850px]:px-16 px-28 relative'}>
                        <img className={'w-full h-full object-fill absolute top-0 left-0 -z-0'} src={green_layer}/>
                        <div className={'overflow-hidden z-0 w-80 h-20 max-[630px]:w-28 max-[630px]:h-12 max-[850px]:w-44 max-[850px]:h-14 max-[1200px]:w-52 max-[1200px]:h-16 flex pl-7 max-[630px]:text-start items-center rounded-2xl max-[630px]:text-[16px] max-[850px]:text-xl text-[24px] text-white font-semibold bg-green-600 bg-gradient-to-tl from-[#93c347] to-[#b8cf29] relative'}>
                            <span className={'font-[400] max-[630px]:-translate-x-3'}>Get Quote</span>
                            <IoIosArrowForward className={'text-[250px] absolute -right-8 max-[630px]:-right-12 max-[630px]:text-[150px] max-[850px]:text-[200px] max-[850px]:-right-14 max-[1200px]:-right-16 opacity-40'} />
                        </div>

                    </div>

                    <div className={'flex flex-col items-center mt-24'}>

                        <img data-aos="zoom-out-up" className={'w-fit h-10 object-containe'} src={logo} alt={"Railverse Logo"}/>

                        <p style={{fontWeight:"400",fontFamily : "Arboria-Book"}} data-aos="zoom-out-up" className={'text-2xl mt-4 opacity-75'}>Powered by Worldbridge Insurance Broker</p>
                        <p style={{fontWeight:"400",fontFamily : "Arboria-Book"}} data-aos="zoom-out-up" className={'text-xl mt-4 opacity-75'}>#10, 150 South Bridge Rd, #04 Fook Hai Building, Singapore 058727</p>

                    </div>

                </div>

            </div>

            <div className={'w-full h-0.5 bg-gray-200/70 mt-32'}></div>

            <div className={'w-full flex max-[650px]:flex-col max-[650px]:gap-4 items-center justify-between max-[650px]:-translate-y-[50px] -translate-y-12 pl-32 max-[730px]:px-4 max-[1200px]:pr-10 max-[1200px]:pl-20 min-[1800px]:pl-80 pr-16'}>

                <div data-aos="fade-right" className={'flex flex-col max-[650px]:items-center relative'}>
                    <div className={'absolute -top-14 flex items-center max-[650px]:-left-5 gap-3'}>

                        <img className={'w-fit h-12 object-contain'} src={secure} alt={'secure'}/>
                        <img className={'w-fit h-7 object-contain'} src={comodo} alt={'comodo'}/>
                        <img className={'w-fit h-6 object-contain'} src={mcaffe} alt={'mcAffe'}/>

                    </div>
                    <div className={` ${style.shadow_inner} w-[450px] max-[1000px]:w-[350px] max-[650px]:w-[280px] max-[1000px]:h-20 h-24 bg-white flex items-center  rounded-2xl`}>

                        <div className={'w-0.5 h-[75%] bg-gray-200 translate-x-36'}></div>

                    </div>
                </div>

                <div data-aos="fade-left" className={` ${style.shadow_inner} max-[650px]:w-[280px] max-[1000px]:w-60  max-[1000px]:h-20 w-80 h-24 px-4 bg-white flex items-center justify-center  rounded-2xl`}>

                    <div className={'w-full justify-around flex items-center gap-2'}>

                        <img className={'w-12 h-12 object-contain'} src={phone} alt={'phone'}/>

                        <div style={{fontWeight:"400",fontFamily : "Arboria-Book"}} className={'flex flex-col items-center text-[16px] max-[1000px]:text-[18px] font-semibold opacity-50 gap-2 '}>

                            <span  style={{fontWeight:"500"}}>CUSTOMER SERVICE</span>
                            <span className={'max-[1000px]:-translate-y-2'}>1800 2333 533</span>

                        </div>

                    </div>
                </div>

            </div>

            <div className={'w-full max-[800px]:px-2 max-[1440px]:px-6  max-w-[1190px] min-[1800px]:max-w-[1600px] flex flex-col  items-center'}>

                <p style={{fontWeight:"400",fontFamily : "Arboria-Book"}} data-aos="fade-down" className={'text-start text-[14px] max-[800px]:text-[12px] font-semibold leading-7 opacity-75 '}>Remark<br/><br/>
                    Please answer all the above questions truthfully. If the insured conceals the truth or making a false statement will result in the voiding of this insurance contract. The
                    insurance company has the right to terminate the insurance contract under Section 865 of the Civil and Commercial Code, and may refuse to pay compensation<br/><br/>
                    The Company does not contact customers through other (communication) channels apart from the Company’s official channels under any circumstances.<br/><br/>
                    Please note that under no circumstances shall the Company be held liable or responsible for any claims, losses, damages, expenses, or other inconvenience resulting
                    from or in any way connected with such communication.</p>

            </div>

            <div className={'w-full flex items-end justify-between mt-20'}>

                <div className={'w-[40%] max-[800px]:h-14 h-20 bg-gray-200 rounded-tr-full'}></div>
                <div className={'w-auto flex h-20 items-center justify-between px-10 max-[600px]:px-4 gap-4 text-2xl text-[#47740e] '}>

                    <FaFacebookF />
                    <FaXTwitter  />
                    <FaLinkedinIn  />
                    <IoLogoInstagram  />

                </div>
                <div className={'w-[40%] max-[800px]:h-14 h-20 bg-gray-200 rounded-tl-full'}></div>

            </div>

        </div>
    </>
}