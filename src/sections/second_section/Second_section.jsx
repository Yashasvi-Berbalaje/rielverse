import React from "react";
import styles from "./style.module.css";
import style from "../../pages/Home/style.module.css";
import saving from "../../Reilverse_Assets/savings 1.png";
import girl from "../../Reilverse_Assets/image 20.png";
import CommentSwiper from "../../components/CommentSwiper/CommentSwiper";
import customer from "../../Reilverse_Assets/personal-accident-cover-for-passengers 1.png";
import satisfy from "../../Reilverse_Assets/success_great_approved_congrats 1.png";
import award from "../../Reilverse_Assets/award 1.png";
import waranty from "../../Reilverse_Assets/Guaran.png";
import comparing from "../../Reilverse_Assets/comparison 1.png";
import user from "../../Reilverse_Assets/pointer-right 1.png";
import support from "../../Reilverse_Assets/support.png";
import notice from "../../Reilverse_Assets/notice-assistance 1.png";
import globe from "../../Reilverse_Assets/connected-globe 1.png";

export default function Second_section() {

    const BENEFITS = [
        {
            image: customer,
            title : 'Customer Ist',
            description: "Customer Ist Approach"
        },
        {
            image: satisfy,
            title : 'Satisfied',
            description: "Policy Holders"
        },
        {
            image: award,
            title : 'Top',
            description: "Insurance Partners"
        },
        {
            image: waranty,
            title : 'Guaranteed',
            description: "Claims Assistance"
        },
    ]

    const CARDS = [
        {
            image: saving,
            title: "Save Big on Your Policies",
            description : "We provide competitive rates with all other perks & benefits of online insurance"
        },
        {
            image: comparing,
            title: "Comparing Quotes is Verse",
            description : "We provide you with simple yet effective tools & calculators to find the best plan"
        },
        {
            image: user,
            title: "User Experience",
            description : "An awesome insurance experience which is User-friendly, Quick & Joyful"
        },
    ]

    const OFFERS = [
        {
            image : support,
            title: 'GUIDANCE',
            subtitle: "Transparent Comparisons",
            description : "insurejoy.com have a team of unbiased insurance experts that is dedicated to helping you buy best insurance"
        },
        {
            image : notice,
            title: 'ASSISTANCE',
            subtitle: "Application to Issuance",
            description : "From short-simple forms and a hassle free process to a Dedicated Operations Team for a smooth experience"
        },
        {
            image : globe,
            title: 'SUPPORT',
            subtitle: "Dedicated Claim Desk",
            description : "We have a team of professionals that is dedicated to helping our users in the event of a claim."
        },
    ]

    return<>
        <div className={'w-full h-auto flex flex-col items-center'}>

            <div className={'w-full max-w-[1200px] px-[3px] pt-[3px] rounded-3xl h-auto bg-gradient-to-t from-transparent to-[#8dc14b] mt-12 '}>
                <div className={'w-full h-56 bg-white flex items-center rounded-3xl'}>

                    {BENEFITS.map((value, index)=><div className={'w-1/4 h-auto flex items-center'}>
                        <div key={index} className={'w-full h-auto flex flex-col justify-center items-center'}>

                            <img className={'w-20 h-fit object-contain'} src={value.image} alt={'Railverse'}/>

                            <span className={'text-[28px] font-semibold mt-2'}>{value.title}</span>
                            <span className={'text-[14px] '}>{value.description}</span>

                        </div>
                        <div className={`${index===3?`opacity-0` :``} w-0.5 h-32 bg-[#8dc14b]`}></div>
                    </div>)}


                </div>
            </div>

            <div className={'w-full flex items-start mt-16 justify-center'}>

                <div className={'w-[550px] h-auto flex flex-col items-start text-start'}>
                    <div className={'w-[400px] h-auto flex flex-col items-start '}>

                        <span className={style.mask_text}>WHO WE ARE ?</span>
                        <span className={style.mask_text2}>Always there for our users</span>

                    </div>
                    <span className={'text-lg font-semibold mt-6'}>We are committed to serve our customers during or after the purchase of your policy, handover all your insurance related worries to us and Relax!</span>
                </div>

                <div className={'flex items-start relative'}>

                    {CARDS.map((value, index)=> <div key={index} className={'w-72 h-72 rounded-3xl p-[2px] bg-gradient-to-r from-[#0761bf] to-50% to-transparent'}>

                        <div className={'w-full h-full rounded-3xl bg-white flex flex-col items-start p-4 text-start '}>

                            <img className={'w-24 h-24 object-contain'} src={value.image} alt={"Saving"}/>

                            <span className={'text-3xl font-semibold'}>{value.title}</span>
                            <span className={'text-[16px] font-semibold'}>{value.description}</span>

                        </div>

                    </div>)}


                </div>


            </div>

            <div className={'w-full h-auto flex flex-col items-center relative mt-20'}>

                <img className={'w-fit h-[600px] absolute top-0 opacity-5'} src={saving} alt={"Saving"}/>

                <div className={'w-full flex flex-col items-center '}>

                    <span className={style.mask_text3}>WHY RIELVERSE.COM ?</span>
                    <span className={style.mask_text4}>Insurance Has Never Been So Simple & <br/> We Are Trying To Make It Even More!</span>

                    <span className={'text-2xl font-semibold leading-10 mt-4'}>Be it the Comparisons, Helping you find the best plan for your needs, Making changes to your existing policy or even claims - We are with you all the way!</span>

                </div>

                <div className={'w-full max-w-[1200px] px-[3px] pt-[3px] rounded-3xl h-auto bg-gradient-to-t from-transparent to-[#8dc14b] mt-12 '}>

                    <div className={'w-full h-64 bg-white flex items-start pt-5 rounded-3xl'}>

                        {OFFERS.map((value, index)=><div className={'w-1/3 h-auto flex items-center'}>
                            <div key={index} className={'w-full h-auto flex flex-col justify-center items-center px-4'}>
                                <span className={'text-lg font-semibold '}>{value.title}</span>
                                <img className={'w-20 h-fit object-contain'} src={value.image} alt={'Railverse'}/>

                                <span className={'text-[24px] text-[#47740e] font-semibold mt-2'}>{value.subtitle}</span>
                                <span className={'text-[16px] mt-4 font-semibold'}>{value.description}</span>

                            </div>
                            <div className={`${index===2?`opacity-0` :``} w-0.5 h-32 bg-gradient-to-b from-[#8dc14b] to-transparent`}></div>
                        </div>)}

                    </div>

                </div>

            </div>

            <div className={'w-full flex items-start mt-24'}>

                <div className={'w-[600px] '}>

                    <img className={'w-full h-fit max-h-[520px] object-contain'} src={girl} alt={''}/>

                </div>

                <div className={'w-full max-w-[1000px] flex flex-col items-start pl-4 text-start '}>

                    <span className={'text-[20px] underline font-semibold'}>Reviews</span>
                    <p className={'text-5xl font-semibold mt-4'}>
                        <span className={style.mask_text5}>What they say</span><br/>
                        <span>About Us</span>
                    </p>
                    <p className={'text-3xl font-semibold mt-12 '}>
                        We re honoured to have helped these begin a <span className={'text-[#8dc14b]'}> SMILING FACES </span> new life abroad
                    </p>

                    <CommentSwiper/>

                </div>

            </div>

        </div>
    </>
}