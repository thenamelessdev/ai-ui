import { useState } from "react";

export default function Ping(){
    const [ stat, editStat ] = useState("loading...");

    async function ping() {
        try{
            const response = await fetch("http://localhost:11434");
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