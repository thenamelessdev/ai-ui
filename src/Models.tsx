import { useState } from "react";
import Cookies from "js-cookie";

export default function Models(){
    const [ name, setName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ model, setModel ] = useState("");
    const [ models, setModels ] = useState("");
    const [ deleteModel, setDeleteModel ] = useState("");
    const url = Cookies.get("url") || "http://localhost:11434";


    async function handleCreateClick() {
        if(name != "" || description != "" || model != ""){
            try{
                await fetch(`${url}/api/create`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        from: model,
                        model: name,
                        system: description
                    })
                });
            }
            catch (err) {
                console.error(`Error while creating model: ${err}`);
            }
        }
    }

    async function handleDeleteClick() {
        if(deleteModel != ""){
            try{
                await fetch(`${url}/api/delete`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        model: deleteModel
                    })
                });
            }
            catch (err) {
                console.error(`Error while deleting model: ${err}`);
            }
        }
    }

    async function updateModels() {
        try{
            const response = await fetch(`${url}/api/tags`);
            const json = await response.json();
            if(response.ok){
                const models = json.models;
                const selects = models.map((modelObj:any) => (
                    <option value={modelObj.name} key={modelObj.name}>{modelObj.name}</option>
                ))
                setModels(selects);

            }
        }
        catch{
            setModels("");
        }
    }


    return(
        <div><br /><br />
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modelModal" onClick={updateModels}>
            Create Model
            </button>
            <br /><br />
            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModelModal" onClick={updateModels}>
            Delete Model
            </button>

            <div className="modal fade" id="modelModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Create Model</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <label htmlFor="modelName">Name:</label>
                    <input type="text" id="modelName" className="form-control" onChange={(e) => setName(e.target.value)} />
                    <br />
                    <label htmlFor="modelModel">Model:</label>
                    <select onChange={(e) => setModel(e.target.value)} className="form-select">
                        <option selected>Select one</option>
                        {models}
                    </select>
                    <br />
                    <label htmlFor="modelDescription">Description:</label>
                    <input type="text" id="modelDescription" className="form-control" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleCreateClick}>Create Model</button>
                </div>
                </div>
            </div>
            </div>

            <div className="modal fade" id="deleteModelModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Model</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <label htmlFor="modelModel">Model:</label>
                    <select onChange={(e) => setDeleteModel(e.target.value)} className="form-select">
                        <option selected>Select one</option>
                        {models}
                    </select>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDeleteClick}>Delete Model</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}