import React, {useState, useContext} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Portal} from 'react-native-paper';
import NoteCard from './NoteCard';
import Note from './Note';
import { NoteContext } from '../context/NoteContext';

const NoteMapper = () => {
    // const [visible, setVisible] = useState(false);
    const { isNotePage, activeNote, notes } = useContext(NoteContext);
    console.log('isNotePage', isNotePage)
    
    return (
        <View style={styles.note_mapper}>
            {
                notes.map((note, index) => <View style={styles.note_card} key={note.id}>
                    <NoteCard note={note} index={index} />
                </View>)
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
