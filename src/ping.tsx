import { useState } from "react";
import Cookies from "js-cookie";

export default function Ping(){
    const [ stat, editStat ] = useState("loading...");

    function getUrl(){
        return Cookies.get("url") || "http://localhost:11434";
    }

    async function ping() {
        try{
            const response = await fetch(getUrl());
            if(response.ok){
                editStat("working");
            }
            else{
                editStat("error");
            }
        }
        catch{
            editStat("error")
        }
    }
    ping()

    setInterval(() => {
        ping();
    }, 5000);

    return(
        <div>
            <p>Status: {stat}</p>
        </div>
    );
}