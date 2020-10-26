import React, {useEffect, useContext} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import { v4 as uuid } from 'uuid';
// Components
import NoteHeader from './NoteHeader';
// Context
import { NoteContext } from '../context/NoteContext';

const Note = () => {
    const theme = useTheme();
    const { activeNote, isNotePage, notes, initNote, setInitNote, NOTE_ACTIONS } = useContext(NoteContext);

    useEffect(() => {
        if (isNotePage.mode===NOTE_ACTIONS.NEW) {
            setInitNote({
                id: uuid(),
                title: '',
                note: '',
            })
        } else {
            const idx = notes.map(o => o.id).indexOf(activeNote);
            setInitNote(notes[idx])
        }
    }, [])

    const editNote = (data) => setInitNote(prev => ({...prev, ...data}))

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
