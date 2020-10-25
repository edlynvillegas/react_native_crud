import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Paragraph, useTheme} from 'react-native-paper';
import { NoteContext } from '../context/NoteContext';

const NoteCard = ({ note, index }) => {
  const theme = useTheme();
  const { setNotePage, activeNote, setActiveNote, NOTE_ACTIONS } = useContext(NoteContext);
  // console.log('NOTE_ACTIONS', NOTE_ACTIONS)

  const changeActive = () => setActiveNote(index);
  const showDialog = () => setNotePage({ visible: true, mode: NOTE_ACTIONS.VIEW });

  const cardPress = () => {
    changeActive()
    showDialog()
  }

  // useEffect(() => {
  //   showDialog()
  // }, [activeNote])

  return (
      <Card style={styles.card_content} elevation={0} onPress={cardPress}>
        <Card.Title title={note.title} />
        <Card.Content>
            <Paragraph>{note.note}</Paragraph>
        </Card.Content>
      </Card>
  );
};

const styles = StyleSheet.create({
  card_content: {
    flex: 1,
  },
});

export default NoteCard;
