import React, { useState } from "react";

function Form(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target; 

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
          title: "",
          content: ""
        });
        event.preventDefault();
    }

    return (
        <div id="form-container">
            <form>
                <input name="title" onChange={handleChange} placeholder="Title" value={note.title}></input>
                <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="4" cols="33" value={note.content}></textarea>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default Form;