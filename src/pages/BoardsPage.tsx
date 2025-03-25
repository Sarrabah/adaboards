import React, { useEffect, useState } from "react";
import { BoardInterface } from "../types/Board";


export const BoardsPage : React.FC=() => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [istoken, setIstoken] = useState(false)
    const login = async(e)=> {
        e.preventDefault()
        console.log("email",email)
        const response = await fetch("https://adaboards-api.vercel.app/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                email: email,
                password: password
            })
        })
        if(response.ok){
            console.log(response)
            const data = await response.json();
            localStorage.setItem("token", data.token);
            setIstoken(true)
            console.log(data);
        }
        else{
            console.error("An error is occured when fetching the url")
        }
    }
    const [boards, setBoards] = useState<BoardInterface[]>([]);
    // console.log(localStorage.getItem("token"))
    const allBoards = async () => {
        const data = await fetch ("https://adaboards-api.vercel.app/api/boards",{
            method: "GET",
            headers: {
                "Authorization":`Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
            },
        });
        const jsonData = await data.json();
        console.log(jsonData);
        return jsonData;
    }
    useEffect(()=> {
        if (localStorage.getItem("token") != null){
            setIstoken(true)
            allBoards().then((bd) => setBoards(bd));
        }
        else {
            console.log("no token")
        }
    }, [istoken])
 
    return(
        <div className="flex flex-col flex-grow">
            <div className= "flex justify-between pt-6 pr-6">
                <h1 className="order-1 font-fancy text-[40px] text-light"> Hello, <text className="text-primary">Ada Lovelace</text> !</h1>
                <button className="order-2 font-title text-[22px] bg-primary font-bold py-2 px-4 rounded-sm">Add board</button>
            </div>
            {istoken ==false ? (
            <form className="text-light" onSubmit={login}>
                <input name="email" type="text" placeholder="Email*"  value={email} onChange={e => {setEmail(e.target.value)}}/>
                <input name="password" type="password" placeholder="Password*"  value={password} onChange={e => {setPassword(e.target.value)}}/>
                <button type="submit" className="font-title text-[22px] bg-primary font-bold py-2 px-4 rounded-sm">
                Login
                </button>
            </form>) : (
            <div className="flex flex-wrap">
                <div>
                    {boards.map((value)=> {
                        return (
                            <div className="text-light border-2 border-solid"> {value.name}</div>
                        )
                    })}
                </div>
            </div>
            )}
        </div>
    );
}