import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Ping(){
    const [ stat, editStat ] = useState("loading...");
    const [ version, setVersion ] = useState("loading...");

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
        try{
            const response = await fetch(`${getUrl()}/api/version`);
            const json = await response.json();
            if(response.ok){
                setVersion(json.version);
            }
            else{
                setVersion("error");
            }
        }
        catch{
            setVersion("error");
        }
    }

    useEffect(() => {
        ping();

        setInterval(() => {
            ping();
        }, 5000);
    }, [])

    return(
        <div>
            <p>Status: {stat}</p>
            <p>Version: {version}</p>
        </div>
    );
}