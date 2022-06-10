import React from 'react';
import './BackSection.css'

const BackSection = () => {
    return (
        <div className='back-container mx-2 lg:mx-24 mt-6'>



            <div className='text-center p-16 bg-[#1D1533] rounded-[12px]'>

                <div data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                >
                    <div className='flex justify-center items-center'>
                        <img src="https://moosesocietynft.io/wp-content/uploads/2022/03/quote-icon.png" alt="" />

                    </div>
                    <h1 className='text-[15px] lg:text-[35px] font-bold'>This Is Where The NFTs That Have Not Been Staked Yet Will Show Up.</h1>

                    <p className='text-[25px] text-[#9E98A8] mt-5'> They will be able to click on them and send them over to the left side and then choose to stake the pair.</p>

                    <div>
                        <h1 className='text-lg font-bold mt-5'>Tommy Burton</h1>
                        <p className='text-lg text-[#9E98A8]'>Founder NiFTy</p>
                    </div>
                </div>



            </div>

            <div>

                <div className='back-text'>
                    <h1 className='text-sm lg:text-lg font-bold '>Moose Society Staking</h1>

                    <p className='text-3xl lg:text-6xl font-bold'
                        data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">Bring Them Back!</p>

                    <p className='text-[#9E98A8] text-lg mt-4 lg:mt-5'>You will be able to watch the timer as your moose make their journey! Once complete, the timer will count down and you will be able to un-stake them and claim your Free Mini Moose!</p>

                    <div className='grid grid-cols-2 gap-3'>

                        <img src="https://moosesocietynft.io/wp-content/uploads/elementor/thumbs/Green-pm0wsno8o9hfwlappij0bcbn08zei381oqiiyuof14.png" alt="" data-aos="fade-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" />
                        <img src="https://moosesocietynft.io/wp-content/uploads/elementor/thumbs/Orange-pm0wt3nhwg3bdyni47fnzqah3ssn4xzhexls4k0q3c.png" alt="" data-aos="fade-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" />

                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <a href='/' class="btn hover:animate-bounce bg-gradient-to-r from-[#5210FE]  to-[#AA17E0] rounded-sm mx-4 mt-4"
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">UnStake</a>
                </div>

            </div>




        </div>
    );
};

export default BackSection;