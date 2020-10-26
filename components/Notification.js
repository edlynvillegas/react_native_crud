import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme, Portal, Snackbar, Paragraph} from 'react-native-paper';
// Context
import { NoteContext } from '../context/NoteContext';

const Notification = () => {
  const theme = useTheme();
  const {snackbar, setSnackbar} = useContext(NoteContext)
  
  return (
    <Portal>
      <Snackbar
        style={{
            ...styles.snackbar,
            backgroundColor: theme.colors.card}}
        visible={snackbar.visible}
        duration={snackbar.duration}
        onDismiss={() => setSnackbar(false)}>
        <Paragraph style={{color: theme.colors.text}}>{snackbar.message}</Paragraph>
      </Snackbar>
    </Portal>
  );
};

const styles = StyleSheet.create({
    snackbar: {
        bottom: 80
    }
});

export default Notification;
