import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './src/styles/styles';
import Login from './src/pages/login';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}
