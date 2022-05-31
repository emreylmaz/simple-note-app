import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../redux/notesSlice'

export default function Form() {
    const [searchQuery,setSearchQuery] = useState("")
    const dispatch = useDispatch()

    const handleChange = e => {
        console.log(e.target.value)
        setSearchQuery(e.target.value)
        dispatch(search(searchQuery))
    }

    return (
        <section>
            <h1 style={{"fontSize":42, "marginTop":50, "fontWeight":"700"}}>Redux Note App</h1>
            <input className="searchInput" type="text" placeholder='Search ...' value={searchQuery} onChange={handleChange}
            />

        </section>
    )
}