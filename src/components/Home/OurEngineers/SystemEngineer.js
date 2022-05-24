import React from 'react';
import ansari from '../../../assets/images/image-anousheh-ansari.webp'

const SystemEngineer = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:mx-20 mx-10 overflow-hidden ">
            <article class="md:w-[600px] ">
                <header class="">
                    <h2 class=" font-extrabold text-3xl my-5 font-mono uppercase">System Engineer</h2>
                    <p class="text-5xl text-extrabold my-5">Anousha ansari</p>
                </header>
                <p className="text-lg relative">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                    Ansari was the fourth self-funded space tourist, the first self-funded woman to
                    fly to the ISS, and the first Iranian in space.</p>
            </article>
            <div className="">
                <img src={ansari} className="" alt="" />
            </div>
        </div>
    );
};

export default SystemEngineer;