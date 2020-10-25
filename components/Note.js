import React, {useEffect, useState, useContext} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import { v4 as uuid } from 'uuid';
// Components
import NoteHeader from './NoteHeader';

import { NoteContext } from '../context/NoteContext';

const Note = () => {
    const theme = useTheme();
    const { activeNote, isNotePage, notes, setNotes, NOTE_ACTIONS } = useContext(NoteContext);
    const [activeIndex, setIndex] = useState(0);

    useEffect(() => {
        // setNewNote({ type: isNotePage.mode, data: initialNewNote })
        if (isNotePage.mode===NOTE_ACTIONS.NEW) {
            const initialNewNote = {
                note_id: uuid(),
                title: '',
                note: '',
                date_added: new Date(),
                last_update: new Date(),
            }
            setNotes(prev => {
                return [initialNewNote, ...prev];
            })
        } else {
            const idx = notes.map(o => o.note_id).indexOf(activeNote);
            setIndex(idx)
        }
    }, [])

    const editNote = (data) => {
        setNotes(prev => {
            const newItems = [...prev];
            const newItem = {...newItems[activeIndex], ...data, last_update: new Date()};
            newItems[activeIndex] = newItem;
    
            return newItems;
        })
    }

    return (
        <View>
            <NoteHeader />
            <View style={{...styles.note, backgroundColor: theme.colors.surface}}>
                <TextInput
                    style={{...styles.form_title, color: theme.colors.text}}
                    onChangeText={text => editNote({ title: text })}
                    value={notes[activeIndex].title}
                    placeholder="Title"
                    placeholderTextColor={theme.colors.text}
                    autoCompleteType="off"
                    autoCorrect={false}
                />
                <TextInput
                    style={{...styles.form_note, color: theme.colors.text}}
                    onChangeText={text => editNote({ note: text })}
                    value={notes[activeIndex].note}
                    placeholder="Note"
                    placeholderTextColor={theme.colors.text}
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
        fontSize: 20,
        padding: 0,
        marginBottom: 10,
    },
    form_note: {
        fontSize: 16,
        padding: 0,
    },
});

export default Note;
