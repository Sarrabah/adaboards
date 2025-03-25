import React, { useEffect, useState } from "react";
import { BoardInterface } from "../types/Board";

export const BoardsPage : React.FC=() => {
    const [boards, setBoards] = useState<BoardInterface[]>([]);

    const allBoards = async () => {
        const data = await fetch ("https://adaboards-api.vercel.app/api/boards",{
            method: "GET",
            headers: {
                "X-No-Auth": "true",
            }
        });
        const jsonData = await data.json();
        return jsonData;
    }
    useEffect(()=> {
        allBoards().then((bd) => setBoards(bd));
    }, [])
    
    return(
        <div>
            <div className= "flex justify-between pt-6 pr-6">
                <h1 className="order-1 font-fancy text-[40px] text-light"> Hello, <text className="text-primary">Ada Lovelace</text> !</h1>
                <button className="order-2 font-title text-[22px] bg-primary font-bold py-2 px-4 rounded-sm">Add board</button>
            </div>
            <div className="flex flex-wrap">
                <div>
                    {boards.map((value)=> {
                        return (
                                <div className="text-light border-2 border-solid"> {value.name}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}