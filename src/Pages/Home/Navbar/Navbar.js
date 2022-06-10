import React from 'react';

const Navbar = () => {

    const manu = <>
        <li className='text-xl font-semibold'><a>Home</a></li>

        <li className='text-xl font-semibold'><a>Mini Moose</a></li>
        <li className='text-xl font-semibold'><a>Utilities</a></li>
        <li className='text-xl font-semibold'><a>Society Rewards</a></li>
        <li className='text-xl font-semibold'><a>Merch</a></li>

    </>
    return (
        <div class="navbar bg-[#0C0324] pt-5">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#0C0324] rounded-box w-52 ">

                        {manu}

                    </ul>
                </div>
                <img src="https://moosesocietynft.io/wp-content/uploads/2022/03/Website-Logo-2-300x28.png" alt="" />
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {manu}
                </ul>
            </div>
            <div class="navbar-end">
                <a href='/' class="btn hover:animate-bounce bg-gradient-to-r from-[#5210FE]  to-[#AA17E0] rounded-sm">Dashboard <i class="fa-solid fa-border-all mx-1"></i></a>
            </div>
        </div>
    );
};

export default Navbar;