import React from 'react';
import { Outlet } from 'react-router-dom';
import mark from '../../../assets/images/image-mark-shuttleworth.webp'
const MisssionSpecialist = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:mx-20 mx-10 ">
            <article class="md:w-[600px]">
                <header class="">
                    <h2 class=" font-extrabold text-3xl my-5 font-mono">Mission Specialist</h2>
                    <p class="text-5xl text-extrabold my-5">Mark SHuttleworth</p>
                </header>
                <p className="text-lg ">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
                    the Linux-based Ubuntu operating system. Shuttleworth became the first South
                    African to travel to space as a space tourist.</p>
            </article>
            <div>
                <img src={mark} alt="" />
            </div>

            <div>
                <Outlet />
                {/* <h2 className="text-4xl text-center font-extrabold uppercase mt-20 text-blue-300">About Our Crew</h2> */}
            </div>
        </div>
    );
};

export default MisssionSpecialist;