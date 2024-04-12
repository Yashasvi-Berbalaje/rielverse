import React from "react";
import style from "./style.module.css";
import {CiSearch} from "react-icons/ci";
import {DatePicker} from "antd";
import moment from 'moment';

import input_logo from "../../Reilverse_Assets/input_logo.svg";
import Switcher from "../../components/Switcher/Switcher";

export default function CarBrand() {



    const { RangePicker } = DatePicker;

    const disabledDate = current => {
        // Отключить все даты до 2023 и после 2566
        return current && (current < moment('2023-01-01') || current > moment('2566-12-31'));
    }

    const TAB_MENUS = [
        'Car',
        'Driver',
        'Insurance',
        'Quotes',
    ]

    const BRANDS = [
        'https://www.carlogos.org/car-logos/hyundai-logo-2011-download.png',
        'https://listcarbrands.com/wp-content/uploads/2017/11/Mahindra-Logo-2000.png',
        'https://listcarbrands.com/wp-content/uploads/2017/11/Mahindra-Logo-2000.png',
        'https://seeklogo.com/images/T/toyota-logo-3A02221675-seeklogo.com.png',
        'https://upload.wikimedia.org/wikipedia/ru/7/7f/Chevrolet_new_logo.png',
        'https://upload.wikimedia.org/wikipedia/ru/7/7f/Chevrolet_new_logo.png',
    ]
    const MODELS = [
        {
            image: 'https://images.topgear.com.ph/topgear/images/2022/08/18/hyundai-creta-2022-main-1660813139.jpg',
            name:"Creta"
        },
        {
            image: 'https://images.topgear.com.ph/topgear/images/2022/08/18/hyundai-creta-2022-main-1660813139.jpg',
            name:"I10"
        },
        {
            image: 'https://images.topgear.com.ph/topgear/images/2022/08/18/hyundai-creta-2022-main-1660813139.jpg',
            name:"Verna"
        },
        {
            image: 'https://images.topgear.com.ph/topgear/images/2022/08/18/hyundai-creta-2022-main-1660813139.jpg',
            name:"Grand i10 Nios"
        }
    ]

    const CITIES = [
        {
            name:'Phnom Penh'
        },
        {
            name:'Siem Reap'
        },
        {
            name:'Battambang'
        },
        {
            name:'Sihanoukville'
        },
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
                    <span className={'text-[36px] max-[500px]:text-[28px] font-[400] '}>You are looking for a car insurance for…</span>
                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[18px] max-[500px]:text-[14px] font-[400]  '}>Fill the questionnaire to get your personalised car insurance quote.</span>

                    <div className={'flex flex-col items-start'}>

                        <span className={'text-[20px] max-[500px]:text-[16px]  mt-3'}>Select car brand</span>

                        <div className={'relative -translate-x-1 mt-2'}>
                            <CiSearch className={'text-[28px] absolute top-3 left-2 text-[#8DC14B]'} />
                            <input style={{fontFamily:"Arboria-Light",fontWeight:"400"}} placeholder={'Select car brand'} className={' max-[500px]:w-[255px] w-[400px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#8DC14B]'}/>
                        </div>

                    </div>

                    <span className={'text-[20px] max-[500px]:text-[16px] text-[#47740E] mt-4'}>Popular Brands</span>

                    <div className={'w-full max-w-[900px] flex flex-wrap items-start justify-start max-[500px]:gap-x-1 gap-x-14  gap-y-8 mt-2'}>
                        {BRANDS.map((value, index)=> <div className={'p-[1px] bg-gradient-to-b from-[#8DC14B] to-transparent rounded-t-xl '}>

                            <div key={index} className={'max-[365px]:w-[120px] max-[500px]:w-[140px] w-[170px] h-[120px] flex justify-center pt-4 bg-white rounded-t-xl'}>

                                <img className={'w-[100px] h-[70px] max-[365px]:w-[70px] object-contain'} src={value} alt={'car brands'}/>

                            </div>

                        </div>)}
                    </div>

                    <div className={'flex flex-col items-start mt-7'}>

                        <span className={'text-[36px] max-[500px]:text-[28px] font-[400] '}>Select the model of your car</span>
                        <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[18px] max-[500px]:text-[14px] font-[400]  '}>Need Help ?</span>


                        <span className={'text-[20px] max-[500px]:text-[16px] mt-3'}>Select car brand</span>

                        <div className={'relative -translate-x-1 mt-2'}>
                            <CiSearch className={'text-[28px] absolute top-3 left-2 text-[#8DC14B]'} />
                            <input style={{fontFamily:"Arboria-Light",fontWeight:"400"}} placeholder={'Select your car model'} className={'max-[500px]:w-[255px] w-[400px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#8DC14B]'}/>
                        </div>

                    </div>

                    <span className={'text-[20px] max-[500px]:text-[16px] text-[#47740E] mt-4'}>POPULAR HYUNDAI MODELS</span>

                    <div className={'w-full max-w-[900px] flex flex-wrap items-start justify-start max-[500px]:gap-x-1 gap-x-14  gap-y-8 mt-2'}>
                        {MODELS.map((value, index)=> <div className={'p-[1px] bg-gradient-to-b from-[#8DC14B] to-transparent rounded-t-xl '}>

                            <div key={index} className={'w-[170px] h-[120px] max-[365px]:w-[120px] max-[500px]:w-[140px] flex flex-col items-center justify-center bg-white rounded-t-xl'}>

                                <img className={'w-[100px] h-[70px] max-[365px]:w-[70px] object-contain'} src={value.image} alt={'car brands'}/>
                                <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}}>{value.name}</span>

                            </div>

                        </div>)}
                    </div>


                    <div className={'flex flex-col items-start mt-7'}>

                        <span className={'text-[36px] max-[500px]:text-[28px] font-[400] '}>In which year was your car manufactured ?</span>
                        <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[18px] max-[500px]:text-[14px] font-[400]  '}>Need Help ?</span>


                        <div className={'relative -translate-x-1 mt-2'}>
                            <DatePicker
                                className={' max-[500px]:w-[200px] w-[250px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#8DC14B]'}
                                picker="year"
                                format="YYYY"
                                disabledDate={disabledDate}
                                suffixIcon={<img src={input_logo} alt={'input logo'} className={'w-[24px] h-[18px] object-contain'}  />}
                                placeholder="2023/2566"
                                style={{ borderColor: '#8DC14B' }}
                                onChange={(value)=>console.log(value?.format('YYYY'))}
                            />
                        </div>

                    </div>

                    <div className={'flex flex-col items-start mt-7'}>

                        <span className={'text-[36px] max-[500px]:text-[28px] font-[400] '}>What is the engine size ?</span>
                        <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[18px] max-[500px]:text-[14px] font-[400]  '}>Need Help ?</span>


                        <div className={'relative flex items-center max-[500px]:gap-1 gap-14 -translate-x-1 mt-2'}>
                            <div className={'bg-gradient-to-b from-[#8DC14B] to-transparent p-[1px] rounded-t-xl'}>
                                <div style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'bg-white max-[365px]:w-[120px] max-[500px]:w-[140px] w-[170px] h-[110px] rounded-t-xl flex justify-center pt-4 text-[24px]'}>1498 cc</div>
                            </div>
                            <div className={'bg-gradient-to-b from-[#8DC14B] to-transparent p-[1px] rounded-t-xl'}>
                                <div style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'bg-white max-[365px]:w-[120px] max-[500px]:w-[140px] w-[170px] h-[110px] rounded-t-xl flex justify-center pt-4 text-[24px]'}>1498 cc</div>
                            </div>
                        </div>

                    </div>

                    <div className={'flex flex-col items-start mt-7'}>

                        <span className={'text-[36px] max-[500px]:text-[28px] font-[400] '}>What is the number of doors ?</span>
                        <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[18px] max-[500px]:text-[14px] font-[400]  '}>Need Help ?</span>


                        <div className={'relative flex items-center gap-14 -translate-x-1 mt-2'}>
                            <div className={'bg-gradient-to-b from-[#8DC14B] to-transparent p-[1px] rounded-t-xl'}>
                                <div style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'bg-white w-[170px] h-[60px] rounded-t-xl flex justify-center pt-3 text-[24px]'}>4</div>
                            </div>
                        </div>

                    </div>

                    <div className={'flex flex-col items-start mt-7'}>

                        <span className={'text-[36px] max-[500px]:text-[28px] font-[400] '}>Which car is it exactly ?</span>
                        <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[18px] max-[500px]:text-[14px] font-[400]  '}>Need Help ?</span>


                        <div className={'relative flex flex-wrap items-center max-[500px]:gap-x-1 gap-x-14  gap-y-8 -translate-x-1 mt-7'}>

                            <div className={'bg-gradient-to-b from-[#8DC14B] to-transparent p-[1px] rounded-t-xl relative'}>
                                <div className={'bg-gradient-to-b from-[#8DC14B] to-transparent p-[1px] rounded-t-xl  absolute -top-[31px] right-10 max-[800px]:hidden'}>
                                    <div className={' w-[170px] h-[30px]  bg-white/70 rounded-t-xl flex justify-center '}>Change Car</div>
                                </div>
                                <div className={'w-[580px] max-[800px]:w-[200px] max-[800px]:h-auto  h-[135px] flex max-[800px]:flex-col items-start max-[800px]:items-center rounded-t-xl p-4 bg-white'}>

                                    <div className={'flex flex-col gap-3 items-center'}>

                                        <img className={'max-w-[75px] h-fit max-h-[45px] object-contain'} src={'https://images.topgear.com.ph/topgear/images/2022/08/18/hyundai-creta-2022-main-1660813139.jpg'} alt={"brand"}/>

                                        <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[16px] '}>Verna</span>

                                    </div>

                                    <div className={'ml-3 flex flex-col items-start text-start'}>
                                        <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[16px] text-[#74A930] '}>Honda Accord 2023 1498 CC (4 Doors) MY21 Sedan 4dr EL CVT Front Wheel Drive 1.5iTC</span>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={'w-full flex max-[1150px]:flex-wrap items-start justify-between gap-y-10 mt-10'}>

                        <div className={'h-[140px] max-[500px]:h-auto justify-between flex flex-col items-start text-start'}>
                            <div className={'flex flex-col items-start '}>
                                <span className={'text-[21px]'}>Which car is it exactly ?</span>
                                <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-6'}>Need Help ?</span>
                            </div>
                            <Switcher first={'Yes'} second={'No'}/>
                        </div>

                        <div className={'w-0.5 h-20 bg-[#8DC14B] max-[660px]:hidden self-center'}></div>

                        <div className={'h-[140px] max-[500px]:h-auto justify-between flex flex-col items-start text-start'}>
                            <div className={'flex flex-col items-start '}>
                                <span className={'text-[21px]'}>Do you have a dashboard cam?</span>
                                <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-6'}>Need Help ?</span>
                            </div>
                            <Switcher first={'Yes'} second={'No'}/>
                        </div>

                        <div className={'w-0.5 h-20 bg-[#8DC14B] max-[660px]:hidden self-center'}></div>

                        <div className={'h-[140px] max-[500px]:h-auto justify-between flex flex-col items-start text-start'}>
                            <div className={'flex flex-col items-start '}>
                                <span className={'text-[21px]'}>What is your driving purpose?</span>
                                <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-6'}>Need Help ?</span>
                            </div>
                            <Switcher className={' max-[365px]:w-[260px] max-[600px]:w-[300px] w-[400px]'} first={'Personal usage'} second={'Commercial usage'}/>
                        </div>

                    </div>

                    <div className={'flex flex-col items-start mt-7'}>

                        <span className={'text-[36px] max-[500px]:text-[28px] font-[400] '}>In which province is your car registered ?</span>
                        <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[18px] max-[500px]:text-[14px] font-[400]  '}>Need Help ?</span>


                        <div className={'relative -translate-x-1 mt-2'}>
                            <CiSearch className={'text-[28px] absolute top-3 left-2 text-[#8DC14B]'} />
                            <input style={{fontFamily:"Arboria-Light",fontWeight:"400"}} placeholder={'Select City'} className={'max-[500px]:w-[255px] w-[400px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#8DC14B]'}/>
                        </div>

                    </div>

                    <span className={'text-[20px] max-[500px]:text-[16px] text-[#47740E] mt-4'}>POPULAR CITIES</span>

                    <div className={'relative flex flex-wrap items-center max-[500px]:gap-x-1 gap-x-14  gap-y-8 -translate-x-1 mt-2'}>
                        {CITIES.map((value, index)=> <div className={'bg-gradient-to-b from-[#8DC14B] to-transparent p-[1px] rounded-t-xl'}>
                            <div  className={'bg-white max-[365px]:w-[120px] max-[500px]:w-[140px] w-[170px] h-[60px] rounded-t-xl flex justify-center pt-4 text-[14px]'}>{value.name}</div>
                        </div>)}

                    </div>


                    <div className={'flex flex-col items-start text-start mt-16'}>

                        <span className={'text-[21px] max-[500px]:text-[17px]'}>Remark</span>

                        <p>

                            Please answer all the above questions truthfully. If the insured conceals the truth or making a false statement will result in the voiding of this insurance contract. The insurance company has the right to terminate the insurance contract under Section 865 of the Civil and Commercial Code, and may refuse to pay compensation <br/><br/>
                            The Company does not contact customers through other (communication) channels apart from the Company’s official channels under any circumstances.<br/><br/>
                            Please note that under no circumstances shall the Company be held liable or responsible for any claims, losses, damages, expenses, or other inconvenience resulting from or in any way connected with such communication.
                        </p>

                    </div>

                </div>
            </div>

        </div>
    </>
}