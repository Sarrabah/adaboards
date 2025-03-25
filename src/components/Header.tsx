import React from "react";
import { Logo } from "../icons/Logo";
export const Header:React.FC= () => {
    return(
        <header className= "flex justify-between">
            <div className="order-1 flex justify-between pt-6 pl-6 text-light">
                <Logo />
                <p className="font-title font-bold text-[26px] ml-2 ">AdaBoards</p>
            </div>
            <div className="order-2 pt-6 pr-6 " >
                <button className="font-title text-[22px] bg-light font-bold py-2 px-4 rounded-sm ">Log out</button>
            </div>
        </header>
    );
}
