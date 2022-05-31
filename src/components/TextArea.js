import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../redux/notesSlice'
import {AiOutlineCheck} from "react-icons/ai"

export default function TextArea() {
    const [activeColor,setActiveColor] = useState("#F06292")
    const [note,setNote] = useState("")
    const dispatch = useDispatch()

    let colors = [
        "#F06292",
        "#BA68C8",
        "#FFD54F",
        "#4FC3F7",
        "#AED581",
    ]

    const handleClick = color => {
        setActiveColor(color)
    }

    const handleChange = e => {
        setNote(e.target.value)
    }

    const pushNewNote = () => {
        const newNote = {
            "note":note,
            "color":activeColor
        }
        dispatch(addNote(newNote))
        setNote("")
    }

    return (
        <section className='textarea'>
            <textarea className="noteInput" type="textarea" placeholder='Enter your not here...' value={note} onChange={handleChange}/>
            <div className="noteFooter">
                {colors.map((color, index) => (
                    <button
                        className={`noteColor ${activeColor===color?"active":""}`}
                        onClick={()=>handleClick(color)}
                        key={index}
                        style={{ "backgroundColor": color,}}>

                        {activeColor===color && <AiOutlineCheck style={{color:"black",fontSize:25,marginTop:3,boxSizing:'border-box',fontWeight:'bolder'}}/>}

                    </button>
                ))}

                <button className='addNote' disabled={!note} onClick={pushNewNote}>ADD</button>
            </div>

        </section>
    )
}