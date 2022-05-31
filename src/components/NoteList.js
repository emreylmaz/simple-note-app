import React from 'react'
import { useSelector } from 'react-redux'

export default function NoteList() {
    const notes = useSelector(state=>state.notes.items)
    const searchQuery = useSelector(state=>state.notes.searchQuery)
    const filteredItems = notes.filter(item=>item.note.includes(searchQuery))
    return (

        <div className='noteList'>
            {filteredItems.map(noteItem => (
                <span key={noteItem.id} className="note" style={{ "backgroundColor": noteItem.color }}>
          {noteItem.note}
        </span>
            ))}
        </div>
    )
}