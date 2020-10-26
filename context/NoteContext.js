import React, { createContext, useState, useReducer } from 'react'

const NOTE_ACTIONS = {
    NEW: 'NEW',
    VIEW: 'VIEW',
    EDIT: 'EDIT'
}
const initialNotePage = {
    visible: false,
    mode: NOTE_ACTIONS.NEW
}

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
    const [isNotePage, setNotePage] = useState(initialNotePage);
    const [activeNote, setActiveNote] = useState(0);
    const [initNote, setInitNote] = useState([]);
    const [notes, setNotes] = useState([]);

    return (
        <NoteContext.Provider value={{NOTE_ACTIONS, isNotePage, setNotePage, activeNote, setActiveNote, notes, setNotes, initNote, setInitNote}}>
            {children}
        </NoteContext.Provider>
    )
}

export default React.memo(NoteProvider);