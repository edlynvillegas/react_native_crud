import React, {useContext, useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import NoteMapper from './NoteMapper';
import { NoteContext } from '../context/NoteContext';

const Main = () => {
  const { autoSave } = useContext(NoteContext);

  // useEffect(() => {
  //   return () => autoSave()
  // }, [])
  
  return (
    <ScrollView>
        <View style={styles.sectionContainer}>
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
