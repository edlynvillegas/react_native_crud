import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Card, Paragraph, useTheme} from 'react-native-paper';
// Context
import { NoteContext } from '../context/NoteContext';
// Custom hooks
import { useStringFunction } from '../custom-hooks';

const NoteCard = ({ note }) => {
  const theme = useTheme();
  const { trimStr } = useStringFunction();
  const { setNotePage, setActiveNote, NOTE_ACTIONS } = useContext(NoteContext);

  const changeActive = () => setActiveNote(note.id);
  const showDialog = () => setNotePage({ visible: true, mode: NOTE_ACTIONS.VIEW });

  const cardPress = () => {
    changeActive()
    showDialog()
  }

  return (
      <Card style={{...styles.card_content, backgroundColor: theme.colors.card}} elevation={0} onPress={cardPress}>
        <Card.Title
          title={ note.title && note.title.length > 0 ? trimStr(note.title, 12, null, true) : '(No title)' }
        />
        <Card.Content>
            <Paragraph>
              { note.note && note.note.length > 0 ? trimStr(note.note, 65, null, true) : '(Empty note)' }
            </Paragraph>
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
