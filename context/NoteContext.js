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
const initialNewNote = {
    title: '',
    description: '',
    date_added: new Date(),
    last_update: new Date(),
}
const newNoteReducer = (state, action) => {
    console.log('ACTION!', action)
    switch(action.type) {
        case NOTE_ACTIONS.NEW:
            return initialNotePage;
        case NOTE_ACTIONS.VIEW:
            return action.data;
        case NOTE_ACTIONS.EDIT:
            return {...state, ...action.data};
        default:
            return state;
    }
}

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
    const [isNotePage, setNotePage] = useState(initialNotePage);
    const [activeNote, setActiveNote] = useState(0);
    const [newNote, setNewNote] = useReducer(newNoteReducer, initialNewNote);
    const [notes, setNotes] = useState([
      {
        id: 1,
        title: 'John Doe',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/15/2020',
        last_update: '01/15/2020',
      },
      {
        id: 2,
        title: 'Will Smith',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/23/2020',
        last_update: '01/23/2020',
      },
      {
        id: 3,
        title: 'Mary Jane',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/26/2020',
        last_update: '01/26/2020',
      },
      {
        id: 4,
        title: 'John Doe',
        position: 'Web Developer Team Lead',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/15/2020',
        last_update: '01/15/2020',
      },
      {
        id: 5,
        title: 'Will Smith',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/23/2020',
        last_update: '01/23/2020',
      },
      {
        id: 6,
        title: 'Mary Jane',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/26/2020',
        last_update: '01/26/2020',
      },
      {
        id: 7,
        title: 'Will Smith',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/23/2020',
        last_update: '01/23/2020',
      },
      {
        id: 8,
        title: 'Mary Jane',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        date_added: '01/26/2020',
        last_update: '01/26/2020',
      },
    ]);
    

    const autoSave = () => {
        setNotePage({ visible: false })
        if (isNotePage.mode===NOTE_ACTIONS.NEW) {
            setNotes(prev => {
                return [newNote, ...prev];
            })
        } else {
            setNotes(prev => {
                const newItems = [...prev];
                const idx = prev.map(o => o.id).indexOf(newNote.id);
                const newItem = {...newNote, last_update: new Date()};
                newItems[idx] = newItem;
        
                return newItems;
            })
        }
    }

    return (
        <NoteContext.Provider value={{NOTE_ACTIONS, isNotePage, setNotePage, activeNote, setActiveNote, notes, setNotes, newNote, setNewNote, autoSave}}>
            {children}
        </NoteContext.Provider>
    )
}

export default React.memo(NoteProvider);