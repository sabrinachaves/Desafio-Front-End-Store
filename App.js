import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './src/components/search-bar';
import {
  useFonts,
  Raleway_400Regular,
  Raleway_700Bold
} from "@expo-google-fonts/raleway";

export default function App() {
  const [fontLoaded] = useFonts({
    "RalewayRegular": Raleway_400Regular,
    "RalewayBold": Raleway_700Bold,
  });

  if(!fontLoaded){
    return <View />
  }

  return (
    <View style={styles.container}>
      <SearchBar text="O que deseja encontrar?"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
