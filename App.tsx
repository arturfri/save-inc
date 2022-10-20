import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { ReemKufi_400Regular, ReemKufi_700Bold } from '@expo-google-fonts/reem-kufi';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

moment.locale('pt-br');

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
    ReemKufy: ReemKufi_400Regular,
    ReemKufyBold: ReemKufi_700Bold,
  });
  if(!fontsLoaded){
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WORK IN PROGRESS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 23,
    fontFamily: 'ReemKufy',
  }
});