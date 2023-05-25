import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './src/styles/styles';
import Login from './src/pages/login';
import Register from './src/pages/register';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Register />
    </View>
  );
}
