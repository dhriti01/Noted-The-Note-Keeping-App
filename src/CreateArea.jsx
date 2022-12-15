import React, { useState} from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import {v4 as uuidv4} from 'uuid';

//import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState("inherit");

  function handleExpanded() {
    setIsExpanded(true);
    setHeight("6rem")
  }

  const [note, setNote] = useState({
    id: uuidv4(),
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "content") {
      event.target.style.height = 'inherit';
      event.target.style.height = `${Math.min(0.75*window.innerHeight, event.target.scrollHeight)}px`; 
    }
  
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {

    if (note.title === "" && note.content === "") {
      return null;
    }

    props.onAdd(note);
    setNote({
      id: uuidv4(),
      title: "",
      content: ""
    });
    setIsExpanded(false);
    setHeight("2rem");
    event.preventDefault();
  }

  console.log(height);
  if(props.display)
  {
    return (
      <div>
        <form className="create-note">
          {isExpanded ? (
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
              maxlength="100"
            />
          ) : null}
  
          <textarea
            name="content"
            onClick={handleExpanded}
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={isExpanded ? "3" : "1"}
            style={{height: height}}
          />
          <Zoom in={isExpanded}>
            <Fab onClick={submitNote}>
              <NoteAddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    );
  }

}

export default CreateArea;
