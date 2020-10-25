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
    const [notes, setNotes] = useState([
      {
        note_id: 1,
        title: 'John Doe',
        note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/15/2020',
        last_update: '01/15/2020',
      },
      {
        note_id: 2,
        title: 'Will Smith',
        note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/23/2020',
        last_update: '01/23/2020',
      },
      {
        note_id: 3,
        title: 'Mary Jane',
        note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/26/2020',
        last_update: '01/26/2020',
      },
      {
        note_id: 4,
        title: 'John Doe',
        position: 'Web Developer Team Lead',
        note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/15/2020',
        last_update: '01/15/2020',
      },
      {
        note_id: 5,
        title: 'Will Smith',
        note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/23/2020',
        last_update: '01/23/2020',
      },
      {
        note_id: 6,
        title: 'Mary Jane',
        note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/26/2020',
        last_update: '01/26/2020',
      },
      {
        note_id: 7,
        title: 'Will Smith',
        note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/23/2020',
        last_update: '01/23/2020',
      },
      {
        note_id: 8,
        title: 'Mary Jane',
        note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/26/2020',
        last_update: '01/26/2020',
      },
    ]);

    return (
        <NoteContext.Provider value={{NOTE_ACTIONS, isNotePage, setNotePage, activeNote, setActiveNote, notes, setNotes}}>
            {children}
        </NoteContext.Provider>
    )
}

export default React.memo(NoteProvider);