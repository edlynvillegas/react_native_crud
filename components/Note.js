import React, {useEffect, useReducer, useContext} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import NoteNavigation from './NoteNavigation';
import { NoteContext } from '../context/NoteContext';
const initialNewNote = {
    title: '',
    note: '',
    date_added: new Date(),
    last_update: new Date(),
}
const Note = () => {
    const theme = useTheme();
    const { activeNote, isNotePage, notes, setNotes, NOTE_ACTIONS } = useContext(NoteContext);

    useEffect(() => {
        // setNewNote({ type: isNotePage.mode, data: initialNewNote })
        if (isNotePage.mode===NOTE_ACTIONS.NEW) {
            setNotes(prev => {
                return [initialNewNote, ...prev];
            })
        }
        console.log('---IS NOTE PAGE!', isNotePage)
    }, [])

    const editNote = (data) => {
        setNotes(prev => {
            const newItems = [...prev];
            // const idx = prev.map(o => o.id).indexOf(newNote.id);
            const newItem = {...newItems[activeNote], ...data, last_update: new Date()};
            newItems[activeNote] = newItem;
    
            return newItems;
        })
    }

    return (
        <View>
            <NoteNavigation />
            <View style={{...styles.note, backgroundColor: theme.colors.surface}}>
                <TextInput
                    style={styles.form_title}
                    onChangeText={text => editNote({ title: text })}
                    value={notes[activeNote].title}
                    placeholder="Title"
                    autoCompleteType="off"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.form_note}
                    onChangeText={text => editNote({ note: text })}
                    value={notes[activeNote].note}
                    placeholder="Note"
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
