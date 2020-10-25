import React from 'react';
import {View, StyleSheet} from 'react-native';
import { useTheme, Title } from 'react-native-paper';

const Header = () => {
  const theme = useTheme();
  
  return (
    <View style={{...styles.header, backgroundColor: theme.colors.background}}>
      <Title style={{...styles.title, color: theme.colors.text}}>Notes</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    justifyContent: 'flex-end',
    padding: 15,
    paddingBottom: 0,
  },
  title: {
    fontSize: 40,
    lineHeight: 40,
  },
});

export default Header;
