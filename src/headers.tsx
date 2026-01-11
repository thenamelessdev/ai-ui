import Ping from "./ping";
import Ask from "./Ask";
import Url from "./Url";
import Models from "./Models";
import { useState } from "react";

export default function Headers(){

    const [page, setPage] = useState("");


    return(
        <div>

            <nav className="navbar bg-body-tertiary navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src="Public/ai ui logo.svg" alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
                AI UI
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => setPage("ask")} style={{cursor: "pointer"}}>Ask</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" onClick={() => setPage("url")} style={{cursor: "pointer"}}>Edit URL</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" onClick={() => setPage("models")} style={{cursor: "pointer"}}>Models</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>

            <hr />
            <Ping/>
            <hr />
            {page == "ask" && <Ask/>}
            {page == "url" && <Url/>}
            {page == "models" && <Models/>}
        </div>
    )
}