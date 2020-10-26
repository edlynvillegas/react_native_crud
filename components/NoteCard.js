import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Paragraph, useTheme} from 'react-native-paper';
import { NoteContext } from '../context/NoteContext';
import { useStringFunction } from '../custom-hooks';

const NoteCard = ({ note }) => {
  const theme = useTheme();
  const { trimStr } = useStringFunction();
  const { setNotePage, setActiveNote, NOTE_ACTIONS } = useContext(NoteContext);
  // console.log('NOTE_ACTIONS', NOTE_ACTIONS)

  const changeActive = () => setActiveNote(note.id);
  const showDialog = () => setNotePage({ visible: true, mode: NOTE_ACTIONS.VIEW });

  const cardPress = () => {
    changeActive()
    showDialog()
  }

  return (
      <Card style={{...styles.card_content, backgroundColor: theme.colors.card}} elevation={0} onPress={cardPress}>
        <Card.Title title={ note.title && note.title.length > 0 ? note.title : '(No title)'} />
        <Card.Content>
            <Paragraph>{note.note && note.note.length > 0 ? trimStr(note.note, 60) : '(Empty note)'}</Paragraph>
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
