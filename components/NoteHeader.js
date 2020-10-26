import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { useTheme, IconButton, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
// Context
import { NoteContext } from '../context/NoteContext';
// API
import { saveNote, editNote, removeNote } from '../ApiService';

const NoteNavigation = () => {
  const theme = useTheme();
  const { setNotePage, activeNote, notes, setNotes, initNote, isNotePage, NOTE_ACTIONS, setSnackbar } = useContext(NoteContext);
  const [visible, setVisible] = useState(false);

  // Back to home
  const backPage = () => {
    if (isNotePage.mode===NOTE_ACTIONS.NEW) {
      postNote(initNote)
    } else {
      modNote()
    }
    setNotePage({ visible: false })
  };

  // Delete note
  const deleteNote = () => {
    hideDialog()
    remNote()
  };
  
  // Show dialog
  const showDialog = () => setVisible(true);

  // Hide dialog
  const hideDialog = () => setVisible(false);

  // API Call: Save note
  const postNote = () => {
    saveNote(initNote).then(() => {
      setNotes(prev => ([initNote, ...prev]))
      setSnackbar({ visible: true, message: 'Successfully saved!'})
    })
    .catch(() => setSnackbar({ visible: true, message: 'Error saving note..'}))
  }

  // API Call: Edit note
  const modNote = () => {
    const idx = notes.map(o => o.id).indexOf(activeNote);
    const t = notes[idx].title === initNote.title;
    const n = notes[idx].note === initNote.note;
    if (!(t && n)) { // edited
      editNote(initNote)
        .then(() => {
          setNotes(prev => {
            prev.splice(idx, 1);
            return [initNote, ...prev];
          })
          setSnackbar({ visible: true, message: 'Successfully edited!'})
        })
        .catch(() => setSnackbar({ visible: true, message: 'Error editing note..'}))
    }
  }

  // API Call: Remove note
  const remNote = () => {
    if (isNotePage.mode===NOTE_ACTIONS.NEW) {
      var arr = [...notes];
      const index = arr.map(o => o.id).indexOf(activeNote);
      if (index !== -1) {
          arr.splice(index, 1);
          setNotes(arr)
      }
      setNotePage({ visible: false })
    } else {
      removeNote(activeNote)
        .then(() => {
          var arr = [...notes];
          const index = arr.map(o => o.id).indexOf(activeNote);
          if (index !== -1) {
              arr.splice(index, 1);
              setNotes(arr)
          }
          setSnackbar({ visible: true, message: 'Successfully deleted!'})
          setNotePage({ visible: false })
        })
        .catch(() => setSnackbar({ visible: true, message: 'Error deleting note..'}))
    }
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
  },
});

export default NoteNavigation;
