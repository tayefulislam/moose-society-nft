import React from 'react';

const Banner = () => {
    return (
        <div>
            <h1 className='text-7xl'>Staking</h1>

            <div class="hero  mx-auto">
                <div class="hero-content flex-col lg:flex-row-reverse m-0 lg:m-20">
                    <img src="https://moosesocietynft.io/wp-content/uploads/2022/06/Untitled-design.png" class="w-72 lg:w-96 rounded-lg shadow-2xl " data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" />
                    <div className='mx-1 lg:mx-12'>
                        <h1 class=" text-[40px] lg:text-7xl font-bold" data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">Moose Society Side Quests</h1>
                        <p class='text-[#9E98A8] text-lg my-2' >Staking (which we call side quests) is when you send off any 2 moose for 90 days and they return with a rescued Mini Moose! This is what you will use during the rest of the project!</p>
                        <div className=''>
                            <a href='/' class="btn hover:animate-bounce bg-gradient-to-r from-[#5210FE]  to-[#AA17E0] rounded-sm mx-4">Expolre Now <i class="fa-solid fa-arrow-right mx-2"></i></a>
                            <a href='/' class="btn hover:animate-bounce bg-transparent hover:bg-transparent">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;