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
        console.log("data",data)
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
                <h1 className="order-1 font-fancy text-[40px] text-light"> Hello, <span className="text-primary">Ada Lovelace</span> !</h1>
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
                            <div className="border-white-200 max-w-2xs rounded text-light bg-gray-800 border-r border-b border-l border-t "> {value.name}
                            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.24286 0.967969C7.53214 0.371875 8.12679 0 8.775 0H15.225C15.8732 0 16.4679 0.371875 16.7571 0.967969L17.1429 1.75H22.2857C23.2339 1.75 24 2.53203 24 3.5C24 4.46797 23.2339 5.25 22.2857 5.25H1.71429C0.766071 5.25 0 4.46797 0 3.5C0 2.53203 0.766071 1.75 1.71429 1.75H6.85714L7.24286 0.967969ZM1.71429 7H22.2857V24.5C22.2857 26.4305 20.7482 28 18.8571 28H5.14286C3.25179 28 1.71429 26.4305 1.71429 24.5V7ZM6.85714 10.5C6.38571 10.5 6 10.8938 6 11.375V23.625C6 24.1063 6.38571 24.5 6.85714 24.5C7.32857 24.5 7.71429 24.1063 7.71429 23.625V11.375C7.71429 10.8938 7.32857 10.5 6.85714 10.5ZM12 10.5C11.5286 10.5 11.1429 10.8938 11.1429 11.375V23.625C11.1429 24.1063 11.5286 24.5 12 24.5C12.4714 24.5 12.8571 24.1063 12.8571 23.625V11.375C12.8571 10.8938 12.4714 10.5 12 10.5ZM17.1429 10.5C16.6714 10.5 16.2857 10.8938 16.2857 11.375V23.625C16.2857 24.1063 16.6714 24.5 17.1429 24.5C17.6143 24.5 18 24.1063 18 23.625V11.375C18 10.8938 17.6143 10.5 17.1429 10.5Z" fill="white"/>
                            </svg>
                            <p> Edited few minutes ago</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            )}
        </div>
    );
}