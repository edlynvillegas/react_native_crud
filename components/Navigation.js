import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {FAB, useTheme} from 'react-native-paper';
import { NoteContext } from '../context/NoteContext';

const Navigation = () => {
    const theme = useTheme();
    const { setNotePage, NOTE_ACTIONS } = useContext(NoteContext);

    return (
        <FAB
            style={{...styles.fab, backgroundColor: theme.colors.primary}}
            large
            icon="plus"
            onPress={() => setNotePage({ visible: true, mode: NOTE_ACTIONS.NEW })}
        />
    );
};

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
});

export default Navigation;
