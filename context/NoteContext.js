import React, { createContext, useState, useEffect } from 'react'

const NOTE_ACTIONS = {
    NEW: 'NEW',
    VIEW: 'VIEW',
    EDIT: 'EDIT'
}
const initialNotePage = {
    visible: false,
    mode: NOTE_ACTIONS.NEW
}
const initialSnackbar = {
    visible: false,
    message: 'Hey there! I\'m a Snackbar.',
    duration: 1000
}

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
    const [isNotePage, setNotePage] = useState(initialNotePage);
    const [activeNote, setActiveNote] = useState(0);
    const [initNote, setInitNote] = useState([]);
    const [notes, setNotes] = useState([]);
    const [snackbar, setSnackbar] = useState(initialSnackbar);

    return (
        <NoteContext.Provider value={{
          NOTE_ACTIONS,
          isNotePage, setNotePage,
          activeNote, setActiveNote,
          notes, setNotes,
          initNote, setInitNote,
          snackbar, setSnackbar}}>
            {children}
        </NoteContext.Provider>
    )
}

export default React.memo(NoteProvider);