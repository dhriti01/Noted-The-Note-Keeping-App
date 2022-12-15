import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState({
    isSearch: false,
    searchStr: "",
    subNotes: []
  });

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== id;
      });
    });

    setSearch(prevValue => {
      return {
        ...prevValue,
        subNotes: prevValue.subNotes.filter((noteItem) => {
          return noteItem.id !== id;
        })
      };
    })
  }

  function editNote(id, newValue) {
    const idx = notes.findIndex((noteItem) => noteItem.id === id);
    let newNotes = [...notes];
    newNotes[idx] = newValue;
    setNotes(newNotes);

    const searchIdx = search.subNotes.findIndex((noteItem) => noteItem.id === id);
    if (searchIdx !== -1) {
      let newSearchNotes = [...search.subNotes];
      newSearchNotes[searchIdx] = newValue;
      setSearch(prevValue => {
        return {
          ...prevValue,
          subNotes: newSearchNotes
        };
      })
    }
  }

  function searchNote(event) {
    const value = event.target.value;
    const allNotes = notes;
    setSearch({
      isSearch: true,
      searchStr: value,
      subNotes: (allNotes.filter(noteItem => {
        return noteItem.title.includes(value) || noteItem.content.includes(value);
      }))
    })
  }

  function clearSearch() {
    setSearch({
      isSearch: false,
      searchStr: "",
      subNotes: []
    });
  }

  function renderNotes (noteItem, index) {
    return (
      <Note
        key={noteItem.id}
        id={noteItem.id}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
        onEdit={editNote}
      />
    );
  }

  return (
    <div>
      <Header onSearch={searchNote} onClear={clearSearch} value={search.searchStr} />
      <CreateArea onAdd={addNote} display={!search.isSearch} />
      {search.isSearch ? (search.subNotes.length>0 ? search.subNotes.map(renderNotes) : <p id="no-match">No matching results.</p>) : notes.map(renderNotes)}
      <Footer />
    </div>
  );
}

export default App;
