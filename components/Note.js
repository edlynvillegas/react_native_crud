import React, {useEffect, useState, useContext} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import { v4 as uuid } from 'uuid';

// Components
import NoteHeader from './NoteHeader';

import { NoteContext } from '../context/NoteContext';

const Note = () => {
    const theme = useTheme();
    const { activeNote, isNotePage, notes, initNote, setInitNote, NOTE_ACTIONS } = useContext(NoteContext);
    const [activeIndex, setIndex] = useState(0);

    useEffect(() => {
        // setNewNote({ type: isNotePage.mode, data: initialNewNote })
        if (isNotePage.mode===NOTE_ACTIONS.NEW) {
            console.log('NOTES:', notes.length)
            const initialNewNote = {
                id: uuid(),
                title: '',
                note: '',
            }
            setInitNote(initialNewNote)
            // setNotes(prev => {
            //     return [initialNewNote, ...prev];
            // })
        } else {
            const idx = notes.map(o => o.id).indexOf(activeNote);
            // console.log('EDIT NOTE', idx)
            setIndex(idx)
            setInitNote(notes[idx])
            // setInitNote(notes[idx])
        }
    }, [])

    const editNote = (data) => {
        setInitNote(prev => ({...prev, ...data}))
        // setNotes(prev => {
        //     const newItems = [...prev];
        //     const newItem = {...newItems[activeIndex], ...data, last_update: new Date()};
        //     newItems[activeIndex] = newItem;
    
        //     return newItems;
        // })
    }

    return (
        <View>
            <NoteHeader />
            <View style={{...styles.note, backgroundColor: theme.colors.surface}}>
                <TextInput
                    style={{...styles.form_title, color: theme.colors.text}}
                    onChangeText={text => editNote({ title: text })}
                    value={initNote.title}
                    placeholder="Title"
                    placeholderTextColor={theme.colors.card}
                    autoCompleteType="off"
                    autoCorrect={false}
                />
                <TextInput
                    style={{...styles.form_note, color: theme.colors.text}}
                    onChangeText={text => editNote({ note: text })}
                    value={initNote.note}
                    placeholder="Note"
                    placeholderTextColor={theme.colors.card}
                    autoCompleteType="off"
                    autoCorrect={false}
                    multiline
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    note: {
        width: '100%',
        height: '100%',
        padding: 20,
    },
    form_title: {
        fontSize: 23,
        fontWeight: "600",
        padding: 0,
        marginBottom: 10,
    },
    form_note: {
        fontSize: 16,
        padding: 0,
    },
});

export default Note;
