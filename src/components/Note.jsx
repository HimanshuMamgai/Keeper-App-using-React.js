import React, { useState } from "react";

function Note(props) {

    const [isContentEditable, setContentEditable] = useState(false);

    function handleDelete() {
        props.onDelete(props.id);
    }

    function handleEdit() {
        setContentEditable(true);
        document.getElementById("save-btn").style.display = "block";
    }

    function handleSave() {
        setContentEditable(false);
        document.getElementById("save-btn").style.display = "none";
    }

    return (
        <div id="note">
            <h1 contentEditable={isContentEditable ? "true" : "false"}>{props.title}</h1>
            <p contentEditable={isContentEditable ? "true" : "false"}>{props.content}</p>
            <button onClick={handleDelete} className="delete">DELETE</button>
            <button onClick={handleEdit}>EDIT</button>
            <button onClick={handleSave} id="save-btn">SAVE</button>
        </div>
    )
}

export default Note;