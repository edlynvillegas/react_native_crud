import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { useTheme, IconButton, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { NoteContext } from '../context/NoteContext';
// API
import { saveNote, editNote, removeNote } from '../ApiService';

const NoteNavigation = () => {
  const theme = useTheme();
  const { setNotePage, activeNote, notes, setNotes, initNote, isNotePage, NOTE_ACTIONS } = useContext(NoteContext);
  const [visible, setVisible] = useState(false);

  const backPage = () => {
    if (isNotePage.mode===NOTE_ACTIONS.NEW) {
      setNotes(prev => ([initNote, ...prev]))
      postNote(initNote)
    } else {
      const newItems = [...notes];
      const idx = notes.map(o => o.id).indexOf(activeNote);
      const t = newItems[idx].title === initNote.title;
      const n = newItems[idx].note === initNote.note;
      if (!(t && n)) { // edited
        setNotes(prev => {
          newItems.splice(idx, 1);
          return [initNote, ...newItems];
        })
        modNote(initNote)
      }
    }
    setNotePage({ visible: false })
  };
  const deleteNote = () => {
    var arr = [...notes];
    const index = arr.map(o => o.id).indexOf(activeNote);
    if (index !== -1) {
        arr.splice(index, 1);
        setNotes(arr)
    }
    remNote(activeNote);
    setNotePage({ visible: false })
  };
  
  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const postNote = (newNote) => {
    saveNote(newNote).then(() => {
      console.log('Successfully added!')
    }).catch(({ message }) => {
      console.log('Fetch Error:', message)
    })
  }
  const modNote = (newNote) => {
    editNote(newNote).then(() => {
      console.log('Successfully edited!')
    }).catch((err) => {
      console.log('Edit Error:', err)
    })
  }
  const remNote = (id) => {
    removeNote(id).then(() => {
      console.log('Successfully deleted!')
    }).catch((err) => {
      console.log('Delete Error:', err)
    })
  }
  
  return (
    <View style={{...styles.header, backgroundColor: theme.colors.surface}}>
        <Button
          style={{
            ...styles.button,
            color: theme.colors.text
          }}
          icon="chevron-left"
          mode="outlined"
          onPress={() => backPage()}>Back</Button>
        <IconButton
            icon="trash-can"
            color={theme.colors.primary}
            size={20}
            accessibilityLabel="Delete"
            onPress={() => showDialog()}
        />
        <Portal>
          <Dialog style={{backgroundColor:theme.colors.card}} visible={visible} onDismiss={hideDialog}>
            <Dialog.Content>
              <Paragraph>Are you sure you want to delete this note?</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => deleteNote()}>Delete</Button>
              <Button onPress={() => hideDialog()}>Cancel</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    paddingVertical: 15,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    padding: 0,
  }
});

export default NoteNavigation;
