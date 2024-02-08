import { useState } from "react";
import logo from "./assets/nlw-expert-logo.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
  const [notes, setNotes] = useState([
    { id: 1, date: new Date(), content: "Hello World 1" },
    { id: 2, date: new Date(), content: "Hello World 2" },
    { id: 3, date: new Date(), content: "Hello World 3" },
  ]);

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />

      <form className="">
        <input
          className="w-full bg-transparent border-none outline-none text-3xl font-semibold tracking-tight placeholder:text-slate-500"
          placeholder="Busque em suas notas..."
        />
      </form>
      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />

        {notes.map(note => {
          return <NoteCard key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}
