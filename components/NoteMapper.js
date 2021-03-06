import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Portal} from 'react-native-paper';
// Components
import NoteCard from './NoteCard';
import Note from './Note';
// Context
import { NoteContext } from '../context/NoteContext';
// API
import { getNotes } from '../ApiService';

const NoteMapper = () => {
    const [loading, setLoading] = useState(false);
    const { setNotes, isNotePage, activeNote, notes, setSnackbar } = useContext(NoteContext);
    
    useEffect(() => {
      fetchNotes()
    }, []);

    // useEffect(() => {
    //   console.log('--notes--', notes)
    // }, [notes]);

    const fetchNotes = () => {
      setLoading(true)
      getNotes().then(notes => {
        setLoading(false)
        setNotes(notes.data)
      }).catch(({ message }) => {
        setLoading(false)
        setSnackbar({ visible: true, message: 'Error fetching notes..'})
      })
    }
    
    return (
        <View style={styles.note_mapper}>
            {
              loading ? 
              <Title>Fetching your notes...</Title> :
              notes && notes.length > 0 ?
              notes.map(note => <View style={styles.note_card} key={note.id}>
                  <NoteCard note={note} />
              </View>) :
              <Title>Wow, such empty..</Title>
            }
            {
              isNotePage.visible ?
              <Portal>
                <Note note={activeNote} />
              </Portal> :
              null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    note_mapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: -5,
        marginRight: -5,
        marginBottom: 5,
    },
    note_card: {
      width: '50%',
      padding: 5,
    },
});

export default NoteMapper;
