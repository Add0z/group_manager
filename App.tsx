import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from './src/theme';
import { ButtonStyled } from '@components/Button';

import { NewGroup } from '@screens/NewGroup';

import { Groups } from '@screens/Groups';

import  {Loading } from '@components/loading';
import { Players } from '@screens/Players';
import { AppRoutes } from '@routes/app.routes';
import { Routes } from '@routes';

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
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}