import React from "react";

export const LandingPage : React.FC = () =>  {
    return(
        <div>
            <div className="flex flex-col items-center">
                <h1 className="text-[64px] text-light font-fancy text-center"> Organize your work <span className="text-primary">seamlessly</span> </h1>
                <p className="text-light text-center pb-5"> A simple, beautiful way to manage tasks and projects with your team </p>
                <button className="font-title text-[22px] bg-primary font-bold py-2 px-4 rounded-sm "> Get Started for free</button>
                <h2 className="text-light text-[48px] font-title pt-23 pb-10"> Simple yet powerful features </h2>
            </div>
            <div className="flex flex-row pb-5">
            <div className="basis-2xs border-white-200 max-w-2xs rounded text-light bg-gray-800  border-r border-b border-l border-t ">
                <div className="px-6 py-4">
                    <svg width="54" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="pb-3">
                    <path d="M0 6.85714C0 3.075 3.02695 0 6.75 0H47.25C50.973 0 54 3.075 54 6.85714V41.1429C54 44.925 50.973 48 47.25 48H6.75C3.02695 48 0 44.925 0 41.1429V6.85714ZM6.75 13.7143V41.1429H23.625V13.7143H6.75ZM47.25 13.7143H30.375V41.1429H47.25V13.7143Z" fill="#C6ABFF"/>
                </svg>

                <div className="font-bold text-xl mb-2 text-light">Flexible boards</div>
                    <p className="text-light text-base">
                    Organize tasks into customizable boards and columns to fit your workflow
                    </p>
                </div>   
            </div>
            <div className=" basis-xs border-white-200 max-w-2xs rounded text-light bg-gray-800  border-r border-b border-l border-t ">
                <div className="px-6 py-4">
                <svg width="52" height="37" viewBox="0 0 52 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.9119 1.08381C52.3627 2.5289 52.3627 4.87572 50.9119 6.32081L21.201 35.9162C19.7503 37.3613 17.3943 37.3613 15.9435 35.9162L1.08805 21.1185C-0.362683 19.6734 -0.362683 17.3266 1.08805 15.8815C2.53878 14.4364 4.89477 14.4364 6.3455 15.8815L18.5781 28.0549L45.6661 1.08381C47.1168 -0.361272 49.4728 -0.361272 50.9236 1.08381H50.9119Z" fill="#C6ABFF"/>
                </svg>
                <div className="font-bold text-xl mb-2 mt-3 text-light">Check sh*t done</div>
                    <p className="text-light text-base">
                    Keep track of your progress and iterate through your tasks flowlessly
                    </p>
                </div>   
            </div>
            <div className=" basis-sm border-white-200 max-w-2xs rounded text-light bg-gray-800  border-r border-b border-l border-t ">
                <div className="px-6 py-4">
                    <svg width="54" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="pb-3">
                    <path d="M0 6.85714C0 3.075 3.02695 0 6.75 0H47.25C50.973 0 54 3.075 54 6.85714V41.1429C54 44.925 50.973 48 47.25 48H6.75C3.02695 48 0 44.925 0 41.1429V6.85714ZM6.75 13.7143V41.1429H23.625V13.7143H6.75ZM47.25 13.7143H30.375V41.1429H47.25V13.7143Z" fill="#C6ABFF"/>
                </svg>

                <div className="font-bold text-xl mb-2 text-light">Team collaboration</div>
                    <p className="text-light text-base">
                    Invite team members to boards and collaborate on projects together </p>
                </div>   
            </div>
            </div>
        </div>
        
    );
}