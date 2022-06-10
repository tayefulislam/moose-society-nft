import React from 'react';

const Footer = () => {
    return (
        <div className='py-2'>

            <footer class="footer px-24 py-4">
                <div class="items-center grid-flow-col">

                    <p>Copyright © NiFTy | All rights reserved</p>
                </div>
                <div class="md:place-self-center md:justify-self-end">
                    <div class="grid grid-flow-col gap-4 text-[#FEAD10]">

                        <a href="/" className='hover:text-[#AA17E0]'>Home</a>
                        <a href="/" className='hover:text-[#AA17E0]'>Terms & Conditions</a>
                        <a href="/" className='hover:text-[#AA17E0]'>Contact Us</a>
                        <a href="/" className='hover:text-[#AA17E0]'>Story</a>


                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;