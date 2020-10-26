import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import { useTheme } from 'react-native-paper';
// Components
import NoteMapper from './NoteMapper';

const Main = () => {
  const theme = useTheme();
  
  return (
    <ScrollView>
        <View style={{...styles.sectionContainer, backgroundColor: theme.colors.background}}>
            <NoteMapper />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    sectionContainer: {
      flex: 1,
      paddingHorizontal: 15,
      paddingTop: 5,
      paddingBottom: 40,
    },
});

export default Main;
