import { createSlice, nanoid } from "@reduxjs/toolkit";


const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [],
        searchQuery: "",

    },
    reducers: {
        addNote: (state, action) => {
            state.items.push({
                "id": nanoid(),
                "note": action.payload.note,
                "color": action.payload.color,
            })
        },

        search: (state, action) => {
            state.searchQuery = action.payload
        }
    }

})

export const {addNote, search} = notesSlice.actions
export default notesSlice.reducer