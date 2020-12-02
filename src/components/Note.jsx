import React from "react";

function Note() {
  let newNote = {
    title: "test Title",
    content: "test Content"
  };
  return (
    <div className="note">
      <h1>{newNote.title}</h1>
      <p>{newNote.content}</p>
    </div>
  );
}

export default Note;