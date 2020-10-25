import React, {useEffect, useReducer, useContext} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import NoteNavigation from './NoteNavigation';
import { NoteContext } from '../context/NoteContext';

const Note = () => {
    const theme = useTheme();
    const { activeNote, isNotePage, newNote, setNewNote, NOTE_ACTIONS } = useContext(NoteContext);

    useEffect(() => {
        setNewNote({ type: isNotePage.mode, data: activeNote })
        console.log('---IS NOTE PAGE!', isNotePage)
    }, [])

    return (
        <View>
            <NoteNavigation />
            <View style={{...styles.note, backgroundColor: theme.colors.surface}}>
                <TextInput
                    style={styles.form_title}
                    onChangeText={text => setNewNote({ type: NOTE_ACTIONS.EDIT, data: {title: text}})}
                    value={newNote.title}
                    placeholder="Title"
                    autoCompleteType="off"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.form_note}
                    onChangeText={text => setNewNote({ type: NOTE_ACTIONS.EDIT, data: {note: text}})}
                    value={newNote.note}
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
