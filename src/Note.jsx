import React, {useState} from "react";
import PopUp from "./PopUp";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


function Note(props) {

  const [note, setNote] = useState({
    id: props.id,
    title: props.title,
    content: props.content
  });

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit(event) {
    const { name, value } = event.target;
    if (name === "content") {
      event.target.style.height = 'inherit';
      event.target.style.height = `${Math.min(0.6*window.innerHeight, event.target.scrollHeight)}px`; 
    }

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });

  }

  function makeEdit(event) {
    props.onEdit(props.id, note);
    //event.preventDefault();
  }

  return (
    <div className="note">
      <h1>{props.title.substring(0, 30)+"..."}</h1>
      <p>{props.content.substring(0, 200)+"..."}</p>
      <Tooltip title="Delete" onClick={handleClick}>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
      <PopUp handleEdit={handleEdit} makeEdit={makeEdit} title={note.title} content={note.content} />
    </div>
  );
}

export default Note;
