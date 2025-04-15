import React, { useState } from "react";
import TagInput from "../TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  // Add Note
  const addNoteNew = async () => {};

  // Edit Note
  const EditNoteNew = async () => {};

  
  const handleAddNote = () => {
    if (!title) {
      setError("Title is required");
      return;
    }
    if (!content) {
      setError("Content is required");
      return;
    }
    setError("");
  };

  return (
    <div className="relative">
      <h1 className="text-primary font-medium lg:text-2xl text-md mb-6 ">
        {" "}
        ADD Notes
      </h1>
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>

      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Go to GYM At 5"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <label className="input-label">CONTENT</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2"
          placeholder="Content"
          rows={10}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </div>

      <div className="mt-4">
        <label className="input-label">Tags (optional)</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <button
        onClick={handleAddNote}
        className="btn-primary font-medium mt-5 p-3"
      >
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
