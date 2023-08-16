import React, { FC } from 'react'

interface HeroProps {

}

const Hero: FC<HeroProps> = ({ }) => {
    return (
        <div className="w-full flex mb-[65px] relative">
            <div className="w-[1208px] h-[737px] bg-gradient-to-br from-transparent to-gradient-blue rounded-b-[35px] pl-[116px] pr-[300px]">
                <img src='/images/logo.svg' alt='logo' className="mt-[75px] mb-[127px]" />
                <div className="w-[485px] flex flex-col items-start">
                    <h1 className="mb-[35px] text-[64px] text-gunmetal font-semibold leading-[110%]">Body Mass Index Calculator</h1>
                    <p className="text-[16px] leading-[150%] text-dark-electric-blue">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
                </div>
            </div>
            <div className="w-[664px] h-[484px] p-[32px] absolute top-[106px] right-[300px] bg-white rounded-[16px]
                shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
            ">

            </div>
        </div>
    )
}

export default Hero