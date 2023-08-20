import React, { FC } from 'react'

interface HeroProps {

}

const Hero: FC<HeroProps> = ({ }) => {
    return (
        <div className="w-full flex mb-[72px] relative">
            <div className="w-full h-[800px] flex flex-col items-center bg-gradient-to-br from-transparent to-gradient-blue rounded-b-[35px] px-[24px] pt-[32px] gap-[24px]">
                <img src='/images/logo.svg' alt='logo' className="" />
                <div className="w-[327px] flex flex-col items-center gap-[24px]">
                    <h1 className="text-[64px] text-gunmetal font-semibold leading-[110%] text-center">Body Mass Index Calculator</h1>
                    <p className="text-[16px] leading-[150%] text-dark-electric-blue text-center">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
                </div>
            </div>
            <div className="w-[90%] h-[649px] flex flex-col p-[24px] gap-[24px] items-center absolute top-[600px] left-[5%] bg-white rounded-[16px]
                
            ">
                <h3 className="text-[28px] font-semibold tracking-tighter">Enter your details below</h3>
                <div className="flex gap-[20px]">
                    <div className="group">
                        <input id='metric' type="radio" name="radioOptions" className=" w-[30px] h-[30px]  border border-gray
                                                                                        group-hover:cursor-pointer
                                                                                        checked:text-blue checked:text-opacity-20 focus:ring-transparent
                                                                                        checked:before:content-[''] checked:before:w-[60%] checked:before:h-[60%] checked:before:block checked:before:my-[20%] checked:before:mx-auto checked:before:border checked:before:border-blue checked:before:rounded-full checked:before:bg-blue"  />
                        <label htmlFor="metric" className='ml-[10px] group-hover:cursor-pointer'>Metric</label>
                    </div>
                    <div className='group'>
                        <input id='imperial' type="radio" name='radioOptions' className='' />
                        <label htmlFor="imperial" className='ml-[10px]'>Imperial</label>
                    </div>
                </div>
                <div className='flex flex-col items-start'>
                    <label htmlFor="height" className='text-sm text-dark-electric-blue'>Height</label>
                    <input id='height' type="text" className='border border-dark-electric-blue rounded-full' />
                    <label htmlFor="width" className='text-sm text-dark-electric-blue'>Width</label>
                    <input id='width' type="text" className='border border-dark-electric-blue rounded-full' />
                </div>
                <div className='w-full h-full bg-gradient-to-r flex flex-col from-blue to-blue-end rounded-[16px] p-[32px] gap-[24px]'>
                    <div className='flex flex-col gap-[8px]'>
                        <h3 className='text-white'>Your BMI is...</h3>
                        <h2 className='text-white'>23.4</h2>
                    </div>
                    <p className='text-white'>Your BMI suggests youre a healthy weight. Your ideal weight is between <span> 63.3kgs - 85.2kgs</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero