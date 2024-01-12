import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';

export default function App() {
  const names = ['Matthieu', 'Marc', 'Luc', 'Jean'];
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app test!</Text>
      <Text>Bonjour à tous !</Text>
      <StatusBar style="auto" />
      {names.map((name, index) => {
        return <Welcome key={index} name={name} />;
      })}
      
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
