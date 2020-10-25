import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { useTheme, IconButton, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { NoteContext } from '../context/NoteContext';

const NoteNavigation = () => {
  const theme = useTheme();
  const { setNotePage, activeNote, notes, setNotes } = useContext(NoteContext);
  const [visible, setVisible] = useState(false);

  const backPage = () => setNotePage({ visible: false });
  const deleteNote = () => {
    var arr = [...notes];
    const index = arr.map(o => o.note_id).indexOf(activeNote);
    console.log('DELETE THIS:', index)
    if (index !== -1) {
        arr.splice(index, 1);
        setNotes(arr)
    }
    backPage()
  };
  
  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  
  return (
    <View style={{...styles.header, backgroundColor: theme.colors.surface}}>
        {/* <IconButton
            icon="chevron-left"
            color={theme.colors.primary}
            size={30}
            accessibilityLabel="Back"
            onPress={() => backPage()}
        /> */}
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
