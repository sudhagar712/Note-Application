import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'

const TagInput = ({tags, setTags}) => {

    const [inputValue, setInputValue] = useState("")

    const addNewTag = () => {
       if(inputValue.trim() !== ""){
        setTags([...tags, inputValue.trim()])
        setInputValue("")
       }
    }
  
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addNewTag()
        }
    }


    const handleRemoveTag = (tag) => {
        const updatedTags = tags.filter((t) => t !== tag)
        setTags(updatedTags)
    }


  return (
    <div>
      {tags?.length > 0 && (
        <div className='flex items-center gap-2 flex-wrap mt-2'>
          {tags.map((tag, index) => {
            return (
              <span key={index}>
                #{tag}
                <button onClick={() => {handleRemoveTag(tag)}}>
                  <MdAdd />
                </button>
              </span>
            );
          })}
        </div>
      )}

      <div className="flex items-center gap-4 mt-4 ">
        <input
          type="text"
          className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
          placeholder="Add tags"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={() => {
            addNewTag();
          }}
          className="w-8 h-8 flex items-center justify-center rounded border border-blue-700 hover:bg-blue-700"
        >
          <MdAdd className="text-2xl text-blue-400 hover:text-white" />
        </button>
      </div>
    </div>
  );
}

export default TagInput
