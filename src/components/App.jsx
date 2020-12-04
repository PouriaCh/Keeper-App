import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notesData from "../notes";

function App(){
    return (
    <div>
        <Header />
        {notesData.map(note => <Note noteTitle={note.title} noteContent={note.content} key={note.key}/>)}
        <Footer />
    </div>);
};

export default App;