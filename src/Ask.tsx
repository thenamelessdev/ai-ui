import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Ask(){

    const [ aiRes, setAiRes ] = useState("Ask something");
    const [ modelSelects, setModelSelects ] = useState("");
    const [ selectedModel, selectModel ] = useState("");
    const [ message, setMessage ] = useState("");

    function getUrl(){
        return Cookies.get("url") || "http://localhost:11434";
    }

    const handleChange = (e:any) => {
        setMessage(e.target.value);
    }

    

    async function handleClick() {
        setMessage("");
        setAiRes("loading...");
        try{
            const response = await fetch(`${getUrl()}/api/generate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: selectedModel,
                    prompt: message,
                    stream: false
                })
            });
            const json = await response.json();
            if(response.ok){
                setAiRes(json.response);
            }
            else{
                setAiRes("error");
            }
        }
        catch{
            setAiRes("Error accessing the server");
        }
    }

    async function updateModels() {
        try{
            const response = await fetch(`${getUrl()}/api/tags`);
            const json = await response.json();
            if(response.ok){
                const models = json.models;
                const selects = models.map((modelObj:any) => (
                    <option value={modelObj.name} key={modelObj.name}>{modelObj.name}</option>
                ))
                setModelSelects(selects);

            }
        }
        catch{
            setModelSelects("");
        }
    }

    const handleModelUpd = (e:any) => {
        selectModel(e.target.value);
    }

    useEffect(() => {
        updateModels();
    }, [])

    return(
        <div>
            <select id="models" onChange={handleModelUpd} className="form-select" style={{width: "200px"}}><option value="missing" selected>Select a model</option>{modelSelects}</select>
            <br />
            <button className="btn btn-primary" onClick={updateModels}>Update</button>
            <br /><br />
            <div className="form-floating w-25">
                <input type="text" id="msgInp" className="form-control" value={message} placeholder="message" onChange={handleChange}/>
                <label htmlFor="msgInp">Message</label>
            </div>
            <button className="btn btn-success" onClick={handleClick}>Send</button>
            <br />
            <div>Response: {aiRes}</div>
        </div>
    )
}