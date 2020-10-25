import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Paragraph, useTheme} from 'react-native-paper';
import { NoteContext } from '../context/NoteContext';

const NoteCard = ({ note }) => {
  const theme = useTheme();
  const { setNotePage, setActiveNote, NOTE_ACTIONS } = useContext(NoteContext);
  // console.log('NOTE_ACTIONS', NOTE_ACTIONS)

  const changeActive = () => setActiveNote(note);
  const showDialog = () => setNotePage({ visible: true, mode: NOTE_ACTIONS.VIEW });

  const cardPress = () => {
    changeActive(note)
    showDialog()
  }
  return (
      <Card style={styles.card_content} elevation={0} onPress={cardPress}>
        <Card.Title title={note.title} />
        <Card.Content>
            <Paragraph>{note.description}</Paragraph>
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
