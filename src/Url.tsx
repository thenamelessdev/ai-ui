import Cookies from "js-cookie";
import { useState } from "react";

export default function Url(){
    const [ url, setUrl ] = useState(Cookies.get("url") || "http://localhost:11434");
    
    function handleChange(e:any){
        setUrl(e.target.value);
        Cookies.set("url", e.target.value, { expires: 7 });
    }
    
    return(
        <div>
            <input className="form-control w-25" type="text" value={url} onChange={handleChange} />
        </div>
    );
}