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
// import UsersTable from './components/UsersTable';

const App = () => {
  const theme = useTheme();

  return (
    <NoteProvider>
      <PaperProvider theme={DefaultTheme}>
        <View
          style={{
            ...styles.mainContainer,
            backgroundColor: theme.colors.background,
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
