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

    return(
        <div>
            <p>Ping Ollama server</p>
            <button className="btn btn-primary" style={{marginTop: "0px"}} onClick={ping}>Ping</button>
            <p>Status: {stat}</p>
        </div>
    );
}