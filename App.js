import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  DefaultTheme,
  Provider as PaperProvider,
  useTheme,
} from 'react-native-paper';
import NoteProvider from './context/NoteContext';

import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';

const init_theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ffd800',
    surface: '#000',
    text: '#FFF',
    background: '#000',
    card: 'rgba(255,255,255,0.2)',
  },
};

const App = () => {
  const theme = useTheme();

  return (
    <NoteProvider>
      <PaperProvider theme={init_theme}>
        <View
          style={{
            ...styles.mainContainer,
            backgroundColor: theme.colors.text,
          }}>
          <Header />
          <Main />
          <Navigation />
        </View>
        {/* <Note /> */}
      </PaperProvider>
    </NoteProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
