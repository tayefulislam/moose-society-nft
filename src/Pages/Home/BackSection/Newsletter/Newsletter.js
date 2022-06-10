import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='newsletter-container bg-gradient-to-r from-[#5210FE]  to-[#AA17E0] mx-2  lg:mx-24 p-12 rounded-lg mt-6'>

            <div className='newsletter-section'>
                <h1 className='text-lg font-semibold'>NEWSLETTER</h1>
                <h1 className='text-4xl font-bold mt-2'>

                    Join Our Newsletter</h1>
                <p className='text-lg mt-2'>You never know what you might get from us. We probably won't send you anything to crazy!</p>

                <div>

                    <input type="text" placeholder="Email Address" class="input w-full max-w-xs mt-2" />

                    <a href='' class="btn bounce bg-gradient-to-r from-indigo-500  to-pink-500">STAKE</a>


                </div>

            </div>

            <div className='about-section'>

                <img src="https://moosesocietynft.io/wp-content/uploads/2022/03/MOOSE-SOCIETY-LOGO-1-1536x216.png" alt="" />

                <p className='text-[17px] mt-2'>Thank you for checking out our site! We would love for you to become part of our herd!</p>

                <div class="flex gap-2 mt-2">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>

            </div>

            <div className='quick-manu'>

                <div className='flex justify-center items-center'>
                    <div>
                        <h1 className='text-2xl font-bold mb-2'>Quick Manu</h1>

                        <div className='flex flex-col gap-[10px] font-semibold'>
                            <a href="/" className='hover:text-[#FEAD10]'>Home</a>
                            <a href="/" className='hover:text-[#FEAD10]'>Terms & Conditions</a>
                            <a href="/" className='hover:text-[#FEAD10]'>Contact Us</a>
                            <a href="/" className='hover:text-[#FEAD10]'>Story</a>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Newsletter;