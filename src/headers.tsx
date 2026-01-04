import Ping from "./ping";
import Ask from "./Ask";
import Url from "./Url";
import Models from "./Models";
import { useState } from "react";

export default function Headers(){

    const [page, setPage] = useState("");


    return(
        <div>
            <h1>AI UI</h1>
            <p><b>A UI for Ollama</b></p>
            <br />
            <div className="btn-group">
                <button className="btn btn-primary" onClick={() => setPage("ask")}>Ask</button>
                <button className="btn btn-primary" onClick={() => setPage("url")}>Edit URL</button>
                <button className="btn btn-primary" onClick={() => setPage("models")}>Models</button>
            </div>
            <hr />
            <Ping/>
            <hr />
            {page == "ask" && <Ask/>}
            {page == "url" && <Url/>}
            {page == "models" && <Models/>}
        </div>
    )
}