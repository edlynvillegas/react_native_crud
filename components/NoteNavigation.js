import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { useTheme, IconButton } from 'react-native-paper';
import { NoteContext } from '../context/NoteContext';

const NoteNavigation = () => {
  const theme = useTheme();
  const { setNotePage } = useContext(NoteContext);

  const backPage = () => setNotePage({ visible: false });
  
  return (
    <View style={{...styles.header, backgroundColor: theme.colors.surface}}>
        <IconButton
            icon="plus"
            color={theme.colors.primary}
            size={20}
            animated={true}
            accessibilityLabel="Back"
            onPress={() => backPage()}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    padding: 15,
  },
});

export default NoteNavigation;
