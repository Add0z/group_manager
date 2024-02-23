import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from './src/theme';

import { Groups } from '@screens/Groups';

import  {Loading } from '@components/loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        translucent
        backgroundColor="transparent"
        barStyle="light-content" />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}