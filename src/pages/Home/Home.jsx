import React from "react";
import style from "./style.module.css";
import diamond from "../../Reilverse_Assets/Logo Vector (3).png";
import First_section from "../../sections/first_section/First_section";
import Second_section from "../../sections/second_section/Second_section";

import green_layer from "../../Reilverse_Assets/Frame 3 (1).png";
import {IoIosArrowForward, IoLogoInstagram} from "react-icons/io";
import logo from "../../Reilverse_Assets/Logo.png";
import phone from "../../Reilverse_Assets/Group.png";
import secure from "../../Reilverse_Assets/secure.png";
import comodo from "../../Reilverse_Assets/image 63345987.png";
import mcaffe from "../../Reilverse_Assets/image 63345988.png";
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

export default function Home() {



    return<>
        <div className={style.container}>

            <div className={'w-full h-[900px] absolute top-0 left-0 bg-gradient-to-b from-[#c3e45e] to-transparent -z-0'}></div>
            <img className={'object-contain w-auto h-[750px] absolute -top-9 left-0 z-0'} src={diamond} alt={'Railverse logo vector'}/>

            <div className={style.content_wrapper}>

                {/*First Layer*/}
                <First_section/>

                {/*Second Section*/}
                <Second_section/>


                <div className={'w-full flex flex-col items-center mt-20'}>

                    <div className={'w-full min-[1880px]:max-w-[1400px] max-w-[1200px] bg-[#80b240] h-80 rounded-2xl flex flex-col items-end justify-center px-28 relative'}>
                        <img className={'w-full h-full object-fill absolute top-0 left-0 -z-0'} src={green_layer}/>
                        <div className={'overflow-hidden z-0 w-80 h-20 flex pl-7 items-center rounded-2xl text-3xl text-white font-semibold bg-green-600 bg-gradient-to-tl from-[#93c347] to-[#b8cf29] relative'}>
                            Get Quote
                            <IoIosArrowForward className={'text-[250px] absolute -right-8 opacity-40'} />
                        </div>

                    </div>

                    <div className={'flex flex-col items-center mt-24'}>

                        <img className={'w-fit h-10 object-containe'} src={logo} alt={"Railverse Logo"}/>

                        <p className={'text-2xl mt-4 opacity-75'}>Powered by Worldbridge Insurance Broker</p>
                        <p className={'text-xl mt-4 opacity-75'}>#10, 150 South Bridge Rd, #04 Fook Hai Building, Singapore 058727</p>

                    </div>

                </div>

            </div>

            <div className={'w-full h-0.5 bg-gray-200/70 mt-32'}></div>

            <div className={'w-full flex items-center justify-between -translate-y-16 pl-80 pr-16'}>

                <div className={'flex flex-col relative'}>
                    <div className={'absolute -top-14 flex items-center gap-3'}>

                        <img className={'w-fit h-12 object-contain'} src={secure} alt={'secure'}/>
                        <img className={'w-fit h-7 object-contain'} src={comodo} alt={'comodo'}/>
                        <img className={'w-fit h-6 object-contain'} src={mcaffe} alt={'mcAffe'}/>

                    </div>
                    <div className={` ${style.shadow_inner} w-[450px] h-32 bg-white flex items-center  rounded-2xl`}>

                        <div className={'w-0.5 h-[75%] bg-gray-200 translate-x-36'}></div>

                    </div>
                </div>

                <div className={` ${style.shadow_inner} w-80 h-32 px-4 bg-white flex items-center justify-center  rounded-2xl`}>

                    <div className={'flex items-center gap-2'}>

                        <img className={'w-12 h-12 object-contain'} src={phone} alt={'phone'}/>

                        <div className={'flex flex-col items-center text-2xl font-semibold opacity-50 gap-2 '}>

                            <span>CUSTOMER SERVICE</span>
                            <span>1800 2333 533</span>

                        </div>

                    </div>

                </div>

            </div>

            <div className={'w-full max-w-[1400px] min-[1800px]:max-w-[1600px] flex flex-col  items-center'}>

                <p className={'text-start text-lg font-semibold leading-7 opacity-75 '}>Remark<br/><br/>
                    Please answer all the above questions truthfully. If the insured conceals the truth or making a false statement will result in the voiding of this insurance contract. The
                    insurance company has the right to terminate the insurance contract under Section 865 of the Civil and Commercial Code, and may refuse to pay compensation<br/><br/>
                    The Company does not contact customers through other (communication) channels apart from the Company’s official channels under any circumstances.<br/><br/>
                    Please note that under no circumstances shall the Company be held liable or responsible for any claims, losses, damages, expenses, or other inconvenience resulting
                    from or in any way connected with such communication.</p>

            </div>

            <div className={'w-full flex items-end justify-between mt-20'}>

                <div className={'w-[40%] h-20 bg-gray-200 rounded-tr-full'}></div>
                <div className={'w-[20%] flex h-20 items-center justify-between px-16 text-2xl text-[#47740e] '}>

                    <FaFacebookF />
                    <FaXTwitter />
                    <FaLinkedinIn />
                    <IoLogoInstagram />

                </div>
                <div className={'w-[40%] h-20 bg-gray-200 rounded-tl-full'}></div>

            </div>

        </div>
    </>
}