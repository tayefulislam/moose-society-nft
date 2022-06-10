import React from 'react';
import './OffSection.css'

const OffSection = () => {
    return (
        <div className='off-container  mx-2 lg:mx-24 '>

            <div>

                <h1 className='text-sm lg:text-lg font-bold'>Moose Society Staking</h1>
                <h1 className='text-3xl lg:text-7xl font-bold'
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">Send Them Off!</h1>
                <p className='text-[#9E98A8] text-lg mt-4 lg:mt-5'>This is where you choose 2 moose to send off for 90 days! Once they return, you will be able to claim a Free Mini Moose! Choose 2 from the list to send them off!</p>

                <div className='grid grid-cols-2 gap-3'>

                    <img src="https://moosesocietynft.io/wp-content/uploads/elementor/thumbs/Brown-pm0wqykqc15sxxrgma49b9qoe7cjlrhhsc3yrv709k.png" alt="" data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" />
                    <img src="https://moosesocietynft.io/wp-content/uploads/elementor/thumbs/Zombie-pm0wttyz7t3cf1l9uit7xjndql6x4gvyujvdkaxp94.png" alt="" data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" />

                </div>

                <div className='flex justify-center items-center mt-1'>
                    <a href='/' class="btn hover:animate-bounce bg-gradient-to-r from-[#5210FE]  to-[#AA17E0] rounded-sm mx-4"
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">Stake</a>
                </div>

            </div>

            <div className='text-center p-16 bg-[#1D1533] rounded-[12px]'>

                <div data-aos="fade-up"

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




        </div>
    );
};

export default OffSection;